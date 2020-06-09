build:
	make clean
	make db
	make images
	make bundle
	make html
	make netlifycms

start:
	npx parcel src/index.html src/cms/index.html

clean:
	rm -rf public
	mkdir public

db:
	node ./scripts/generate-database.js

images:
	node ./scripts/generate-images.js

bundle:
	npx parcel build src/index.html

html:
	npx pressrun public

netlifycms:
	cp -r cms public/admin

serve:
	npx serve public
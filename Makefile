build:
	make clean
	make db
	make images
	make bundle
	make html

start:
	npx parcel src/index.html

clean:
	rm -rf dist
	mkdir dist

db:
	node ./scripts/generate-database.js

images:
	node ./scripts/generate-images.js

bundle:
	npx parcel build src/index.html

html:
	npx pressrun dist

serve:
	npx serve dist
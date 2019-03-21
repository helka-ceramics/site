import CMS from 'netlify-cms'
import * as ColorWidget from 'netlify-cms-widget-native-color'

CMS.registerWidget('native-color', ColorWidget.Control)

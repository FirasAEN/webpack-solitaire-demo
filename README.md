
## Commands

* From the command line :  `npx webpack ./app/app.js bundle.js`
* `npx webpack app/app.js --mode=development -o app/dist/bundle.js`
* Putting your code in a IIFE is not necessary when using webpack because it will wrap it for us.
* install `webpack-stats-graph` (need to install chocolatey then install graphviz)
* use `npx webpack app/app.js --mode=development -o app/dist/bundle.js --json > stats.json`
* run `webpack-stats-graph`

![][file_structure]


 [file_structure]: docs/structure.png "structure"
# youtube-clone-grunt

This repository was developed to test grunt commands.

It is a simple clone of the YouTube Music homepage.

### Install dependencies
`npm install`

### Run
`npm start`

### Lint
`npm run lint`

### Build
`npm run build`

## Grunt tasks:
### Eslint
This project uses eslint to format the code. It is runned automatically
by grunt on the build process and server initialization. This is possible
by the `grunt-eslint` dependency.

### Connect and Watch
`grunt-contrib-connect` allows the project to be hosted on localhost
port 9000, listening for changes in the 35729 port. `grunt-contrib-watch` runs tasks
whenever the specified files are changed, also informing changes on `refresh.files`
for the 35729 port, listened by connect.

The `serve` task runs the `connect` and `watch` tasks so the livereload is configured
in a way that any changed files are updated in real time.

### Concat

Concat (`grunt-contrib-concat`) concats all specified files into one, in the `dist` folder.

### Cssmin and Uglify

Cssmin is used to minify css. Uglify minifies JS. Grunt is configured to run the concat for both
types of files and then run cssmin and uglify to get both js and css single files and minify them.

`grunt-contrib-watch` is also configured to run the concat and minify everytime a file of that type changes.



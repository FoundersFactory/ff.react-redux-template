# React & Redux project template

A simple React + Redux template to use as a base for projects.

## Includes

 - Webpack
 - CSS Modules
 - ES6 via Babel
 - Thunk (could be swapped out for Sagas)

## Folder Structure

```
src
  /app
    /global
    /common
    /features
  /assets
    /fonts
    /images
  /config
```

See individual folder READMEs for more information

## Nifty extras

Naming a file `.reducer.js` will automatically include it in the redux store. You will need to restart the server to see changes (but this is a minor loss in comparison to having to list out every reducer in an index file, etc. etc.)

Instead of including files by traversing upwards to the correct folder, you can use `app/path/to/file` to start searching from the `app` folder


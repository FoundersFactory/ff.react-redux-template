# React & Redux project template

Simple React + Redux project to use as a base

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

Naming a file `.reducer.js` will automatically include it in the redux store.

Instead of including files by traversing upwards to the correct folder, you can use `app/path/to/file` to start searching from the `app` folder


# dd_generator
## Description
Welcome on this Dungeon & Dragon Character Generator. The goal of this is to allow you to quickly create different characters, making you able to adapt to whatever your crazy players might do. Or if you're a lazy player who does not want to bother with creating a complicated character, this one is for you. 

## Project file structure 
So far:
- The App and main files are here for the initialization, the modules and for the global layout
- Each Vue file inside of the View folder correspond to one page layout. It fires events, gets props, has the templates and the CSS
- Each Vue file inside of the Presenter folder correspond to a view and is here to handle events, states and pass props
- The store folder contains the different files we use for differents part such as the authentication state or the options we use to populate the dropdown
- The router folder contains the Vue router property
- The component folder contains Vue Components that we are using in multiple places. Button was just a try, Input is gonna be replace soon but we use the pdf.vue to generate the final pdf that people get
- Plugins is only used by bootstrap-vue
- Assets contain the images, logo, well, the different images we use.
- Api contains the different API related functions we use.
- We're having different branches so feel free to have a look to see what is going on in different places :)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

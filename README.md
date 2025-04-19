# Form
A  React component to generate a form dynamically using a javascript object / JSON

# Components
Components or fields are defined in the componentTypes folder and the have the job of taking in user input and storing it in the answers object in the store and rendering those values back to the user.

# Answers
The form component has a provider that stores the values of all form elements in the answers part of the store. Values can be retrieved from the provider by passing in a getAnswers function (val: Record<string, any>)=>void as a form builder prop. 

# Options
Various components like dropdowns, radio buttons, autcomplete and multiselects make use of options in the form of {value: string | number, label: string, position?: int}[] arrays. These can be defined in the json or can be referenced using a string that matches a key in a provided map of options. The intention of this approach is to provide an easy way to get cusstom options defined by an external provider like redux or apollo into the form provider. All api calls can and should be handled outside of form builder. 

# Functions
Some components such as a button can have a functionName parameter which is a string that matches a key in a map of argumentless functions taht return void. This map of functions is passed to the provider through form builder and is available for use by all components that use functionName parameters.

# Validation
The passed in JSON to a form should ne immutable and should never change at any point in the life cycle of form builder. Instead a form state object is initialized when form builder is loaded which is a map of the field id and field state objects. This object in the store can be modified and will keep track of whether or not a question has been answered, is required, disabled or hidden. Various state operations setting the answers in the store should also update those properties. 

# Vite + React + TS
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

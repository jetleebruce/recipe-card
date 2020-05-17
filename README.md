This project is created for the learning purposes.

# Result

- Clean modern UI. Card with an image, title, description and will see
- All the information for the card is getting from open API https://www.themealdb.com/api.php

## Process

- npx create-react-app .
- Create RandomMeal.js component and putted it to the App.js component

In RandomMeal.js

- Defined the API to be ready be used by the component.
- With help of useState and useEffect have fetched the data from API database
- Actually I had two approaches to fetch data with useEffect. The first one is working.
  [![useeffect.png](https://i.postimg.cc/CLG6zWvH/useeffect.png)](https://postimg.cc/w7BkrbY7)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

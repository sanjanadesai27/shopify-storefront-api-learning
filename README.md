## See it live in action [here](http://sanjanadesai.ca/shopify-storefront-api-learning/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Shopify Storefront API Example built using React-Apollo

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)

## Installation

* `git clone https://github.com/sanjanadesai27/shopify-storefront-api-learning` this repository
* `cd shopify-storefront-api-learning`
* `yarn install`

## Configuring

If you would like to connect your store to this example, open up `src/index.js` and update the `uri` and `X-Shopify-Storefront-Access-Token`:

```js
const httpLink = createHttpLink({
   uri: 'https://{your-store-name}.myshopify.com/api/graphql',
   headers: {
    'X-Shopify-Storefront-Access-Token': '{your-token-here}'
  } 
})
```

## Running

Start a local server:

```
yarn start
```

* Visit your app at [http://localhost:3000](http://localhost:3000).

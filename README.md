This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Shopify Storefront API Example built using React-Apollo

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)

## Installation

* `git clone https://github.com/Shopify/storefront-api-examples.git` this repository
* `cd storefront-api-examples`
* `cd react-apollo`
* `yarn install`

## Configuring

If you would like to connect your store to this example, open up `src/index.js` and update the `domain` and `storefrontAccessToken`:

```js
const networkInterface = createNetworkInterface({ uri: 'https://your-shop-name.myshopify.com/api/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers['X-Shopify-Storefront-Access-Token'] = 'your-storefront-access-token'
    next();
  }
}]);
```

## Running

Start a local server:

```
yarn start
```

* Visit your app at [http://localhost:3000](http://localhost:3000).

# gatsby-plugin-helpscout
Gatsby plugin to install beacon (live chat) Help Scout.

## Install

`yarn add gatsby-plugin-helpscout`

or

`npm i gatsby-plugin-helpscout --save`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-helpscout`,
    options: {
      includeInDevelopment: true, // optional parameter to include script in development
      code: YOUR_BEACON_CODE,
    },
  },
];
```

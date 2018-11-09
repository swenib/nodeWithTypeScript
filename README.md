# A simple Node.js-App using TypeScript

## Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)
- Install [TypeScript](https://www.typescriptlang.org/index.html#download-links)

  Mac Users do:

  ```
  brew install typescript
  ```

  Others do:

  ```
  npm install -g typescript
  ```

- Install nodemon

  ```
  npm install -g nodemon
  ```

## Running

```
npm install
npm run start
```

## Deploy on Heroku

- unless you have one, create a free [Heroku Account](https://signup.heroku.com/dc)
- install the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- login on the Command Line

  ```
  heroku login
  ```

- create Heroku App and push

  ```
  heroku create node-with-ts
  git push heroku master
  ```

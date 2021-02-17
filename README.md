Next.js webapp running on AWS amplify

## Table of contents

- [AWS Amplify](#aws-amplify)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Basic commands](#basic-commands)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## AWS Amplify

[AWS Amplify](https://docs.amplify.aws/) is a serverless framework to build fullstack that using AWS managed services.

Available services:

- [GraphQL API](https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js)
- [Rest API](https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js)
- [Auth](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js)
- [DataStore](https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js)
- [Interactions](https://docs.amplify.aws/lib/interactions/getting-started/q/platform/js)
- [Predictions](https://docs.amplify.aws/lib/predictions/intro/q/platform/js)
- [PubSub](https://docs.amplify.aws/lib/pubsub/getting-started/q/platform/js)
- [Push Notifications](https://docs.amplify.aws/lib/push-notifications/overview/q/platform/js)
- [Storage](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js)
- [XR](https://docs.amplify.aws/lib/xr/getting-started/q/platform/js)
- [Utilities](https://docs.amplify.aws/lib/utilities/serviceworker/q/platform/js)

### Admin UI

The [Admin UI](https://docs.amplify.aws/console/adminui/intro) is a visual interface to develop app backends and manage app content outside the AWS Management Console.

### Good practices

After getting started with the framework, there are a few steps to follow on AWS console to make the application production ready:

- Finish the first successful build of your app
- Add a custom domain with a free SSL certificate
- Set up a test version of your site by connecting a feature branch
- Password-protect your site
- Enable pull request previews

Those steps can be viewed in the AWS console

## Project structure

It is a fractal architecture. All top-level folder may repeat in nested folders

- `modules`: where all domains are defined in isolation.
- `components`: where all UI components are placed. These components should have no business logic.
- `lib` where helpers, normalizers and third-party libraries functions should be placed.
- `hooks`: groups all custom hooks and side-effects.
- `pages`: where all pages should be placed. By doing that, Next.js will automatically [create routes](https://nextjs.org/docs/basic-features/pages)
- `shared`: holds files related to global scope.

```
.
├── .vscode
├── adr
├── amplify
│   ├── backend
│       ├── api
│   ├── mock-data
│   ├── cli.json
│   ├── team-provider-info.json
├── cypress
├── graphQL
├── models
├── public
├── src
│   ├── api
│       ├── modules
│           ├── user
│               ├── repositories
│                   ├── user.repository.ts
|   ├── lib
|       ├── utils
|       ├── normalizers
|   ├── modules
|       ├── user
│           ├── components
│           ├── graphQL
│           ├── hooks
│           ├── lib
│   ├── pages
│   ├── shared
│       ├── components
│       ├── hooks
│       ├── libs
│    ├── styles
│       ├── base.css
│       ├── main.css
├── .babelrc
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .graphqlconfig.yml
├── .nvmrc
├── .prettierignore
├── .prettier
├── aws-exports.js
├── codegen.yml
├── commitlint.config.js
├── cypress.json
├── jest.config.js
├── Makefile
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── setupTests.js
├── tailwind.config.js
├── tsconfig.json
├── yarn.lock
```

## Basic commands

### Local development

- `yarn` installs all the application dependencies
- `yarn dev` starts the application in development mode with hot reload
- `yarn build` creates an optimized production build of your application. The output displays information about each route
- `yarn start` starts the application in production mode. The application should be compiled with `yarn build` first

### Linting

- `yarn lint` lints the application.
- `yarn lint:fix` lints the application and try to fix linting errors.

### Code formatting

- `yarn format` runs prettier to format the code and save the changes.

### Typing

- `yarn type-check` checks application's typing
- `yarn codegen:graphql` generates typescript types based on graphql schema and documents by introspecting the graphql host and parsing `.gql` files.

### Unit testing

- `yarn test:unit` runs unit tests
- `yarn test:unit:w` runs unit tests in watch mode
- `yarn test:unit:cover` runs unit tests and gerenates coverage reports
- `yarn test:unit:cover:w` runs unit tests in watch mode and gerenates coverage reports

### e2e testing

> This tests automatically creates coverage

- `yarn test:e2e` runs e2e testing with cypress in headless mode
- `yarn test:e2e:open` opens the cypress UI and runs e2e tests

### Running all tests

- `yarn qa` runs linting, type checking and unit tests
- `yarn qa:cover` runs linting, type checking, unit tests with coverage and e2e tests.
- `yarn test:ci` runs `yarn test:all` and `yarn test:e2e`

## Deployment

The Deployment process begins by pushing a branch to the remote repository. After successfully pushing the branch, some steps will be executed:

- The deploy to [Vercel](https://vercel.com/nsc-total/nsc-total-frontend) will be executed by a github integration
- The commands [npm run test:all && npm run build](https://vercel.com/nsc-total/nsc-total-frontend/settings) will run in order to deploy the application only if those commands passes
- The github action `ci.yml` will be triggered and run an e2e test against the newly [previewed](https://vercel.com/docs/platform/deployments#preview) version of the application generated by vercel

## Troubleshooting

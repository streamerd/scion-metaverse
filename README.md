# Phaser Starter

A [Phaser](https://phaser.io/) starter for Game Jams

## Features

-   Modern JavaScript with Webpack & Babel
-   ESLint & Prettier
-   Automatic deployments to Itch

## Usage

There are a number of available scripts, but the most useful are:

-   `npm start` - Start a development server
-   `npm run build` - Create a production build, outputs to `dist`

For a full list use: `npm run`

## Itch Deployments

A [workflow](./.github/workflows/deploy.yml) is included to automatically deploy the dist directory to an Itch game. By default, this will only run when a new GIT tag is detected matching the `v*` format, but can be easily customised should you want to change this.

Deployments are handled by [Butler](https://itch.io/docs/butler/) and require 3 secret keys to be setup within your project.

-   `BUTLER_CREDENTIALS` - Your Itch API Key ([found here](https://itch.io/user/settings/api-keys))
-   `ITCH_USER` - Your Itch username
-   `ITCH_GAME` - The unique Itch game slug as found in your games URL

Games are automatically applied a `web` channel. Please see the [Butler documentation](https://itch.io/docs/butler/) for required information about deploying browser playable games.

## Licence

[MIT](./LICENSE)

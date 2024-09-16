# web-cse440-24au

Course website for Autumn 2024 offering of CSE 440.

## Installation of System Dependencies

Requires Node.js and the Yarn package manager.

- [Node.js](https://nodejs.org/)

  Installers: <https://nodejs.org/en/download/>

  Development has used version 20.x.  
  This could be enforced through addition of `engines` to `package.json`.

- [Yarn](https://yarnpkg.com/)

  ```shell
  npm install --global yarn
  ```

## Installation of Javascript Dependencies

```shell
yarn install
```

Install dependencies from `yarn.lock`.

## Yarn Commands

```shell
yarn run
```

List available commands.

```shell
yarn dev
```

Serve a debug build on `http://localhost:3000`, with hot reloading.

```shell
yarn export
```

Build a production bundle and create static deployment files in `dist`.

```shell
yarn format
```

Apply code formatting.

# Website

[![Deploy to GitHub Pages](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/actions/workflows/deploy.yml)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The branch [`main`](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main) contain source files, branch [`deploy`](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/deploy) be used for GitHub-Pages deployment.

> Node.js version >= 14

## Install
```
npm ci
```

or

```
npm install
```

## Local Preview
```
npm run start
```

## Build & Deploy
```
npm run build
npm run deploy
```

> Environment variable `GIT_USER` and `GIT_PASS` are required, see [Deployment](https://docusaurus.io/docs/deployment#environment-settings)

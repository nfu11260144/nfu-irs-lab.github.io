# Website

[![Deploy to GitHub Pages](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/actions/workflows/deploy.yml)

This website is built using [Docusaurus 2](https://docusaurus.io/).

The [`main`](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main) branch contain source files, [`deploy`](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/deploy) branch used as GitHub Pages.

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
### Automatic
This repo has [Actions](https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/actions/workflows/deploy.yml), which will automatically build and deploy when `push` to `main` branch.

### Manual
```
npm run build
npm run deploy
```

> Environment variable `GIT_USER` and `GIT_PASS` are required, see [Deployment](https://docusaurus.io/docs/deployment#environment-settings).

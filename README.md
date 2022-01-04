<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="./src/assets/images/gatsby-tech.png" width="400" />
  </a>
</p>

<h1 align="center">
  Gatsby Scalable Starter
</h1>
<p align="center">
  Gatsby starter that uses all the extras to get you up and running with scalable architecture, and workflow as fast as possible.
</p>

## What's inside?

- Gatsby (v3)
- Storybook (v6)
- Twin.macro
- Tailwind Reset
- Netlify Config
- ESLint (Standard)
- Prettier
- React to SVG Generator
- React Hook utilities

## Quick start

```bash
$ gatsby new my-awesome-site https://github.com/LinnJS/gatsby-scalable-starter

$ cd my-awesome-site
$ yarn start || yarn develop
```

## Details

## How to work with `svg`s

You are welcome to come up with other solutions, but we typically do this:

1. `npm install -g svg-to-react-cli` (https://www.npmjs.com/package/svg-to-react-cli)
2. Navigate to the directory where there is your svg (e.g. `example.svg`)
3. Run `svgtoreact example Example`, this then creates `Example.js` (the React component for the svg). You can then import this component like any other React component.

## How to work via Twin.Macro?

You can use Tailwind the way you are used to with the added functionality of styled-components and CSS-in-JS with Twin directly. Look at the docs for examples.

`twin.macro` (https://github.com/ben-rogerson/twin.macro).

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markoradak/gatsby-starter-storybook)

## License

Licensed under the MIT License.  
See [license](LICENSE) for more information.

# NHSD Data Visualisation Library

This is the repository for NHSD's data visualisation library.

The purpose of this library is create accessible data visualisations for the web with HTML/SVG.

--------

## Getting Started

The easiest way to install the NHSD Data Visualisation Library is with npm.

To install the latest version simply run:

`npm install nhsd-dataviz`

Once installed you can import the library into your project and create a chart:

```javascript
import { chart } from 'nhsd-dataviz';

chart('#viz', {
  "introText": "In 2022",
  "data": {
    "percent": 18,
    "subject": "adults",
    "description": "had a possible eating disorder",
    "change": {
      "percent": -3,
      "date": "2021"
    }
  }
});
```

### Build from source

Alternatively you may clone the project and build your own distribution bundle:

```
git clone https://github.com/NHS-digital-website/nhsd-dataviz.git
npm install
npm run build
```

The following code snippet demonstrates loading the data visualisation library using the minified UMD bundle and creating a basic chart:

```
<html>
    <head>
      <script src="nhsd-dataviz.min.js"></script>
    </head>
    <body>
      <div id="viz"></div>
      <script>
      nhsdviz.chart('#viz', {
        "data": {
            "date": "2022",
            "percent": 18,
            "subject": "adults",
            "description": "had a possible eating disorder",
            "change": {
                "percent": -3,
                "date": "2021"
            }
        }
      });
      </script>
    </body>
</html>
```

--------

## API

## Create a chart

nhsdviz.chart(<i>selector</i>, <i><a href="#optionsObject">options</a></i>)

### <a name="optionsObject" href="#optionsObject">#</a> Options object

| Property          | Value                                                | Description                              |
|-------------------|------------------------------------------------------|------------------------------------------|
| vizType           | "pie" \| "doughnut" \| "icon" \| "stat" \| "column"  | Chart type (default: pie)                |
| title             | String                                               | Chart title text                         |
| introText         | String                                               | Chart introductory text                  |
| data              | <a href="#dataObject">Data object</a>                | Chart data                               |
| source            | { text: String, href: String }                       | Source text                              |
| palette           | String                                               | Chart palette                            |
| icon              | String (<a href="#icons">icon name</a>)              | Chart icon                               |
| desktopViewport   | number (px)                                          | Desktop viewport (default: 1024)         |

### <a name="dataObject" href="#dataObject">#</a> Data object

| Property     | Value                                           | Description                          |
|--------------|-------------------------------------------------|--------------------------------------|
| description  | String                                          | Chart description                    |
| subject      | String                                          | Data subject                         |
| change       | { percent: number, from: number, date: string } | Chart change text                    |
| yAxis        | { title: string, start: number, end: number }   | yAxis options (column)               |
| xAxis        | { title: string }                               | xAxis options (column)               |
| percent      | number                                          | Chart percent value (pie & doughnut) |
| ratio        | { numerator: number, denominator: number }      | Chart ratio value (icon)             |
| quantity     | number                                          | Chart quantity value (stat)          |
| series       | { name: string, value: [number] }               | Chart series data (column)           |

### <a name="icons" href="#icons">#</a> Supported icons 

If building from source icons should be placed in the `assets/icons/` directory, these icons can then be referenced by their file names.

If using the distribution library the following icons are avaliable:

- `arrow-down`
- `arrow-up`
- `calendar`
- `invite`
- `person`
- `tooth`
- `wine-glass`

--------

## Examples

#### Pie Chart
https://jsfiddle.net/LEJA3/cq8rbs12/

#### Doughnut Chart
https://jsfiddle.net/LEJA3/f4o6v2xh/

#### Icon Chart
https://jsfiddle.net/LEJA3/kroLbf4z/

#### Statistics Chart
https://jsfiddle.net/LEJA3/rov9weby/

#### Column Chart
https://jsfiddle.net/LEJA3/fqtphz7o/

--------
## Colour palette

nhsdviz.createPalette(<i>name</i>, <i><a href="#paletteObject">palette</a></i>)

### <a name="paletteObject" href="#paletteObject">#</a> Palette object

| Property     | Value                                           | Description                          |
|--------------|-------------------------------------------------|--------------------------------------|
| primary      | String (Hex colour code)                        | Primary chart colour                 |
| secondary    | String (Hex colour code)                        | Secondary chart colour               |
| background   | String (Hex colour code)                        | Background chart colour              |
| text         | String (Hex colour code)                        | Main text colour                     |
| text2        | String (Hex colour code)                        | Secondary text colour                |

### Example
https://jsfiddle.net/LEJA3/k2tL0pcq/


--------------------------

## Creating a release

Before creating a release first ensure your changes have been merge into the `main` branch. You can do this by raising a pull request.

Once your changes have been merged you can draft a release from the [Github releases page](https://github.com/NHS-digital-website/nhsd-dataviz/releases).

First create a tag following [semantic versioning](https://semver.org/) rules prefixed with "v". Eg, "v1.5.2".

You may then title the release and include a description of the changes.

Once release has been published the distribution workflow will create a new npm version from the git tag.

It will then publish the changes to [npm](https://www.npmjs.com/package/nhsd-dataviz) and push an updated `package.json` file containing the latest version number back to `main`.

### Alpha, beta & RC versions

To test changes before creating a release you may want to publish pre-release version to npm.

This can easily be done with the following commands:

First create a non-release version:
`npm --no-git-tag-version version 1.2.0-rc.1`

Then publish the version to npm using a non-release tag:
`npm publish --tag beta`

Once pulished you can install the version from your project with npm:
`npm install nhsd-dataviz@1.2.0-rc.1`


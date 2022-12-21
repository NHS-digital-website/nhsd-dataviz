# NHSD Data Visualisation Library

This is the repository for NHSD's data visualisation library.

The purpose of this library is create accessible data visualisations for web with HTML/SVG, JPG & PNG fallbacks where JavaScript isn't avaliable.

--------

## Getting Started

### Download the latest release

To you can download the latest releases on the [release page](https://github.com/NHS-digital-website/nhsd-dataviz/releases).

### Build from source

Alternatively you may clone and build your own distribution:

```
git clone https://github.com/NHS-digital-website/nhsd-dataviz.git
npm install
npm run build
```

--------

## Usage

The following code snippet demonstrates loading the data visualisation library and creating a basic chart:

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


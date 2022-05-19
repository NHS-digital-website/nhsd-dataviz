# NHSD Data Visualisation Library

This is the repository for NHSD's data visualisation library.

The purpose of this library is create accessible data visualisations for web with HTML/SVG, JPG & PNG fallbacks where JavaScript isn't avaliable.

--------

## Getting Started

### Download the latest release

To you can download the latest releases on the [release page.](https://github.com/NHS-digital-website/nhsd-dataviz/releases).

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
        "fontSize": "18px",
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

| Property  | Value                                    | Description              |
|-----------|------------------------------------------|--------------------------|
| vizType   | "pie" \| "doughnut" \| "icon"            | Chart type               |
| title     | String                                   | Chart title text         |
| introText | String                                   | Chart introductory text  |
| data      | <a href="#dataObject">Data object</a> | Chart data               |
| source    | { text: String, href: String }           | Source text              |
| palette   | String                                   | Chart palette            |

### <a name="dataObject" href="#dataObject">#</a> Data object

| Property     | Value                                           | Description                          |
|--------------|-------------------------------------------------|--------------------------------------|
| description  | String                                          | Chart description                    |
| subject      | String                                          | Data subject                         |
| change       | { percent: number, from: number, date: string } | Chart change text                    |
| percent      | number                                          | Chart percent value (pie & doughnut) |
| ratio        | { numerator: number, denominator: number }      | Chart ratio value (icon)             |

### Examples

#### Pie Chart
https://jsfiddle.net/LEJA3/cq8rbs12/

#### Doughnut Chart
https://jsfiddle.net/LEJA3/f4o6v2xh/

#### Icon Chart
https://jsfiddle.net/LEJA3/kroLbf4z/

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

--------

## Export Server

To provide a fallback where JavaScript isn't available the project includes an export service which allows charts to be exported in HTML/SVG, PNG, or JPG formats.

To start the export server:

```
npm install
npm run export-server
```

Once started, a web interface should be available at <a href="http://localhost:3001" target="_blank">http://localhost:3001.</a>

Alternatively, charts can be exported via the API. To do this send a POST request to http://localhost:3001 and pass in the <a href="#optionsObject">chart options</a> in the request body.

Optionally, a `format` property can be specified with the values, `jpg`, `png`, or `svg` depending on your desired output format.

### Example request

```
curl --location --request POST 'http://localhost:3001/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "vizType": "pie",
    "data": {
        "date": "2022",
        "percent": 15,
        "subject": "adults",
        "description": "had a possible eating disorder",
        "change": {
            "percent": 3,
            "date": "2021"
        }
    },
    "format": "png"
}'
```

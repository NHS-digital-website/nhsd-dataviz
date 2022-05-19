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

nhsdviz.chart(<i>selector</i>, <i>options</i>)

### Options object

| Property  | Value                          | Description              |
|-----------|--------------------------------|--------------------------|
| vizType   | "pie" \| "doughnut" \| "icon"  | Chart type               |
| title     | String                         | Chart title text         |
| introText | String                         | Chart introductory text  |
| data      | Data object                    | Chart data               |
| source    | { text: String, href: String } | Source text              |
| palette   | String                         | Chart palette            |

### Data object

| Property     | Value                                           | Description                          |
|--------------|-------------------------------------------------|--------------------------------------|
| description  | String                                          | Chart description                    |
| subject      | String                                          | Data subject                         |
| change       | { percent: number, from: number, date: string } | Chart change text                    |
| percent      | number                                          | Chart percent value (pie & doughnut) |
| ratio        | { numerator: number, denominator: number }      | Chart ratio value (icon)             |

## Colour palette

nhsdviz.createPalette(<i>name</i>, <i>palette</i>)

### Palette object

| Property     | Value                                           | Description                          |
|--------------|-------------------------------------------------|--------------------------------------|
| primary      | String (Hex colour code)                        | Primary chart colour                 |
| secondary    | String (Hex colour code)                        | Secondary chart colour               |
| background   | String (Hex colour code)                        | Background chart colour              |
| text         | String (Hex colour code)                        | Main text colour                     |
| text2        | String (Hex colour code)                        | Secondary text colour                |

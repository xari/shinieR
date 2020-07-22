# shinieR
Shinier inputs for Shiny apps

![shinieR demo](./shinier_demo.gif)

## Installation

`devtools::install_github("xari/shinieR")`

## Usage

### `timeInput()`

```r
timeInput(
    "timeInput",
    configuration = list(
       disableClock = TRUE,
       format = "HH:mm",
       hourPlaceholder = "HH",
       minutePlaceholder = "MM"
    )
)
```

### `switchInput()`

```r
switchInput("switchInput",
            c("Yes", "No"))
```

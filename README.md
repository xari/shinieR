# shinieR
New inputs for Shiny apps

<img width="1440" alt="Screenshot 2022-02-04 at 17 27 36" src="https://user-images.githubusercontent.com/5170193/152565676-4f20a025-6636-4d73-839e-4729cffce282.png">

## Installation

`devtools::install_github("xari/shinieR")`

## Usage

Each input requires an `inputId`, and also accepts optional `value` and `configuration` arguments.

#### `timeInput()`

This input is a binding for [`react-time-picker`](https://github.com/wojtekmaj/react-time-picker#readme).
All props for the React component may be given as items to the `configuration` list, as shown below.

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

#### `switchInput()`

This is a binding for [`react-toggle`](https://github.com/aaronshaf/react-toggle).
Like `timeInput()`, all original props can be passed to the component via the `configuration` list.

```r
switchInput("switchInput",
            c("Yes", "No"))
```

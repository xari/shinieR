#' <Render a Time Input>
#'
#' <Based on [react-time-picker](http://projects.wojtekmaj.pl/react-time-picker/).>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
timeInput <- function(inputId,
                      default = format(lubridate::now(), "%H:%M"),
                      configuration = NULL) {
    reactR::createReactShinyInput(
                                  inputId,
                                  "time w-40",
                                  htmltools::htmlDependency(
                                                            name = "time-input",
                                                            version = "1.0.0",
                                                            src = "www/shinieR/time",
                                                            package = "shinieR",
                                                            script = "time.js",
                                                            stylesheet = "time.css"
                                                            ),
                                  default,
                                  configuration,
                                  htmltools::tags$div)
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateTimeInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}

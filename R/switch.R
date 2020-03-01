#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
switchInput <- function(inputId,
                        default = FALSE,
                        configuration = NULL) {
  reactR::createReactShinyInput(
    inputId,
    "switch",
    htmltools::htmlDependency(
      name = "switch-input",
      version = "1.0.0",
      src = "www/shinieR/switch",
      package = "shinieR",
      script = "switch.js"
    ),
    default,
    configuration,
    htmltools::tags$span
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateSwitchInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}

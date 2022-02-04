#' <Render a Switch Input>
#'
#' <This input can also render any other Shiny input that is passed to it.>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
switchInput <- function(inputId,
                        default = FALSE,
                        configuration = list()) {
  configuration[["inputId"]] <- inputId

  reactR::createReactShinyInput(
      inputId,
      "switch shiny-bound-input ml-3",
      htmltools::htmlDependency(
        name = "switch-input",
        version = "1.0.0",
        src = "www/shinieR/switch",
        package = "shinieR",
        script = "switch.js",
      ),
      default = default,
      configuration = configuration,
      htmltools::tags$div
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

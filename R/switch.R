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
                        label = c(FALSE, TRUE),
                        default = FALSE,
                        configuration = list()) {
  configuration[["inputId"]] <- inputId

  div(
    class = "form-group shiny-input-container",
    style = "display: flex",

    tags$label(
      class = "control-label switch-label font-weight-bold",
      `for` = inputId,
      label[1]
    ),

    reactR::createReactShinyInput(
      inputId,
      "switch form-control switch shiny-bound-input",
      htmltools::htmlDependency(
        name = "switch-input",
        version = "1.0.0",
        src = "www/shinieR/switch",
        package = "shinieR",
        script = "switch.js",
        stylesheet = "switch.css"
      ),
      default,
      configuration,
      htmltools::tags$span
    ),

    tags$label(
      class = "control-label switch-label",
      `for` = inputId,
      label[2]
    )
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

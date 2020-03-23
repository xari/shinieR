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
                        label = c(FALSE, TRUE),
                        default = FALSE,
                        configuration = list(),
                        render_input = NULL) {

  if (!is.null(render_input)) render_input[["label"]] <- list(NULL)

  configuration[["inputId"]] <- inputId

  div(
    class = "form-group shiny-input-container",

    tags$label(
      class = "control-label",
      `data-alt` = label[2],
      label[1],
      `for` = inputId
    ),

    if (!is.null(render_input))
      do.call(render_input$input,
              render_input[-1]),

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

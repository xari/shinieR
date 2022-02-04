library(shiny)
library(shinieR)
library(dplyr)

switchContainer <- function(input, input_id, default, label, description) {
    div(class = "flex items-start",
        div(class = "text-sm w-48",
            tags$label(class = "control-label font-medium text-gray-700",
                       label),
            tags$p(class = "text-gray-500",
                   description)),
        input(input_id,
              default))
}

timeContainer <- function(input, input_id, default, configuration, label) {
    div(class = "flex items-start",
        div(class = "text-sm w-48",
            tags$label(class = "control-label font-medium text-gray-700",
                       label),
            input(input_id,
                  default,
                  configuration)))
}

ui <- htmlTemplate("template.html",
                   title = "shinieR",
                   switchInput = switchContainer(switchInput,
                                                 "switchInput",
                                                 default = TRUE,
                                                "A typical switch toggle",
                                                "An elegant, accessible toggle component for Shiny."),
                   timeInput = timeContainer(timeInput,
                                             "timeInput",
                                             default = format(lubridate::now(), "%H:%M"),
                                             configuration = list(disableClock = TRUE,
                                                                  format = "HH:mm",
                                                                  hourPlaceholder = "HH",
                                                                  minutePlaceholder = "MM",
                                                                  className =  "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"),
                                             "A typical time input"))

server <- function(input, output, session) {
  output$timeOutput <- renderText({
    sprintf("You entered: %s", input$timeInput)
  })

  output$switchOutput <- renderText({
    sprintf("You entered: %s", input$switchInput)
  })
}

shinyApp(ui, server)

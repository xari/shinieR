library(shiny)
library(shinieR)

ui <- fluidPage(
  titlePanel("reactR Input Example"),
  timeInput("timeInput",
            configuration = list(disableClock = TRUE,
                                 format = "HH:mm",
                                 hourPlaceholder = "HH",
                                 minutePlaceholder = "MM")),
  textOutput("timeTextOutput"),
  switchInput("switchInput",
            configuration = list()),
  textOutput("switchTextOutput")
)

server <- function(input, output, session) {
  output$timeTextOutput <- renderText({
    sprintf("You entered: %s", input$timeInput)
  })

  output$switchTextOutput <- renderText({
    sprintf("You entered: %s", input$switchInput)
  })
}

shinyApp(ui, server)

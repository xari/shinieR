library(shiny)
library(shinieR)

ui <- fluidPage(
  titlePanel("shinieR Inputs"),

  h3("timeInput"),

  timeInput("timeInput",
            configuration = list(disableClock = TRUE,
                                 format = "HH:mm",
                                 hourPlaceholder = "HH",
                                 minutePlaceholder = "MM")),

  tags$br(),

  textOutput("timeTextOutput"),

  h3("switchInput"),

  switchInput("switchInput", c("Yes", "No")),

  tags$br(),

  textOutput("switchOutput")
)

server <- function(input, output, session) {
  output$timeTextOutput <- renderText({
    sprintf("You entered: %s", input$timeInput)
  })

  output$switchOutput <- renderText({
    sprintf("You entered: %s", input$switchInput)
  })
}

shinyApp(ui, server)

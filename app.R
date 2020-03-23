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

  switchInput("switchInput"),

  tags$br(),

  textOutput("switchOutput"),

  h3("switchInput with render_input"),

  switchInput("switchInputRender",
              configuration = list(),
              render_input = list(
                input = textInput,
                inputId = "renderTextInput",
                placeholder = "render input placeholder"
              )),

  tags$br(),

  textOutput("switchRenderOutput"),

  tags$br(),

  textOutput("renderOutput")
)

server <- function(input, output, session) {
  output$timeTextOutput <- renderText({
    sprintf("You entered: %s", input$timeInput)
  })

  output$switchOutput <- renderText({
    sprintf("You entered: %s", input$switchInput)
  })

  output$switchRenderOutput <- renderText({
    sprintf("You entered: %s", input$switchInputRender)
  })

  output$renderOutput <- renderText({
    sprintf("You entered: %s", input$renderTextInput)
  })
}

shinyApp(ui, server)

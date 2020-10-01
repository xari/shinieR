library(shiny)
library(shinieR)
library(dplyr)

ui <- fluidPage(
  theme = "tailwind.min.css",
  # titlePanel(windowTitle = "shinieR Inputs"),

  h2(class = "text-5xl my-5",
             "shinieR Inputs"),

  div(
    class = "flex mb-4 space-x-6 space-y-6 items-baseline",
    div(
      class = "max-w-sm rounded overflow-hidden shadow-lg bg-indigo-100",
      div(class = "px-6 py-4",
	  timeInput(
		    "timeInput",
		    "Time",
		    configuration = list(
					 disableClock = TRUE,
					 format = "HH:mm",
					 hourPlaceholder = "HH",
					 minutePlaceholder = "MM"
		    )
	  ),
      tags$br(),
      textOutput("timeOutput") %>%
        tagAppendAttributes(class = "text-gray-700 text-base")
      )
    ),
    div(
      class = "max-w-sm rounded overflow-hidden shadow-lg bg-indigo-100",
      div(class = "px-6 py-4",
	  switchInput("switchInput", c("Yes", "No")),
	  tags$br(),
	  textOutput("switchOutput") %>%
		  tagAppendAttributes(class = "text-gray-700 text-base")
      )
    )
  )
)

server <- function(input, output, session) {
  output$timeOutput <- renderText({
    sprintf("You entered: %s", input$timeInput)
  })

  output$switchOutput <- renderText({
    sprintf("You entered: %s", input$switchInput)
  })
}

shinyApp(ui, server)

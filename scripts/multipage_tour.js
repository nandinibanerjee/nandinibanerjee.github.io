        var tour = {
          id: "hello-hopscotch",
        steps: [
        {
          target: "header",
          placement: "bottom",
          title: "This is the title",
          content: "It generally portrays what a website is about"
        },
        {
          target: "nav",
          placement: "right",
          title: "This is the navigation pane",
          content: "Click to find out more about these people"
        },
        {
          target: "body",
          placement: "top",
          title: "My Content",
          content: "Here's a summary of the content"
        },
        {
          target: "footer",
          placement: "top",
          title: "Cisco Confidential",
          content: "All this information is highly classified"
        },
            {
              title: "Multipage Example",
              content: "We're going to the next page now...",
              target: "body",
              placement: "top",
              xOffset: 'center',
              yOffset: 'center',
              multipage: true,
              onNext: function() {
                window.location = "carlo.html"
              }
            },
            {
              title: "Contact Information",
              content: "Here is where you can view Carlo's information",
              target: "body",
              placement: "top",
              xOffset: 'center',
              yOffset: 'center'
            },
              {
              title: "Let's Go Back",
              content: "We're going to go back now...",
              target: "nav",
              placement: "top",
              xOffset: 'right',
              yOffset: 'center',
              multipage: true,
              onNext: function() {
                window.location = "index.html"
              }
            },
            {
              title: "The End",
              content: "This is the end of the tour!",
              target: "body",
              placement: "top",
              xOffset: 'center',
              yOffset: 'center'
            }
          ]
        };

    // Start the tour!
    hopscotch.startTour(tour);
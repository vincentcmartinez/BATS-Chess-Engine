const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Add a click event listener to each radio button
    radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener("click", function () {
        // Update the playerColor variable when a radio button is clicked
        switch(radioButton.value) {
            case "black": isWhite = false; break;
            case "white": isWhite = true; break;
            case "random": isWhite = !!(Math.round(Math.random())); 
        }
        if(!gameStarted) {
            repopulateBoard();
        }
        let debugPlayerColor = isWhite ? "white" : "black";
        console.log("Player color selected:", debugPlayerColor);
      });
    });
populateBoard();


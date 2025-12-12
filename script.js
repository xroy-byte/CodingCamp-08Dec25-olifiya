console.log('Hello World');

/// initialize welcome message prompt
welcomeMessage();

///function to display welcome message based on user input
function welcomeMessage() {
    /// prompt user for input
   let userResponse = prompt("Welcome to My Portfolio! How are you today?");

   /// if user cancels or inputs empty string, set default response
   if (userResponse === null || userResponse.trim() === "") {
       userResponse = "doing well";
   }

   /// display welcome message with user input
   Document.getElementById("welcome-speech").innerHTML = "Welcome to My Portfolio! I'm glad to hear you're " + userResponse + ".";
   
}

/// form validation function
function validateMessageForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let errorMessage = "Please correct the following errors:\n";
}
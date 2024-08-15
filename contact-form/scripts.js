document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate the form
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let queryType = document.querySelector("input[name=\"queryType\"]:checked");
    let message = document.getElementById("message").value;
    let consent = document.getElementById("consent").checked;


    // Log the form data to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email Address:", email);
    console.log("Query Type:", queryType.value);
    console.log("Message:", message);
    console.log("Consent:", consent);

    // Show an alert message
    alert("Thank you for contacting us!");

    // You can reset the form if needed
    document.getElementById("form").reset();
});

// Code provided mostly by EmailJS for their API, with some modifications to suit this site's purposes
// Enable contact form

function sendMail(contactForm) {
    emailjs.send("service_8tyxpul", "La Petite Sirene", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "event_enquiry": contactForm.eventenquiry.value
    })
    .then(

// If sending email is successful, browser alert and redirect to index.html

        function(response) {
            alert("Sent successfully", response);
        window.location.replace("/")},

// If sending email fails, browser alert error message

        function(error) {
            alert("Failed to send", error);
        });
        return false;
}
function sendMail(contactForm) {
    emailjs.send("service_8tyxpul", "La Petite Sirene", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "event_enquiry": contactForm.eventenquiry.value
    })
    .then(
        function(response) {
            alert("Sent successfully", response);
        },
        function(error) {
            alert("Failed to send", error);
        });
        return false;
}
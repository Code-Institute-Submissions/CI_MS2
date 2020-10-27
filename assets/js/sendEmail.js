function sendMail(contactForm) {
    emailjs.send("service_8tyxpul", "La Petite Sirene", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "event_enquiry": contactForm.eventenquiry.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("failure", error);
        });
        return false;
}
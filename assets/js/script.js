function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
  };

  emailjs
    .send("service_rycugzh", "template_2lgnxyh", parms)
    .then(alert("Email Sent !!"));
}

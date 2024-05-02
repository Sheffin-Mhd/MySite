// mail.js

function sendEmail() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;
  
    // Send email using EmailJS
    emailjs.send("service_b4t832g","template_w44o5oj",{
        subject: subject,
        from_name: name,
        message: message,
        from_mail:email
        }).then(function(response) {
      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
    }, function(error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email.");
    });
  
    // Clear form fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("messageInput").value = "";
  }
  
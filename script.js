//script.js
function SentMail(){
    var params = {
        fullname : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_x8mqe1t","template_ry3euc6", params).then(function(res){
            alert("success!");
        })
    }

function sendMail(){
    let parms={
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_rerp35n","template_f4k5bzu",parms).then(alert("yup ! i recived"));
}
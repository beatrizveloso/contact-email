(() => {
    emailjs.init({
        publicKey: "StGts4CbzLqnHZeYo",
    })
})();

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault()


    emailjs.sendForm("service_yrfb2j4", "template_5myhzgc", this).then(
        function() {
            console.log("sucess")
            alert("Email enviado com sucesso")
        }
    ), function(err) {
        console.log("Fail", err)
        alert("Falha ao enviar o email, tente mais tarde!")
    }
})
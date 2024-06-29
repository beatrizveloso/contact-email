
    emailjs.init({
        publicKey: "StGts4CbzLqnHZeYo"
    })

    function handleEmail(){ 
        let templateParams = {
            name: "Destinatário",
            user_email: "mariaeduarda.nicacio2007@gmail.com",
            from_name: "Suporte de Domingo",
            message: "Conteúdo da mensagem aqui..."
        }

        emailjs.send("service_yrfb2j4", "template_em0vx3h", templateParams)
        .then(function(response) {
            console.log("Email enviado com sucesso", response.status, response.text )
        }), function(error) {
            console.error("Erro ao enviar o email", error)
        }
    }
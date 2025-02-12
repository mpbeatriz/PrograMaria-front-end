document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome-da-usuaria").value != "" && 
    document.getElementById("email-usuaria").value != "" && 
    document.getElementById("celular").value !='') {
        alert("Prontinho! Você receberá as novidades por e-mail")
    }else{
        alert("Por favor, preencha os campos de nome, e-mail e celular.")
    }
}


$(document).ready(function(){
    let cadastrar_button = document.querySelector("button#cadastrar")
    cadastrar_button.addEventListener("click", function(e){
        e.preventDefault();
        let funcionario_dados = {
            nome: document.querySelector("#nome").value,
            cpf: document.querySelector("#CPF").value,
            email: document.querySelector("#email").value,
            endereco: document.querySelector("#endereco").value,
            numero_tel: document.querySelector("#numero_tel").value,
            pessoa_contato: document.querySelector("#pessoa_contato").value,
            cargo: document.querySelector("#cargo").value,
            data: document.querySelector("#data").value,
            remuneracao: document.querySelector("#remuneracao").value,
            observacoes: document.querySelector("#observacoes").value
        }
    })
});




    

















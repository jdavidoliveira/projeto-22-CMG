$(document).ready(function(){
    let form = document.querySelector("#form")

    let cadastrar_button = document.querySelector("button#cadastrar");
    let consultar_button = document.querySelector("button#consultar");

    let nome = document.querySelector("#nome").value
    let cpf = document.querySelector("#CPF").value
    let email = document.querySelector("#email").value
    let endereco= document.querySelector("#endereco").value
    let numero_tel = document.querySelector("#numero_tel").value
    let pessoa_contato = document.querySelector("#pessoa_contato").value
    let cargo = document.querySelector("#cargo").value
    let data = document.querySelector("#data").value                       
    let remuneracao = document.querySelector("#remuneracao").value
    let observacoes = document.querySelector("#observacoes").value
    let foto = document.querySelector("#foto").value


    //cadastrar 
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
            observacoes: document.querySelector("#observacoes").value,
            foto: document.querySelector("#foto").value //aqui será guardado apenas o endereço local do arquivo
        }
        localStorage.setItem("Cadastro",JSON.stringify(funcionario_dados))
        form.reset();
    })

    //consultar
    consultar_button.addEventListener("click", function(e){
        e.preventDefault();
        funcionario_dados = localStorage.getItem("Cadastro")
        document.querySelector("#nome").value = 
        document.querySelector("#CPF").value
        document.querySelector("#email").value
        document.querySelector("#endereco").value
        document.querySelector("#numero_tel").value
        document.querySelector("#pessoa_contato").value
        document.querySelector("#cargo").value
        document.querySelector("#data").value                       
        document.querySelector("#remuneracao").value
        document.querySelector("#observacoes").value
        document.querySelector("#foto").value




    })
});




    

















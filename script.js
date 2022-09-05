$(document).ready(function(){
    let form = document.querySelector("#form")

    let cadastrar_button = document.querySelector("button#cadastrar");
    let consultar_button = document.querySelector("button#consultar");
    
    //Mascara pro CPF
    let campo_cpf = document.querySelector("#CPF")
    campo_cpf.addEventListener("keypress", function(){
        if (campo_cpf.value.length === 3) {
            campo_cpf.value += "."
        } else if (campo_cpf.value.length === 7) {
            campo_cpf.value += "."
        } else if (campo_cpf.value.length === 11) {
            campo_cpf.value += "-"
        }
    })
    //cadastrar 
    cadastrar_button.addEventListener("click", function(e){
        e.preventDefault();
        if (document.querySelector("#nome").value.length == 0) {
            alert("Verifique os dados e tente novamente.")
        } else {
            let funcionario_dados = {
                nome: document.querySelector("#nome").value,
                cpf: document.querySelector("#CPF").value,
                email: document.querySelector("#email").value,
                endereco: document.querySelector("#endereco").value,
                numero_tel: document.querySelector("#numero_tel").value,
                pessoa_contato: document.querySelector("#pessoa_contato").value,
                cargo: document.querySelector("#cargo").options[document.querySelector("#cargo").selectedIndex].value,
                data: document.querySelector("#data").value,
                remuneracao: document.querySelector("#remuneracao").value,
                observacoes: document.querySelector("#observacoes").value,
                foto: document.querySelector("#foto").value //aqui será guardado apenas o endereço local do arquivo
            }
            localStorage.setItem("Cadastro",JSON.stringify(funcionario_dados))
            alert("Dados Cadastrados")
            form.reset();
        }
    })

    //consultar
    consultar_button.addEventListener("click", function(e){
        e.preventDefault();
        if (localStorage.getItem("Cadastro") == null) {
            alert("Nenhum dado cadastrado!")
        } else {
            let dados_json = localStorage.getItem("Cadastro")
            funcionario_dados = JSON.parse(localStorage.getItem("Cadastro"))
            document.querySelector("#nome").value = funcionario_dados.nome
            document.querySelector("#CPF").value = funcionario_dados.cpf
            document.querySelector("#email").value = funcionario_dados.email
            document.querySelector("#endereco").value = funcionario_dados.endereco
            document.querySelector("#numero_tel").value = funcionario_dados.numero_tel
            document.querySelector("#pessoa_contato").value = funcionario_dados.pessoa_contato
            document.querySelector("#cargo").value = funcionario_dados.cargo
            document.querySelector("#data").value = funcionario_dados.data
            document.querySelector("#remuneracao").value = funcionario_dados.remuneracao
            document.querySelector("#observacoes").value = funcionario_dados.observacoes
            document.querySelector("#foto").value = funcionario_dados.foto
        }



    })
});




    

















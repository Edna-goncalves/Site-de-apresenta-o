//variáveis
const nome=document.getElementById('inome')
const email=document.getElementById('iemail')
const mensagem=document.getElementById('imensagem')
const botaoEnviar=document.getElementById('botaoEnviar')
let podeEnviar=true

//checador de click
botaoEnviar.addEventListener("click", function(){
    validarPreenchimento(nome)
    validarPreenchimento(email)
    validarEmail()
    validarPreenchimento(mensagem)
    envio()
})

//funções
function validarPreenchimento(campo){
    if(campo.value==""){
        alert('Erro, todos os campos devem estar preenchidos')
        podeEnviar=false
    }
}

function validarEmail(){
    if(!email.value.includes('@')){
        alert('Erro, seu email é inválido')
        podeEnviar=false
    }
}

function envio(){
    if(podeEnviar==true) {
        alert('Mensagem enviada com sucesso!')
    }
}
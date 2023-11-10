function Aparecer(informacoes)
{
console.log(informacoes)
document.querySelector('.CEP').value = informacoes.cep
document.querySelector('.endereco').value = informacoes.logradouro
document.querySelector('.bairro').value = informacoes.bairro
document.querySelector('.cidade').value = informacoes.localidade
document.querySelector('.estado').value = informacoes.uf
}

function ddd(informacoes){
const numero = informacoes.ddd
alert("O DDD é igual a", numero)

}

var acao = document.querySelector('.aa')
acao.addEventListener('click', ddd())



async function Buscarinformacoes(menino){
    const informacoes = await fetch(`https://viacep.com.br/ws/${menino}/json/`).then(Response =>Response.json())
    Aparecer(informacoes)
}



function PesquisarBotao()
{
const menino = document.querySelector('.CEP').value
Buscarinformacoes(menino)
}

Document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const btn = document.querySelector('.botao');
        btn.click()
    }
});

function LimparBotao(){
document.querySelector('.CEP').value = " "
document.querySelector('.endereco').value = " "
document.querySelector('.bairro').value = " "
document.querySelector('.cidade').value = " "
document.querySelector('.estado').value = " "
}
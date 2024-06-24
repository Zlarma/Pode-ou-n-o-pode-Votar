let resposta = document.getElementById('resposta')

function analiseFunction(){
    let nome = document.getElementById('nome').value
    let age = Number(document.getElementById('age').value)
    console.log(age)
    
    if(age < 16){
        resposta.innerHTML = nome + ' não é permitido votar, pois sua idade é de ' + age + ' anos.'
        resposta.style.fontSize = '25px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.top = '20px '
    resposta.style.webkitTextStroke = '1px black'
    resposta.style.textShadow = '0px 2px 4px black'
        }else if((age >= 16) && (age < 18)){
            resposta.innerHTML = nome + ' é permitido votar, pois sua idade é de ' + age + ' anos, mas não é obrigatório.'
            resposta.style.fontSize = '25px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.top = '20px '
    resposta.style.webkitTextStroke = '1px black'
    resposta.style.textShadow = '0px 2px 4px black'
            
        }else if((age >= 18) && (age < 70)){
            resposta.innerHTML = nome + ' é obrigatório votar, pois sua idade é de ' + age + ' anos.'
            resposta.style.fontSize = '25px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.top = '20px '
    resposta.style.webkitTextStroke = '1px black'
    resposta.style.textShadow = '0px 2px 4px black'
            
        }else if(age >= 70){
            resposta.innerHTML = nome + ' é opcional votar, pois sua idade é de ' + age + ' anos.'
            resposta.style.fontSize = '25px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.top = '20px '
    resposta.style.webkitTextStroke = '1px black'
    resposta.style.textShadow = '0px 2px 4px black'
            
    }
    
}
// todos os botões
const C = document.querySelector("#clear");
const del  = document.querySelector("#delet");
const equal = document.querySelector("#equal");
const buttons = document.querySelectorAll("button");

// tela o resultado e da expressão logica
let result = document.querySelector(".result")
let expression = document.querySelector(".expression")

// lista dos itens que são apertada no botão
let resultValue = [];

// checar se o butao foi apertado é o que eu quero
function chekedID(btn, id) {
    return btn.id.match(id)
}

// limpar tudo
function clear() {
    resultValue = [];
    expression.innerHTML = '';
    result.innerHTML = '00';
}

// deletar o ultimo item da lista
function delet(list) {
    return list.slice(0, list.length - 2);
}


// main
function calculator(btn) {
    btn.addEventListener('click', () =>{
        // adicionando os botões na lista
        resultValue.push(btn.value);

        // verificar se o botão C foi apertado
        if (chekedID(btn, 'clear')) {
            clear();

        // verificar se o botão del foi apertado
        } else if(chekedID(btn, 'delet')) {
            resultValue = delet(resultValue);

        // verificar se o botão igual foi apertado
        } else if(chekedID(btn, 'equal')) {
            result.innerHTML = eval(resultValue.join(''));
        }

        // colocar os valores na tela
        expression.innerHTML = resultValue.join('');      
    });
}

// quando apertar um botão
buttons.forEach(button => calculator(button));

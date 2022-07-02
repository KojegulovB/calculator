const input = document.querySelector(".calculator__input-result")

function insert(n) {
    input.value = input.value + n
}
function clean(){
    input.value = ""
}
function back(){
    let exp = input.value
    input.value = exp.substring(0, exp.length - 1)
}
function equal(){
    let exp = input.value
    
    if(exp){
        input.value = eval(exp)
        if(eval(exp) === Infinity) input.value = 0;
    }
}
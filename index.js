let input = document.querySelector("input")
 
function addValue(elementval){
    input.value += elementval
}
 function clearValue(){
    input.value = ""
 }

function delValue(){
    input.value = input.value.slice(0,input.value.length-1)
}
 function evalVal(){
    input.value = eval(input.value)
 }
// function to dispaly content
function displaycontent(content){
    result.value += content
}

// clear input
function calclear(){
    result.value = ""
}

// result
function calresult(){
    result.value = eval(result.value)
}

// backspace
function backspace(){
    result.value = result.value.slice(0,-1)
}

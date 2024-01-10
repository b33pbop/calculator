const result = document.getElementById("result");
let prevFunction;
let answer = 0;

function clearResult(){
    result.value = "0";
    prevFunction = "clearResult";
}

function updateResult(button){
    if(prevFunction == "displayResult"){
        if(button == "/" || button == "*" || button == "-" || button == "+"){
            result.value += button;
        }
        else if(!isNaN(button) || button == "." || button == "(" || button == ")"){
            result.value = button;
        }
    }
    else{
        if(result.value != "0"){
            result.value += button;
        }
        else if(result.value == "0"){
            result.value = button;
        }
    }
    prevFunction = "updateResult";
}

function displayResult(){
    try{
        result.value = eval(result.value);
        answer = result.value;
    }
    catch(error){
        result.value = "Error";
    }
    prevFunction = "displayResult";
}

function deleteLastChar(){
    if(prevFunction == "displayResult" || prevFunction == "displayPrevResult"){
        result.value = "0";
    }

    let resultLength = result.value.length;
    if(resultLength == 1){
        result.value = "0";
    }
    else{
        result.value = result.value.slice(0, resultLength - 1);
    }
    prevFunction = "deleteLastChar";
}

function displayPrevResult(){
    let lastChar = result.value.slice(result.value.length - 1, result.value.length);
    if(!isNaN(lastChar)){
        result.value = answer;
    }
    else if(lastChar == "/" || lastChar == "**" || lastChar == "*" || lastChar == "+" || lastChar == "-"){
        result.value += answer;
    }
    prevFunction = "displayPrevResult";
}

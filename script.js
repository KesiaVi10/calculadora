const display = document.getElementById("display");

function appendSymbol(symbol){
    display.value+=symbol;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    diplay.value = diplay.value.slice(0, -1);
}

function calculete(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value="Erro";
    }
}




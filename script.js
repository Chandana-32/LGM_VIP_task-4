//Clears values
function clearScreen(){
    document.getElementById("result").value= "";
}
//Displays Values
function display(value){
    document.getElementById("result").value += value;
}
//Evaluates and Expressions
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}
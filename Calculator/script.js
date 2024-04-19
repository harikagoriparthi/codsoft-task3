
function clearScreen() 
{
    document.getElementById("result").value = "";
}
function display(value) 
{
    document.getElementById("result").value += value;
}
function calculate() 
{
    var p = document.getElementById("result").value;
    document.getElementById("result").value = eval(p);
}
function perc()
{
   var x = document.getElementById("result").value;
    document.getElementById("result").value = (x/100);
}
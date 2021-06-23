let textvalue=document.getElementById("textval");
function display(val){
    textvalue.value = textvalue.value + val;
}
function clr(){
    textvalue.value ="";
}
function calculate(){
    let a=textvalue.value;
    try{
        var b=eval(a);
        if (Number.isInteger(b))
            textvalue.value = b;
        else 
            textvalue.value=b.toFixed(2);
    }
    catch (err) {
        alert(err.message);
    }
}
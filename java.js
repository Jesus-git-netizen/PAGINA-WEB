function iniciar(){
    const usua=document.getElementById("usua").value.trim();
    const contra=document.getElementById("contra").value.trim();
    
    if(usua==="" || contra===""){
        alert("Llena los espacios en blanco");
    }else{
        alert("Iniciaste sesión!");
    }
}
function reg(){
    const todo1=document.getElementById("k1").value.trim();
    const todo2=document.getElementById("k2").value.trim();
    const todo3=document.getElementById("k3").value.trim();
    const todo4=document.getElementById("k4").value.trim();
    if(todo1==="" || todo2==="" || todo3==="" || todo4===""){
        alert("Llena los espacios en blanco");
    }else{
        alert("Te has registrado, ahora navega!");
    }
}
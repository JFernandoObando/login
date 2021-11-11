
document.getElementById("btnIngresar").onclick = go;
let contador=0;
let imagen=("assets/img/ac.jpg")
let imagen2=("assets/img/dn.jpg")
function go(){

    if (document.getElementById("pass").value=='pass' && document.getElementById("nomb").value=='Obando'){ 
   
        document.getElementById("to").innerHTML="<p>El ingreso se realizo exitosamente<\p>"+"<img height = 100px src="+imagen+"></img>"; 
        } 
        else{ 
            document.getElementById("cm").innerHTML="<img height = 70px src="+imagen2+"></img>"+"<p>Usuario o contraseña son incorrectos<\p>" +
            " <p>Porfavor ingresa nuevamente<\p>"+
            "Intento: "+contador
         
          document.getElementById("btnIngresar").innerHTML=++contador;
        } 
    } 

  
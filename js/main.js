function validateForm(){
    
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var input-email = document.getElementById("input-email").value;
    var input-password = document.getElementById("input-password").value;
    
    if( name ===""|| lastname===""|| input-email==="" ||input-password===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
}
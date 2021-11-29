function validarLogin() {
    var mymodal = new bootstrap.Modal(document.getElementById("idmodal"))
    usr = document.getElementById("usuario");
    ctr = document.getElementById("contrasena");
    var modalt = document.getElementById("idmodelt");
    if (usr.value == "admin" & ctr.value == "1234") {
        location.href = "dashboard.html";
    } else {
        var modalt = document.getElementById('idmodalt');
        modalt.innerText = "El usuario o contraseña no son correctos";
        mymodal.show();
    }
}
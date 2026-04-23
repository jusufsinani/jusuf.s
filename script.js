function validimi() {
    let emri = document.getElementById("emri").value.trim();
    let mbiemri = document.getElementById("mbiemri").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mosha = document.getElementById("mosha").value.trim();

    let eshteValid = true;

    let emriRegex = /^[a-zA-Z]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    let moshaRegex = /^[0-9]+$/;

    document.getElementById("emriError").innerHTML = "";
    document.getElementById("mbiemriError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("moshaError").innerHTML = "";

    if(emri === ""){
        document.getElementById("emriError").innerHTML = "Emri nuk duhet të jetë i zbrazët";
        eshteValid = false;
    } else if(!emriRegex.test(emri)){
        document.getElementById("emriError").innerHTML = "Emri duhet të përmbajë vetëm shkronja";
        eshteValid = false;
    }

    if(mbiemri === ""){
        document.getElementById("mbiemriError").innerHTML = "Mbiemri nuk duhet të jetë i zbrazët";
        eshteValid = false;
    } else if(!emriRegex.test(mbiemri)){
        document.getElementById("mbiemriError").innerHTML = "Mbiemri duhet të përmbajë vetëm shkronja";
        eshteValid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerHTML = "Email nuk duhet të jetë i zbrazët";
        eshteValid = false;
    } else if(!emailRegex.test(email)){
        document.getElementById("emailError").innerHTML = "Email duhet te jete valide";
        eshteValid = false;
    }

    if(password === ""){
        document.getElementById("passwordError").innerHTML = "Password nuk duhet të jetë i zbrazët";
        eshteValid = false;
    } else if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerHTML = "Password duhet te kete 6 karaktere, 1 shkronje dhe 1 numer";
        eshteValid = false;
    }

    if(mosha === ""){
        document.getElementById("moshaError").innerHTML = "Mosha nuk duhet të jetë e zbrazët";
        eshteValid = false;
    } else if(!moshaRegex.test(mosha) || mosha < 18){
        document.getElementById("moshaError").innerHTML = "Mosha duhet te jete numer dhe më lart se 18";
        eshteValid = false;
    }

    if(eshteValid){
        alert("Forma u dergua me sukses!");
    }
    return eshteValid;
}
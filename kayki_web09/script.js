function login(){
    event.preventDefault();
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;

    if (username === "usuario" && password === "senha"){
        notify("success", "Login bem-sucedido!");
    } else {
        notify("error", "Credenciais incorretas, tente novamente");
    }
}

function notify(type, message){
    const notify = document.getElementById("error-message");
    const notifyresult = document.getElementById("resultado");

    switch (type){
        case "error":
            notify.style.backgroundColor = "#da5252ff";
            notifyresult.innerHTML = message;
            break;
        case "success":
            notify.style.backgroundColor = "#52da5dff";
            notifyresult.innerHTML = message;
            break;
        case "attention":
            notify.style.backgroundColor = "#dacc52ff";
            notifyresult.innerHTML = message;
            break;
        default:
            console.log("erro");
            break;
    }
}
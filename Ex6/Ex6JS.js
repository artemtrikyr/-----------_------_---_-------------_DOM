function AddLogin() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    
    let loginMass = ["artemtrikyr", "skribagoga123", "rewalt56"]; 

    
    if (loginMass.includes(login)){
        alert("Логін зайнято. Введіть інший.");
    } else {
        if (login === password) {
            alert("Логін та пароль не можуть співпадати.");
        } else {
            alert("Логін " + login + " зареєстровано.");
        }
    }
}

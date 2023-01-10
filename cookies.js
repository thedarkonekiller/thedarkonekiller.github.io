//Ce script crée un élément div pour contenir la barre de cookies
var cookieBar = document.createElement("div");
cookieBar.id = "cookie-bar";
cookieBar.style.backgroundColor = "#D2691E";
cookieBar.style.padding = "10px";
cookieBar.style.position = "fixed";
cookieBar.style.bottom = "0";
cookieBar.style.width = "100%";
cookieBar.style.textAlign = "center";

//Ce script crée un message de notification de cookies
var cookieText = document.createTextNode("Ce site utilise des cookies pour améliorer votre expérience utilisateur. En utilisant notre site, vous acceptez notre politique de confidentialité et notre utilisation des cookies.");
cookieBar.appendChild(cookieText);

//Ce script crée un bouton pour accepter les cookies
var cookieButton = document.createElement("button");
cookieButton.innerHTML = "Accepter";
cookieButton.style.marginLeft = "10px";
cookieButton.style.backgroundColor = "#4CAF50";
cookieButton.addEventListener("click", function(){
    //Ce script gère l'événement de clic sur le bouton Accepter
    document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    cookieBar.style.display = "none";
});
cookieBar.appendChild(cookieButton);

//Ajoute la barre de cookies au body
document.body.appendChild(cookieBar);


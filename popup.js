window.onload = function() {
    //Crée un élément div pour la popup
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.backgroundColor = "#000000";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.boxSizing = "border-box";
    popup.style.width = "600px";
    popup.style.zIndex = "1000";

    //Crée un titre pour la popup
    var title = document.createElement("h2");
    title.innerHTML = "Bienvenue sur mon site";
    title.style.margin = "0 0 20px 0";
    popup.appendChild(title);

    //Crée un message pour la popup
    var message = document.createElement("p");
    message.innerHTML = "Ce site est fait uniquement à but éducatif, tout le contenu est fictif.";
    message.style.margin = "0 0 20px 0";
    popup.appendChild(message);

    //Crée un bouton pour fermer la popup
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Fermer";
    closeButton.style.backgroundColor = "#4CAF50";
    closeButton.style.color = "#fff";
    closeButton.style.padding = "10px 20px";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginTop = "100px";
    closeButton.addEventListener("click", function(){
        //Supprime la popup lorsque le bouton Fermer est cliqué
        document.body.removeChild(popup);
    });
    popup.appendChild(closeButton);

    //Ajoute la popup au body
    document.body.appendChild(popup);
};

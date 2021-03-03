// chargement dabs une variable de la balise <div id="jsLoaded">...</div>
var jsLoaded=document.querySelector("#jsLoaded");

// modification du style fond vert
jsLoaded.style.backgroundColor="green";

// modification du contenu texte de la balise
jsLoaded.innerText="Le JS est charge";

console.log("le fichier index.js a fini d'etre execute");
let idIndex = [
    "title",
    "subtitle",
    "about",
    "projects"
];

let textES = [
    "Mateo González Márquez",
    "Técnico superior en Desarrollo de Aplicaciones Multiplataforma",
    "Sobre mi",
    "Proyectos"
];

let textEN = [
    "Mateo González Márquez",
    "Advanced tecnician on Multi-Platform App Development",
    "About me",
    "Projects"
];

var currentLanguage = "es";

function loader() {
    if (currentLanguage == "es") {
        for (var i = 0; i < idIndex.length; i++) {
            document.getElementById(idIndex[i]).innerHTML = textES[i];
        }
    } else {
        for (var i = 0; i < idIndex.length; i++) {
            document.getElementById(idIndex[i]).innerHTML = textEN[i];
        }
    }
    document.getElementById("lang").src = "bin/flag_" + currentLanguage + ".png";
}

function changeLanguage() {
    if (currentLanguage == "es") {
        currentLanguage = "en";
    } else {
        currentLanguage = "es";
    }
    loader();
}
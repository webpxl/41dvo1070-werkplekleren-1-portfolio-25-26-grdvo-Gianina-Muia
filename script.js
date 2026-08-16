const projecten = document.querySelectorAll(".project");

projecten.forEach(function(project) {

    project.addEventListener("click", function() {

        project.classList.toggle("project-actief");

    });

});


const contactKnoppen =
    document.querySelectorAll(".contact-content .knop");

contactKnoppen.forEach(function(knop) {

    knop.addEventListener("click", function() {

        console.log("Contactpagina wordt geopend.");

    });

});


// aceuiel pages
// button of the accueil page style
let color = {
  click_event: "of",
};
const nav_color = (clickedElement) => {
  color.click_event = "on";
  let movie_button = document.getElementById("movie");
  let admin_button = document.getElementById("admin");
  if (clickedElement === movie_button) {
    movie_button.style.backgroundColor = "#0a121a";
    admin_button.style.backgroundColor = "#1e293b";
    color.element_clicked = "movie";
  } else if (clickedElement === admin_button) {
    movie_button.style.backgroundColor = "#1e293b";
    admin_button.style.backgroundColor = "#0a121a";
    color.element_clicked = "admin";
  }
};
const nav_hover = (element) => {
  element.style.backgroundColor = "#0a121a";
};
const reset_color = (element) => {
  if (element.id !== color.element_clicked && color.click_event === "of") {
    element.style.backgroundColor = "";
  } else if (
    element.id !== color.element_clicked &&
    color.click_event === "on"
  ) {
    element.style.backgroundColor = "#1e293b";
  }
};

//film show
// const film_info_control = async (element) => {
//   fetch("http://localhost:3000/")
//     .then((response) => {
      
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//       console.log("sabri");
//     })
//     // .then((data) => {
//     //   // choisir  le film a afficher en fonction de la selection du user
//     //   const filmsChoisis = data.films.filter(
//     //     (film) => film.name === element.id
//     //   );
//     //   //**

//     //   // ramene la balise  html qui j'ai crée dans film.html pour y injecter les informations des films
//     //   let container = document.getElementById("container-of-films");
//     //   container.innerHTML = "";
//     //   //**

//     //   // la création des autre balise
//     //   let imgElement = document.createElement("img");
//     //   imgElement.src = filmsChoisis[0].image;

//     //   let titreElement = document.createElement("h2");
//     //   titreElement.textContent = filmsChoisis[0].titre;

//     //   let acteursElement = document.createElement("p");

//     //   //converter les acteur q'il sont une list  en string pour le mettre dans un seul paragraphe
//     //   let convert_to_string = "";
//     //   for (let i = 0; i < filmsChoisis[0].acteurs.length; i++) {
//     //     convert_to_string = convert_to_string + filmsChoisis[0][i] + " , ";
//     //   }
//     //   //**

//     //   //suprimer  le ", " en fin de phrase
//     //   convert_to_string = convert_to_string.substring(
//     //     0,
//     //     convert_to_string.length - 2
//     //   );
//     //   //**
//     //   acteursElement.textContent = convert_to_string;

//     //   let anneeElement = document.createElement("p");
//     //   anneeElement.textContent =
//     //     "Année de sortie: " + filmsChoisis[0].annee_sortie;

//     //   let descriptionElement = document.createElement("p");
//     //   descriptionElement.textContent =
//     //     "Description: " + filmsChoisis[0].description;

//     //   let realisateurElement = document.createElement("p");
//     //   realisateurElement.textContent =
//     //     "Réalisateur: " + filmsChoisis[0].realisateur;
//     //   //**

//     //   // ajouter tout les balise crée  au conteneur

//     //   container.appendChild(imgElement);
//     //   container.appendChild(titreElement);
//     //   container.appendChild(acteursElement);
//     //   container.appendChild(anneeElement);
//     //   container.appendChild(descriptionElement);
//     //   container.appendChild(realisateurElement);
//     // })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// };
const film_info_control = async (element) => {
  try {
    const response = await fetch("http://localhost:3000",{
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data = await response.json();
    console.log(data); // Utilisez les données récupérées comme vous le souhaitez
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}



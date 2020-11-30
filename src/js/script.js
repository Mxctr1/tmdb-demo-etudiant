document.addEventListener("DOMContentLoaded", function (){


let connexion = new MovieDB();
connexion.requeteDernierFilm();

})
class MovieDB{

    constructor() {

        console.log("constructeur");

        this.APIkey = "3aeebd97128aed49400b14c135ed1440";
        this.lang = "fr-CA";
        this.baseURL = "https://api.themoviedb.org/3";
        this.imgPath = "http://image.tmdb.org/t/p/";
        this.totalFilm = 8;

    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));

        requete.open("GET", this.baseURL + "/movie/now_playing?api_key="+ this.APIkey +"&language=" + this.lang + "&page=1");

        requete.send();

    }

    retourRequeteDernierFilm(e){
        console.log("test");


        let target = e.currentTarget;
        let data;




        data = JSON.parse(target.responseText).results;

        console.log(data);

        this.afficheDernierFilm(data)

    }

    afficheDernierFilm(data){

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }

    }

}
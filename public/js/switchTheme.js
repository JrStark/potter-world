
let app = {
    // J'initialise mon app
    init: function () {
        app.addListenerToActions();
        app.setHours();
    },
    // Cette fonction permet d'appeler la fonction qui modifie de theme en dark ou lihgt mode
    addListenerToActions: function() {
        const chk = document.getElementById('chk');
        chk.addEventListener('change', () => {
            app.darkOrLight();
        });
    },
        // Cette fonction permet de modifier le theme en dark ou lihgt mode
    darkOrLight: function () {
        const bg = document.getElementById('background');
        const logo = document.getElementById('logo');
        const soleil = document.getElementById('soleil');
        const body = document.getElementById('body');
        const fbackground = document.getElementById('fbackground');

        body.classList.toggle('dark');
        bg.classList.toggle('dark');
        logo.classList.toggle('dark');
        soleil.classList.toggle('moon');
        fbackground.classList.add('dark');

    },
  // Fonction qui permet de changer de theme en fonction de l'heure qu'il est
    setHours: function(){
        let date = new Date();
        let hours = date.getHours();
        const body = document.getElementById('body');
        const background = document.getElementById('background');
        const fbackground = document.getElementById('fbackground');
        const soleil = document.getElementById('soleil');
        const h1 = document.getElementById('titleh1');
        const logo = document.getElementById('logo');

        console.log(hours);
        if (hours > 20 || hours < 6 ){
            background.classList.add('night');
            fbackground.classList.add('night');
            body.classList.add('dark');
            soleil.classList.toggle('moon');
            logo.classList.toggle('dark');

        }
        else if (hours < 9 || hours >17){
            background.classList.add('sunlight');
            fbackground.classList.add('sunlight');
            body.classList.add('sunlight');
            soleil.classList.toggle('twilight');
            h1.style.color = '#ffffff';
            logo.classList.toggle('dark');

        }
        else if (hours >= 9 || hours < 17){
            background.classList.add('sun');
            body.classList.toggle('sun');
            fbackground.classList.add('sun');
            
        }
        else{
            background.classList.add('night');
            body.classList.add('dark');
            soleil.classList.toggle('moon');
            logo.classList.toggle('dark');
            fbackground.classList.add('dark');
        }
    }
};
    document.addEventListener('DOMContentLoaded', app.init );





//Navbar
let logo = document.getElementById('logo');
let navbar = document.querySelector('.navbar-custom');
let botonNavbar = document.getElementById('navbar-toggler');
let menuDesplegable = document.getElementById('dropdown-menu');
let itemsNavbar = document.querySelectorAll('.nav-link');
let iconosNavbar = document.querySelectorAll('.iconosNavbar');



//cosas pagina incio
let textoInicio = document.querySelector('.texto-intro');
let textoInicioGrande = 'Las Artes Marciales Mixtas (MMA, por sus siglas en inglés) son una disciplina deportiva y de combate que combina técnicas de distintas artes marciales como el Muay Thai,Jiu-Jitsu, Boxeo, Karate y Lucha Libre. Este arte busca desarrollar habilidades tanto en el golpeo como en el grappling, permitiendo a los practicantes adaptarse a cualquier situación en el combate. Las MMA destacan por su versatilidad,estrategia y exigencia física, representando un equilibrio entre técnica, fuerza y resistencia.';
let textoInicioPequeno = 'Las Artes Marciales Mixtas (MMA, por sus siglas en inglés) son una disciplina deportiva y de combate que combina técnicas de distintas artes marciales como el Muay Thai,Jiu-Jitsu, Boxeo, Karate y Lucha Libre.';

// cosas Pagina del Hall of fame
let textoHall = document.querySelector('#textoHall');
let textoHallPeq = "Los deportes de contacto han tenido un aumento de popularidad en los ultimos años y con ello la aparicion de mas y mas atletas pero no todos tienen la misma capacidad para volver con el cinturon a casa";
let banner = document.querySelector('.banner');
let textoBanner = document.querySelector('#textoBanner');
let textoBannerPequeño = "Dana white confirma la revancha de Connor Mcgregor contra Khabib Nurmagomedov para febrero 2025";
let botonBanner = document.querySelector('#quitarBanner');
let flechaDerecha = document.querySelector('#flechaDer');
let flechaIzquierda = document.querySelector('#flechaIzq');
let evento = document.querySelector('#evento');
let textoEvento = document.querySelector('#textoEvento');
let eventos = ['Mcgregor Vs Diaz II', 'Ali Vs Fazier III', 'Tyson Vs Holyfield II', 'Daniels vs Thompson'];
let textosEvento = ['La revancha entre Conor McGregor y Nate Diaz fue un combate de cinco asaltos cargado de emoción y drama, que mostró la determinación y habilidad de ambos peleadores. Después de que Diaz sometiera a McGregor en su primer enfrentamiento, el irlandés regresó con un plan estratégico más refinado, enfocado en su movilidad, precisión y manejo de energía.',
    'El tercer y último enfrentamiento entre Muhammad Ali y Joe Frazier es considerado uno de los combates más épicos en la historia del boxeo. Este duelo, que definiría su rivalidad, se desarrolló bajo un calor sofocante que llevó a ambos pugilistas al límite de su resistencia física y mental. Este combate fue una prueba de habilidad, resistencia y paciencia.',
    'La revancha entre Mike Tyson y Evander Holyfield pasó a la historia como uno de los combates más polémicos en el boxeo. Después de que Holyfield derrotara a Tyson por TKO en su primer enfrentamiento, la expectativa para la segunda pelea era altísima. Sin embargo, el combate quedó marcado por un incidente inesperado que eclipsó lo deportivo.',
    'Raymond Daniels hizo su debut en Karate Combat enfrentándose a Franklin Mina en un combate que emocionó tanto a los fanáticos del karate tradicional como a los seguidores de los deportes de contacto modernos. Este enfrentamiento marcó un hito para Daniels, ya que trajo su explosivo estilo de striking al formato único y cinematográfico de Karate Combat.'
];
let imagenEvento = document.querySelector('#imagenEvento');
let fotosEventos = ['../imagenes/mcgregorVSnateII.jpg', '../imagenes/aliVsfrazier.jpg', '../imagenes/tysonVSholyfieldII.jpg', '../imagenes/danielsVSsouza.jpg']

//cosas pagina Contacto
let botonMadrid = document.querySelector('#botonMadrid');
let botonBarcelona = document.querySelector('#botonBarcelona');
let botonValencia = document.querySelector('#botonValencia');
let botonSevilla = document.querySelector('#botonSevilla');
let botonZaragoza = document.querySelector('#botonZaragoza');

//cosas pagina Galeria
let pantallaImagen = document.querySelector('#divImagenGaleria');
let imagenGrande = document.querySelector('#imagenAbierta');
let botonImgDerecha = document.querySelector('#flechaDerGaleria');
let botonImgIzquierda = document.querySelector('#flechaIzqGaleria');
let botonCerrarImagen = document.querySelector('#botonCerrarImagen');
let arrayImagenes = document.querySelectorAll('.fotosGaleria img');




document.addEventListener("DOMContentLoaded", function () {
    let cajaCookies = document.querySelector('#cajaCookies');
    let cookiesFondoOscuro = document.querySelector('#cookiesFondoOscuro');
    let botonAceptarCk = document.querySelector('#botonAceptarCk');
    let botonRechazarCk = document.querySelector('#botonRechazarCk');
    let cookiesAceptadas = localStorage.getItem('cookiesAccepted');
    let navbar = document.querySelector('.navbar-custom');
    console.log(navbar)

    if (cookiesAceptadas !== "true") {
        cajaCookies.style.display = "block";
        cookiesFondoOscuro.style.display = "block";
        navbar.style.zIndex = "1";
        document.body.style.overflow = 'hidden'

    } else {
        cajaCookies.style.display = "none";
        cookiesFondoOscuro.style.display = "none";
        navbar.style.zIndex = "1000";
        document.body.style.overflow = ''

    }

    botonAceptarCk.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cajaCookies.style.display = "none";
        cookiesFondoOscuro.style.display = "none";
        navbar.style.zIndex = "1000";
        document.body.style.overflow = ''

    });

    botonRechazarCk.addEventListener("click", function () {
        alert("Para navegar en esta pagina tienes que aceptar las cookies.");
    });
});




//Funciones

//Adaptar navbar colores, logo, etc.
function updateLogo() {
    let paginaTemp = window.location.pathname;
    if (paginaTemp.endsWith("/Inicio.html")) {
        if (window.innerWidth <= 992) {
            logo.src = 'Varios/logoPagina.svg'; //Logo pequeño
            logo.style.width = "50px";
            textoInicio.innerHTML = textoInicioPequeno;
        } else {
            logo.src = 'Varios/logoGrande-Blanco.svg'; //Logo grande
            logo.style.width = "320px";
            textoInicio.innerHTML = textoInicioGrande;
        }
    }
    else {
        if (window.innerWidth <= 992) {
            if (paginaTemp.endsWith("/Paginas/Galeria.html")) {
                logo.src = '../Varios/logoPagina.svg'; //Logo pequeño
            }
            else {
                logo.src = '../Varios/logoPagina.svg'; //Logo pequeño
            }
            logo.style.width = "50px";
        } else {

            if (paginaTemp.endsWith("/Paginas/Galeria.html")) {
                logo.src = '../Varios/logoGrande.svg'; //Logo grande
            }
            else {
                logo.src = '../Varios/logoGrande-Blanco.svg'; //Logo grande
            }
            logo.style.width = "320px";
        }
    }
}
// Detectar el scroll y cambiar el color del navbar
function updateNavbarOnScroll() {
    let paginaTemp = window.location.pathname;

    if (window.scrollY >= window.innerHeight) {

        if (paginaTemp.endsWith("/Inicio.html")) {
            navbar.style.backgroundColor = 'white'; // Cambia a blanco
            menuDesplegable.style.backgroundColor = 'white';
            botonNavbar.style.color = '#0D0D0D'
            iconosNavbar[0].src = 'imagenes/iconosnav/icono-inicio.png';
            iconosNavbar[1].src = 'imagenes/iconosnav/icono-hall.png';
            iconosNavbar[2].src = 'imagenes/iconosnav/icono-galeria.png';
            iconosNavbar[3].src = 'imagenes/iconosnav/icono-contacto.png';
        } else if (paginaTemp.endsWith("/Galeria.html")) {
            iconosNavbar[0].src = '../imagenes/iconosnav/icono-inicio.png';
            iconosNavbar[1].src = '../imagenes/iconosnav/icono-hall.png';
            iconosNavbar[2].src = '../imagenes/iconosnav/icono-galeria.png';
            iconosNavbar[3].src = '../imagenes/iconosnav/icono-contacto.png';
        }
        else {
            navbar.style.backgroundColor = 'white'; // Cambia a blanco
            menuDesplegable.style.backgroundColor = 'white';
            botonNavbar.style.color = '#0D0D0D'
            iconosNavbar[0].src = '../imagenes/iconosnav/icono-inicio.png';
            iconosNavbar[1].src = '../imagenes/iconosnav/icono-hall.png';
            iconosNavbar[2].src = '../imagenes/iconosnav/icono-galeria.png';
            iconosNavbar[3].src = '../imagenes/iconosnav/icono-contacto.png';
        }

        for (let i = 0; i < itemsNavbar.length; i++) {
            itemsNavbar[i].style.color = '#0D0D0D';
        }
        if (window.innerWidth > 992) {
            if (paginaTemp.endsWith("/Inicio.html")) {
                logo.src = 'Varios/logoGrande.svg';
            }
            else {
                logo.src = '../Varios/logoGrande.svg'; // Cambiar logo en scroll (pantallas grandes)
            }
        }
    } else {

        if (paginaTemp.endsWith("/Inicio.html")) {
            navbar.style.backgroundColor = '#0D0D0D'; // Color inicial
            menuDesplegable.style.backgroundColor = '#0D0D0D';
            botonNavbar.style.color = 'white'
            iconosNavbar[0].src = 'imagenes/iconosnav/icono-inicio-blanco.png';
            iconosNavbar[1].src = 'imagenes/iconosnav/icono-hall-blanco.png';
            iconosNavbar[2].src = 'imagenes/iconosnav/icono-galeria-blanco.png';
            iconosNavbar[3].src = 'imagenes/iconosnav/icono-contacto-blanco.png';
        }
        else if (paginaTemp.endsWith("/Galeria.html")) {
            navbar.style.backgroundColor = 'white'; // Color inicial
            menuDesplegable.style.backgroundColor = 'white';
            botonNavbar.style.color = '#0D0D0D'
            iconosNavbar[0].src = '../imagenes/iconosnav/icono-inicio.png';
            iconosNavbar[1].src = '../imagenes/iconosnav/icono-hall.png';
            iconosNavbar[2].src = '../imagenes/iconosnav/icono-galeria.png';
            iconosNavbar[3].src = '../imagenes/iconosnav/icono-contacto.png';

        }
        else {
            navbar.style.backgroundColor = '#0D0D0D'; // Color inicial
            menuDesplegable.style.backgroundColor = '#0D0D0D';
            botonNavbar.style.color = 'white'
            iconosNavbar[0].src = '../imagenes/iconosnav/icono-inicio-blanco.png';
            iconosNavbar[1].src = '../imagenes/iconosnav/icono-hall-blanco.png';
            iconosNavbar[2].src = '../imagenes/iconosnav/icono-galeria-blanco.png';
            iconosNavbar[3].src = '../imagenes/iconosnav/icono-contacto-blanco.png';
        }

        if (paginaTemp.endsWith("/Galeria.html")) {
            for (let i = 0; i < itemsNavbar.length; i++) {
                itemsNavbar[i].style.color = '#0D0D0D';
            }
        }
        else {
            for (let i = 0; i < itemsNavbar.length; i++) {
                itemsNavbar[i].style.color = 'white';
            }
        }
        if (window.innerWidth > 992) {
            if (paginaTemp.endsWith("/Inicio.html")) {
                logo.src = 'Varios/logoGrande-Blanco.svg'; // Logo inicial
            }
            else if (paginaTemp.endsWith("/Galeria.html")) {
                logo.src = '../Varios/logoGrande.svg';
            }
            else {
                logo.src = '../Varios/logoGrande-Blanco.svg'; // Logo inicial
            }

        }
    }
}



function cambiarTextoInicioHall() {
    if (window.innerWidth <= 393) {
        textoHall.innerHTML = textoHallPeq;
    }
    else {
        textoHall.innerHTML = "Los deportes de contacto han tenido un aumento de popularidad en los ultimos años y con ello la aparicion de mas y mas atletas pero no todos tienen la misma capacidad para volver con el cinturon a casa, aunque se consumen muchos deportes distintos hay tres que predominan en espectadores, actualmente las mma son las competiciones mas consumidas, con diferencia la que mas atencion atrae es la UFC, luego en cuanto a nivel de espectadores van el boxeo y el Jiu-Jitsu "
    }
}
function cambiarTextoBannerHall() {
    if (window.innerWidth <= 769) {
        textoBanner.innerHTML = textoBannerPequeño;
    }
    else {
        textoBanner.innerHTML = `Dana white confirma la revancha de Connor Mcgregor contra Khabib Nurmagomedov para febrero 2025 sigue las noticias de la revancha mas esperada de la historia aqui en CageGods, envíanos tu información en la página de <a href="Contacto.html">Contacto</a> y te mantendremos informado con nuestro newsletter semanal.`;
  
    }
}
function quitarBanner(){
    botonBanner.addEventListener('click', function(){
        banner.style.display = 'none'
    });
}

function galeriaImgGrandes() {
    arrayImagenes.forEach(imagen => {
        imagen.addEventListener('click', function () {
            pantallaImagen.style.display = "";
            imagenGrande.src = imagen.src;
        })
    });
    botonImgDerecha.addEventListener('click', function () {
        imagenGrandeTemp = imagenGrande.src;
        for (let i = 0; i < arrayImagenes.length; i++) {
            if (arrayImagenes[i].src === imagenGrandeTemp) {
                if (i === arrayImagenes.length - 1) {
                    imagenGrande.src = arrayImagenes[0].src;
                } else {
                    imagenGrande.src = arrayImagenes[i + 1].src;
                }
                break;
            }
        }
    });
    botonImgIzquierda.addEventListener('click', function () {
        imagenGrandeTemp = imagenGrande.src;
        for (let i = 0; i < arrayImagenes.length; i++) {
            if (arrayImagenes[i].src === imagenGrandeTemp) {
                if (i === 0) {
                    imagenGrande.src = arrayImagenes[arrayImagenes.length - 1].src;
                } else {
                    imagenGrande.src = arrayImagenes[i - 1].src;
                }
                break;
            }
        }
    });
    botonCerrarImagen.addEventListener('click', function () {
        pantallaImagen.style.display = "none";
    })
}




//Expansion del navbar al deslizar
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.classList.add('expanded');
    } else {
        navbar.classList.remove('expanded');
    }
});

//Oculta menu desplegable al cambiar el viewport
window.addEventListener('resize', function () {
    if (window.innerWidth > 992 && menuDesplegable.classList.contains('show')) {
        menuDesplegable.classList.remove('show');
    }
});

// Botón del menú desplegable
botonNavbar.addEventListener('click', function () {
    // Si el menú no está visible, elimina animación de salida y agrega entrada
    if (!menuDesplegable.classList.contains('show')) {
        menuDesplegable.classList.remove('animate__slideOutLeft');
        menuDesplegable.classList.add('animate__slideInLeft');
        menuDesplegable.classList.add('show');
    }
    // Si el menú está visible, elimina animación de entrada y agrega salida
    else {
        menuDesplegable.classList.remove('animate__slideInLeft');
        menuDesplegable.classList.add('animate__slideOutLeft');

        // Esperar a que termine la animación de salida para ocultar el menú
        menuDesplegable.addEventListener('animationend', function ocultarMenu() {
            menuDesplegable.classList.remove('show');
            menuDesplegable.removeEventListener('animationend', ocultarMenu); // Evitar múltiples llamadas
        });
    }
});







//Cambiar cossas distintas en cada pagina, hecho asi para prevenir errores de java

document.addEventListener('DOMContentLoaded', function () {
    let paginaActual = window.location.pathname;
    console.log(paginaActual);

    if (paginaActual.endsWith('/Inicio.html')) {
        
        window.addEventListener('load', updateLogo);
        window.addEventListener('resize', updateLogo);
        window.addEventListener('scroll', updateNavbarOnScroll);

    }

    else if (paginaActual.endsWith('/Paginas/HallOfFame.html')) {
        
        window.addEventListener('load', cambiarTextoInicioHall);
        window.addEventListener('resize', cambiarTextoInicioHall);
        window.addEventListener('load', cambiarTextoBannerHall);
        window.addEventListener('resize', cambiarTextoBannerHall);
        window.addEventListener('load', quitarBanner);
        window.addEventListener('load', updateLogo);
        window.addEventListener('resize', updateLogo);
        window.addEventListener('scroll', updateNavbarOnScroll);

        let i = 0;
        let j = 0;
        evento.innerHTML = eventos[i];
        textoEvento.innerHTML = textosEvento[i];
        imagenEvento.src = fotosEventos[i];
        flechaDerecha.addEventListener('click', function () {
            i += 1
            evento.innerHTML = eventos[i];
            textoEvento.innerHTML = textosEvento[i];
            imagenEvento.src = fotosEventos[i];
            if (i == 3) {
                i = -1;
            }

        });
        flechaIzquierda.addEventListener('click', function () {
            if (j == 0) {
                j = 4;
            }
            j -= 1
            evento.innerHTML = eventos[j];
            textoEvento.innerHTML = textosEvento[j];
            imagenEvento.src = fotosEventos[j];
            if (j == 0) {
                j = 4;
            }
        });

    }

    else if (paginaActual.endsWith('/Paginas/Galeria.html')) {
        
        logo.src = "../Varios/logoGrande.svg"
        window.addEventListener('load', updateLogo);
        window.addEventListener('resize', updateLogo);
        window.addEventListener('scroll', updateNavbarOnScroll);
        navbar.style.backgroundColor = 'white'; // Cambia a blanco
        menuDesplegable.style.backgroundColor = 'white';
        botonNavbar.style.color = '#0D0D0D'
        for (let i = 0; i < itemsNavbar.length; i++) {
            itemsNavbar[i].style.color = '#0D0D0D';
        }
        window.addEventListener('load', galeriaImgGrandes);


    }

    else if (paginaActual.endsWith('/Paginas/Contacto.html')) {
        
        window.addEventListener('load', updateLogo);
        window.addEventListener('resize', updateLogo);
        window.addEventListener('scroll', updateNavbarOnScroll);
        //pagina Contacto, botones de gimnasios

        //array de botones 
        // Cambio de gimnaios Under Construction

        let arrayBotones = [botonMadrid, botonBarcelona, botonValencia, botonSevilla, botonZaragoza];
        botonMadrid.addEventListener('click', function () {
            for (let i = 0; i < arrayBotones.length; i++) {
                arrayBotones[i].classList.remove('botonActivo');
            }
            botonMadrid.classList.add('botonActivo');

        });
        botonBarcelona.addEventListener('click', function () {
            for (let i = 0; i < arrayBotones.length; i++) {
                arrayBotones[i].classList.remove('botonActivo');
            }
            botonBarcelona.classList.add('botonActivo');

        });
        botonValencia.addEventListener('click', function () {
            for (let i = 0; i < arrayBotones.length; i++) {
                arrayBotones[i].classList.remove('botonActivo');
            }
            botonValencia.classList.add('botonActivo');

        });
        botonSevilla.addEventListener('click', function () {
            for (let i = 0; i < arrayBotones.length; i++) {
                arrayBotones[i].classList.remove('botonActivo');
            }
            botonSevilla.classList.add('botonActivo');

        });
        botonZaragoza.addEventListener('click', function () {
            for (let i = 0; i < arrayBotones.length; i++) {
                arrayBotones[i].classList.remove('botonActivo');
            }
            botonZaragoza.classList.add('botonActivo');

        });
    }
})



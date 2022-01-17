/******************************************************************************************/
/**********     EFFET DARK SUR LE BACKGROUND UNIQUEMENT SUR PICTURES.HTML     *************/
/******************************************************************************************/

const bodyDark = document.querySelector('#bodyPictures');
const memoireDarkBody = () => localStorage.getItem("theme");

window.onload = DarkBody();

function DarkBody(){

    if (memoireDarkBody() === "NODARK") // ********** SI MODE FONCE  ************
    {
      bodyDark.style.backgroundColor = 'rgb(90, 89, 89)';
    } else  // ********** SI MODECLAIR ************
    {
      bodyDark.style.backgroundColor = 'white';
    }
}
/******************************************************************************************/
/*********************************   PICTURES.HTML  ***************************************/
/******************************************************************************************/

const carousel1 = document.querySelector('.carousel1');
const carousel2 = document.querySelector('.carousel2');
const carousel3 = document.querySelector('.carousel3');
const pic1 = document.querySelector('.liste1');
const pic2 = document.querySelector('.liste2');
const pic3 = document.querySelector('.liste3');
const cadre = document.querySelector('.photo');
const cells = document.querySelectorAll('.carousel__cell');
const labelButton = document.querySelectorAll('label');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const buttonRadio = document.querySelectorAll('.button');

carousel1.classList.add("apparait");

for (let btn of cells) {
  btn.addEventListener('click', (e) => {
    cadre.src = e.target.src;
  })
}

/***************** menu des photos **************************/
let valeur = '';
for (let x = 0; x < buttonRadio.length; x++) {
  buttonRadio[x].addEventListener('click', function () {
  /***************** recherche du radio checked ************** */
    if (buttonRadio[x].checked) {
      valeur = buttonRadio[x].value
    }
  /********* afficher la liste des images correspondant au menu ********/
    switch (valeur) {
      case 'Imprimantes':
        document.body.classList.add('imageBody1');
        document.body.classList.remove('imageBody2');
        document.body.classList.remove('imageBody3');
        carousel1.classList.add("apparait");
        carousel2.classList.remove("apparait");
        carousel3.classList.remove("apparait");
        cadre.src = pic1.src;
        break;
      case 'Consommables':
        document.body.classList.remove('imageBody1');
        document.body.classList.add('imageBody2');
        document.body.classList.remove('imageBody3');
        carousel1.classList.remove("apparait");
        carousel2.classList.add("apparait");
        carousel3.classList.remove("apparait");
        cadre.src = pic2.src;
        break;
      case 'Réalisations':
        document.body.classList.remove('imageBody1');
        document.body.classList.remove('imageBody2');
        document.body.classList.add('imageBody3');
        carousel1.classList.remove("apparait");
        carousel2.classList.remove("apparait");
        carousel3.classList.add("apparait");
        cadre.src = pic3.src;
        break;
    }
  });
}
/*************** effets sur les images ************************** */

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('mouseover', (e) => {
    for (const c of cells) {
      c.classList.remove('previous', 'next');
    }
    if (i > 0) cells[i - 1].classList.add('previous')
    if (i < cells.length) cells[i + 1].classList.add('next')
  })
}
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('mouseleave', (e) => {
    for (const c of cells) {
      c.classList.remove('previous', 'next');
    }
  })
}
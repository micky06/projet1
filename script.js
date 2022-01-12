/******************************************************************************************/
/**********************************   DARK MODE  *****************************************/
/******************************************************************************************/

const memoireDark = () => localStorage.getItem("theme");
const btnDark = document.querySelector('.item6');
const linkDark = document.querySelector('.link6');

window.onload = DarkMode(memoireDark(), false);

function DarkMode(memoire, click) {
  if ((memoire === "DARK" && click) || (memoire === "NODARK" && !click)) // ********** SI MODE FONCE  ************
  {
    document.documentElement.style.setProperty('--color-bgd-txt', 'rgba(47, 51, 53, 0.6)');
    document.documentElement.style.setProperty('--color-bgd', 'rgb(49, 48, 48)');
    document.documentElement.style.setProperty('--color-txt', 'rgb(199, 196, 196)');
    document.documentElement.style.setProperty('--color-bgd-hover', 'rgba(25, 82, 116, 0.6)');
    document.documentElement.style.setProperty('--color-bgd-menu', 'rgb(27, 27, 27)');
    document.documentElement.style.setProperty('--color-footer', 'rgb(10, 51, 75)');
    document.documentElement.style.setProperty('--color-menu-txt', 'rgb(221, 221, 221)');
    linkDark.innerHTML = 'Mode Clair';
    if (click) localStorage.setItem("theme", "NODARK");
  } else if ((memoire === "NODARK" && click) || (memoire === "DARK" && !click)) // ********** SI MODECLAIR ************
  {
    document.documentElement.style.setProperty('--color-bgd-txt', 'rgb(221, 221, 221)');
    document.documentElement.style.setProperty('--color-bgd', 'rgba(52, 182, 255, 0.6)');
    document.documentElement.style.setProperty('--color-txt', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--color-bgd-hover', 'rgba(52, 182, 255, 0.6)');
    document.documentElement.style.setProperty('--color-bgd-menu', 'rgb(221, 221, 221)');
    document.documentElement.style.setProperty('--color-footer', 'rgb(42, 150, 212)');
    document.documentElement.style.setProperty('--color-menu-txt', 'rgb(0, 0, 0)');
    linkDark.innerHTML = 'Mode Sombre';
    if (click) localStorage.setItem("theme", "DARK");
  }
}

/******************************************************************************************/
/**********************************   INDEX.HTML  *****************************************/
/******************************************************************************************/

const menuPrinters = document.querySelectorAll('.iconMenuPrinters');
const pageFDM = document.querySelector('.fdm')
const pageFDMEnfant = document.querySelector('.fdmEnfant')
const pageResine = document.querySelector('.resine')
const pageResineEnfant = document.querySelector('.resineEnfant')
const pageTDP = document.querySelector('.troisDP')
const pageTDPEnfant = document.querySelector('.troisDPEnfant')
for (let i = 0; i < menuPrinters.length; i++) {
  pageFDM.classList.add("apparait");
  pageFDMEnfant.classList.add("apparaitEnfant");
  menuPrinters[i].addEventListener('click', function () {
    if (menuPrinters[i].alt === "FDM") {
      pageFDM.classList.add("apparait");
      setTimeout(() => pageFDMEnfant.classList.add("apparaitEnfant"), 1);
      pageResine.classList.remove("apparait");
      pageResineEnfant.classList.remove("apparaitEnfant");
      pageTDP.classList.remove("apparait");
      pageTDPEnfant.classList.remove("apparaitEnfantEnfant");
    } else if (menuPrinters[i].alt === "SLA") {
      pageFDM.classList.remove("apparait");
      pageFDMEnfant.classList.remove("apparaitEnfant");
      pageResine.classList.add("apparait");
      setTimeout(() => pageResineEnfant.classList.add("apparaitEnfant"), 1);
      pageTDP.classList.remove("apparait");
      pageTDPEnfant.classList.remove("apparaitEnfant");
    } else if (menuPrinters[i].alt === "3DP") {
      pageFDM.classList.remove("apparait");
      pageFDMEnfant.classList.remove("apparaitEnfant");
      pageResine.classList.remove("apparait");
      pageResineEnfant.classList.remove("apparaitEnfant");
      pageTDP.classList.add("apparait");
      setTimeout(() => pageTDPEnfant.classList.add("apparaitEnfant"), 1);
    }
  })
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
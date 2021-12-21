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
const transition = document.querySelector('.cercle')
for (let i = 0; i < menuPrinters.length; i++) {
  pageFDM.classList.add("apparait");
  pageFDMEnfant.classList.add("apparaitEnfant");
  menuPrinters[i].addEventListener('click', function () {
    if (menuPrinters[i].alt === "FDM") {
      pageFDM.classList.add("apparait");
      setTimeout(() => pageFDMEnfant.classList.add("apparaitEnfant"), 1)
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
const buttonRadio = document.querySelectorAll('.button');
let cellCount; // cellCount set from cells-range input value
let selectedIndex = 0;

carousel1.classList.add("apparait");
labelButton[0].style.background = 'blue';
labelButton[0].style.color = 'whitesmoke';

for (let btn of cells) {
  btn.addEventListener('click', (e) => {
    cadre.src = e.target.src;
  })
}

/***************** menu des photos **************************/
let valeur = '';
for (let x = 0; x < buttonRadio.length; x++) {
  buttonRadio[x].addEventListener('click', function () {
    /***************** remise a zero des menus***************** */
    labelButton[0].style.background = 'rgba(52, 182, 255, 0.01)';
    labelButton[0].style.color = 'black';
    labelButton[1].style.background = 'rgba(52, 182, 255, 0.01)';
    labelButton[1].style.color = 'black';
    labelButton[2].style.background = 'rgba(52, 182, 255, 0.01)';
    labelButton[2].style.color = 'black';
    /***************** recherche du radio checked ************** */
    if (buttonRadio[x].checked) {
      valeur = buttonRadio[x].value
      labelButton[x].style.background = 'blue';
      labelButton[x].style.color = 'whitesmoke';
    }
    /********* afficher les images correspondant au menu ********/
    switch (valeur) {
      case 'Imprimantes':
        carousel1.classList.add("apparait");
        carousel2.classList.remove("apparait");
        carousel3.classList.remove("apparait");
        cadre.src = pic1.src;
        break;
      case 'Consommables':
        carousel1.classList.remove("apparait");
        carousel2.classList.add("apparait");
        carousel3.classList.remove("apparait");
        cadre.src = pic2.src;
        break;
      case 'Réalisations':
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
  cells[i].style.width = 95 + "px";
  cells[i].style.height = 100 + "px";
  cells[i].addEventListener("mouseover", function (e) {
    console.log("i =  " + i);
    for (let y = 0; y < cells.length; y++) {
      cells[y].style.width = 95 + "px";
      cells[y].style.height = 100 + "px";
    }
    cells[i].style.width = 130 + "px";
    cells[i].style.height = 150 + "px";

    if (i > 0) {
      cells[i - 1].style.width = 118 + "px";
      cells[i - 1].style.height = 125 + "px";
    }
    if (i < cells.length) {
      cells[i + 1].style.width = 118 + "px";
      cells[i + 1].style.height = 125 + "px";
    }
  })
  cells[i].addEventListener("mouseleave", function (e) {
    console.log("i =  " + i);
    for (let y = 0; y < cells.length; y++) {
      cells[y].style.width = 95 + "px";
      cells[y].style.height = 100 + "px";
    }
  })
  // for (let y = 0; y < cells.length; y++) {
  //   cells[y].style.width = 95 + "px";
  //   cells[y].style.height = 100 + "px";
  // }

}
/******************************************************************************************/
/**********************************   DARK MODE  *****************************************/
/******************************************************************************************/

const memoireDark = () => localStorage.getItem("theme");
const btnDark = document.querySelector('.item6');
const linkDark = document.querySelector('.link6');

if (memoireDark() === null) {localStorage.setItem("theme", "DARK");}

window.onload = DarkMode(memoireDark(), false);
console.log(`memoireDark = ${memoireDark()}`);
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


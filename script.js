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
            // transition.classList.toggle("zoom")
            pageFDM.classList.add("apparait");
            pageFDMEnfant.classList.add("apparaitEnfant");
            pageResine.classList.remove("apparait");
            pageResineEnfant.classList.remove("apparaitEnfant");
            pageTDP.classList.remove("apparait");
            pageTDPEnfant.classList.remove("apparaitEnfantEnfant");
        } else if (menuPrinters[i].alt === "SLA") {
            // transition.classList.toggle("zoom")
            pageFDM.classList.remove("apparait");
            pageFDMEnfant.classList.remove("apparaitEnfant");
            pageResine.classList.add("apparait");
            pageResineEnfant.classList.add("apparaitEnfant");
            pageTDP.classList.remove("apparait");
            pageTDPEnfant.classList.remove("apparaitEnfant");
        } else if (menuPrinters[i].alt === "3DP") {
            // transition.classList.toggle("zoom")
            pageFDM.classList.remove("apparait");
            pageFDMEnfant.classList.remove("apparaitEnfant");
            pageResine.classList.remove("apparait");
            pageResineEnfant.classList.remove("apparaitEnfant");
            pageTDP.classList.add("apparait");
            pageTDPEnfant.classList.add("apparaitEnfant");
        }
    })

}
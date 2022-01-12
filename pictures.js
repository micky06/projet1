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

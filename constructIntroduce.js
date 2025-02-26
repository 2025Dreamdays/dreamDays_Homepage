const constructText = document.querySelectorAll(".constructText");
const indiv = document.querySelectorAll(".indiv");

const clickdiv = (i) => {

    constructText.forEach((construct) => {
        construct.classList.add('none');
    })

    indiv.forEach((div) => {
        div.classList.remove('height');
        console.log(i);
    })


    constructText[i].classList.remove('none');
    indiv[i].classList.add('height')
}



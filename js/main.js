/* On défini les variables dont on a besoin */

// POUR HEADER
const imageLogo = document.getElementById('image-logo');
const title = document.getElementById('title');

// POUR SECTION 1
const ours = document.getElementById('ours');
const gun = document.getElementById('gun');

const btnHeader = document.getElementById('button-header');
const btnFooter = document.getElementById('button-footer');


// On recommence l'animation de la section 1
// si on clique sur l'ancre du header
btnHeader.onclick = () => {
    ours.className='square ours';
    gun.className='square gun';
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            ours.className='square ours ours-animation';
            gun.className='square gun gun-animation';
        })
    });
}
// On recommence l'animation du header
// si on clique sur l'ancre du footer
btnFooter.onclick = () => {
    imageLogo.className='image-logo';
    title.className='';
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            imageLogo.className='image-logo animation-image-logo';
            title.className='animation-title';
        })
    });
}
/* On défini les variables dont on a besoin */

// POUR HEADER
const imageLogo = document.getElementById('image-logo');
const title = document.getElementById('title');

// POUR SECTION 1
const ours = document.getElementById('ours');
const gun = document.getElementById('gun');

// POUR SECTION 2
const gridAnim1 = document.getElementById('grid-anim-1');
const gridAnim2 = document.getElementById('grid-anim-2');
const gridAnim3 = document.getElementById('grid-anim-3');
const gridAnim4 = document.getElementById('grid-anim-4');
const gridAnim5 = document.getElementById('grid-anim-5');
const gridAnim6 = document.getElementById('grid-anim-6');

const btnHeader = document.getElementById('button-header');
const btnFooter = document.getElementById('button-footer');
const btnSection1 = document.getElementById('button-section-1');


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

// On recommence l'animation de la section 2
// si on clique sur l'ancre de la section 1
btnSection1.onclick = () => {
    gridAnim1.className='circle-h-grid';
    gridAnim2.className='circle-c-grid';
    gridAnim3.className='circle-j-grid';
    gridAnim4.className='circle-p-grid';
    gridAnim5.className='circle-m-grid';
    gridAnim6.className='circle-s-grid';
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            gridAnim1.className='circle-h-grid grid-anim-1';
            gridAnim2.className='circle-c-grid grid-anim-2';
            gridAnim3.className='circle-j-grid grid-anim-3';
            gridAnim4.className='circle-p-grid grid-anim-4';
            gridAnim5.className='circle-m-grid grid-anim-5';
            gridAnim6.className='circle-s-grid grid-anim-6';
        })
    });
}
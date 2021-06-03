const img_one = document.querySelector('.user01');
const img_two = document.querySelector('.user02');
const cake = document.querySelector('.cake');

var sound = new Audio();
sound.play();
sound.addEventListener('ended', () => {
    sound.src = "sound.mp3"
    sound.play());
};

img_one.setAttribute('style', 'display: none;');
img_two.setAttribute('style', 'display: none;');
cake.setAttribute('style', 'display: none;');

setTimeout(() => {
    img_one.setAttribute('style', 'display: unset;');
}, 2000);

setTimeout(() => {
    img_two.setAttribute('style', 'display: unset;');
}, 6000);

setTimeout(() => {
    cake.setAttribute('style', 'display: unset;');
}, 9000);

const $html = document.querySelector('html');
const $toogle = document.querySelector('.toggle__button');
$toogle.addEventListener('change', ()=>{
    $html.classList.toggle('dark-mode')
});

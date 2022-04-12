const menu = document.querySelector('.menu-burger-container');
const menuList = document.querySelector('.menu-list');

menu.addEventListener('click', function(e){
    open();
    if (menu.classList.contains('show')) {
        menu.classList.remove('animation')
    }
    if(!menu.classList.contains('show')){
        menu.classList.add('animation')
        setTimeout((e) => {
            menu.classList.remove('animation')
        }, 900);
    }
});

function open(){
    menu.classList.toggle('show');
    if (menu.classList.contains('animation')) {
        menuList.style.animationName = 'openReverse';
    }
}



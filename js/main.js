
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar')
    const logo = document.querySelector('.logo-svg use')
    const mMenuToggle = document.querySelector('.mobile-menu-toggle')
    const menu =  document.querySelector('.mobile-menu')
    // Проверяем, что элементы существуют
    if (!navbar || !logo) {
        console.error('Элементы navbar или logo не найдены');
        return;
    }
    
    let isAtTop = true;
    let ticking = false;
    
    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isCurrentlyAtTop = scrollTop === 0;
        
        // Если состояние изменилось
        if (isCurrentlyAtTop !== isAtTop) {
            if (isCurrentlyAtTop) {
                // Пользователь наверху
                navbar.classList.remove('navbar-light');
                logo.href.baseVal = "img/sprites.svg#logo-light";
            } else {
                // Пользователь опустился
                
                navbar.classList.add('navbar-light');
                logo.href.baseVal = "img/sprites.svg#logo";
            }
            isAtTop = isCurrentlyAtTop;
        }
    }
    
    // Оптимизированная обработка скролла
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Вызываем сразу, чтобы установить начальное состояние
    updateNavbar();

    mMenuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        menu.classList.toggle('is-open')
    })
});
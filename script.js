window.addEventListener('load', ()=>{
    let menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', (e)=>{
        if (!menuBtn.classList.contains('active')) {
            OpenMenu(e);
        } else {
            menuBtn.classList.remove('active');
            CloseMenu(e);
        }
    })

    function OpenMenu() {
        let menuList = document.querySelector('.mobile-list');
        menuList.classList.add('active');
        let heroContainer = document.querySelector('.hero').querySelector('.container');
        heroContainer.style.paddingTop = '140px';
        menuList.style.maxHeight = menuList.scrollHeight + 'px';
        menuBtn.classList.add('active');
    }

    function CloseMenu() {
        let menuList = document.querySelector('.mobile-list');
        menuList.classList.remove('active');
        let heroContainer = document.querySelector('.hero').querySelector('.container');
        heroContainer.style.paddingTop = '0';
        menuList.style.maxHeight = null;
        menuBtn.classList.remove('active');
    }


    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 80;
                CloseMenu();
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }
})
/*NAV BAR */


    const menu = document.getElementById('nav-menu');
    const sideBar = document.getElementsByClassName('nav-mobile-sidebar-container');
    const body = document.querySelector('body');
    

    menu.addEventListener('click', ()=>{
      sideBar[0].classList.add('show');
      sideBar[0].childNodes[1].classList.add('show-translate');
      sideBar[0].childNodes[3].classList.add('show-translate');
        
      body.style.overflow = "hidden";

    });



    const close = document.getElementById('menu-close');


    close.addEventListener('click', ()=> {

        sideBar[0].classList.remove('show');
        sideBar[0].childNodes[1].classList.remove('show-translate');
        sideBar[0].childNodes[3].classList.remove('show-translate');
        body.style.overflow = "auto";
    });
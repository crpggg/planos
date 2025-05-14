function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const clemsonpfp = document.querySelector('.clemsonpfp')
    const doompfp = document.querySelector('.doompfp')

    if(html.classList.contains('light')){
        clemsonpfp.setAttribute('src', './assets/carloslight.jpg')
        clemsonpfp.setAttribute('alt', 'pfp lightmode')
        doompfp.setAttribute('src', './assets/mfdoomlight.png')
        doompfp.setAttribute('alt', 'doom pfp lightmode')
    }
    else{
        clemsonpfp.setAttribute('src', './assets/carlos.png')
        clemsonpfp.setAttribute('alt', 'pfp')
        doompfp.setAttribute('src', './assets/mfdoom.png')
        doompfp.setAttribute('alt', 'doom pfp')
        
    }
}


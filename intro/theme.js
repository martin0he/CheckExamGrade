//toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})
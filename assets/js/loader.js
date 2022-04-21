const spinnerLoader = document.querySelector('.loader');
const spinner = document.querySelector('.spinner-fast');

window.addEventListener('load', function(){
    this.setInterval(function(){
        spinnerLoader.classList.add('hidden');
    }, 1000)
    this.setTimeout(function(){
        spinnerLoader.style.display = 'none';
    },2000)
    
})
const trailer = document.querySelector('#trailer1');
const thumb = document.querySelector('#image-trailer');
const iframe2 = document.querySelector('#iframe2');
const iframe = document.querySelector('#iframe1');
const thumb2 = document.querySelector('#thumb1')

document.addEventListener('click', function(e){
    if(e.target.contains(thumb)){
        thumb.remove();
        iframe2.innerHTML += '<iframe class="thumb-trailer" src="https://www.youtube.com/embed/8bpZg8V3Onk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if(e.target.contains(thumb2)){
        thumb2.remove();
        iframe.innerHTML +='<iframe class="thumb-trailer" src="https://www.youtube.com/embed/mOuTbZhHCnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
});

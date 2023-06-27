window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo=document.querySelector("figure") 
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    logo.addEventListener("mouseover",()=>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

}
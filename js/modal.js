const modal = document.querySelector('.modal');
const imgFooter = document.querySelector('.footer');

imgFooter?.addEventListener('click', e =>{
  const tagName = e.target.tagName; // NOMBRE DE LA ETIQUETA EN LA QU SE REALIZÓ CLICK
  if(tagName === 'DIV' || tagName === 'IMG'){
    modal.classList.remove('modal-hide');
  }
});

document.addEventListener('keydown', e=>{
  if(e.key === "Escape"){
    closeModal();
  }
});

modal.addEventListener('click', e =>{

  // si se realiza click en el icono de cerrar modal se cierra la modal
  if(e.target.tagName === 'IMG' && [...e.target.classList ?? ''].includes('close')){
    closeModal();
    return;
  }

});

const closeModal = ()=>{
  modal.classList.add('modal-hide');
};


    // let srcImg = null;

    // if(tagName === 'IMG'){ // si es imagen directamente cogemos la src
    //   srcImg = e.target.src;
    // }

    // if(tagName === 'DIV') { // si es un div que la contiene buscamos la imagen y cogemos el src
    //   srcImg = e.target.querySelector('div img')?.src ?? null;
    // }

    // // si no existe una src salimos
    // if(srcImg=== null || srcImg === undefined || srcImg === '' ) return;

    // // recolectamos todas la imagenes del footer
    // let imgArray = imgFooter.querySelectorAll('div img') ?? null;

    // // si el resultado es null o no hay items salimos
    // if(imgArray === null || imgArray.length <= 0) return;
  
    // // convirtiedo el node list en arreglo
    // imgArray = [...imgArray];

    // // consiguiendo el indice de la imagen target
    // const targetImagIndex = imgArray.findIndex(e=>e.src === srcImg);
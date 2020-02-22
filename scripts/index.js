 const $boton = document.getElementsByClassName('boton1')

 const marco1 = document.getElementById('a1')
 const marco2 = document.getElementById('a2')
 const contenido = document.getElementsByClassName('p1')
 const pag = document.getElementsByClassName('item--pag')


 const feedBoton = (evento) => {
   for (let i = 0; i < pag.length; i++) {
    pag[i].style.animationName = `cambiooo${evento}`
    pag[i].style.animationDuration = '1s'
    
  }
}
 
contenido[0].addEventListener('animationend', event => {
     // console.log(event);
     
     if(event.animationName === 'cambiooo0'){
         marco1.style.animationPlayState = 'running'
         marco1.style.animationName = 'alejar'
         marco1.style.animationDuration = '1.2s'
         marco1.style.position = 'absolute'
         marco1.style.animationFillMode = 'forwards'
         marco1.style.animationDelay = '1050ms'


         marco2.style.animationName = 'aparecer'
         marco2.style.animationPlayState = 'running'
         marco2.style.animationDuration = '1.2s'
         marco2.style.animationDelay = '1050ms'
         marco2.style.animationFillMode = 'forwards'

     }
 })
 marco1.addEventListener('animationend', event =>{
     // console.log(event);
     if(event.animationName === 'alejar'){
         marco1.style.animationName = 'aparecer'
         marco1.style.left = '-100vw'
         marco1.style.animationDelay = '3050ms'

         marco2.style.animationName = 'alejar'
         marco2.style.left = '100px'
         marco2.style.animationDelay = '3050ms'

     }else if(event.animationName === 'aparecer'){
         marco1.style.animationName = 'alejar'
         marco1.style.animationDelay = '3050ms'
         marco1.style.left = '100px'


         marco2.style.animationName = 'aparecer'
         marco2.style.left = '-100vw'
         marco2.style.animationDelay = '3050ms'

     }
     
 })


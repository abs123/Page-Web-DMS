

let fotos=[];


const btnServicio1 = document.querySelector('#serv-1');
const btnServicio2 = document.querySelector('#serv-2');
const btnsServicio3= document.querySelector('#serv-3');

const changeImagen     = document.querySelector('#changeImg');

const divCaja   = document.querySelector('#divCaja');
 

 



//eventos  boton 1

btnServicio1.addEventListener( 'click', ()=> {    
  changeImagen.src="/assets/img/1.jpg";

const divServ1 = document.createElement('div');
divServ1.classList.add('caja');  
 document.getElementById("serv-descricion").innerHTML = `<b>Servicio 1!!</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa minima ex assumenda in,"
                         maiores, nesciunt quae impedit quaerat, tenetur ut laborum debitis vero eligendi. Repellendus veritatis expedita est consequuntur?`;  
                
   
}) ;


//eventos  boton 2
btnServicio2.addEventListener( 'click' ,()=> {   
  changeImagen.src="/assets/img/2.jpg";
  
  document.getElementById("serv-descricion").innerHTML =""         

  const divServ2 = document.createElement('div');
  divServ2.classList.add('caja');          
  document.getElementById("serv-descricion").innerHTML = `<b>Servicio 2!!</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa minima ex assumenda in,"?`;
     
  }) ;

  //eventos  boton 3btnsServicio3
 
  btnsServicio3.addEventListener( 'click' ,()=> {   
    changeImagen.src="/assets/img/3.jpg";
    document.getElementById("serv-descricion").innerHTML =""    

  const divServ3 = document.createElement('div');
  divServ3.classList.add('caja');  

  document.getElementById("serv-descricion").innerHTML = `<b> Servicio 3!! </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa minima ex assumenda in,"?`;
    
                  
     
  }) ;
let images = document.querySelectorAll('.slide');
let arrowleft = document.querySelector('#arrow-left');
let arrowright = document.querySelector('#arrow-right');
let index = 0;

console.log(images);

function reset() {
    // for(let i = 0 ; i < images.length ; i++ ){
    //     images[i].style.display = 'none';
    // };
    images.forEach(element => {
        element.style.display = 'none';
    });
};

function startSlide () {
    reset();
    images[0].style.display = 'block';
}

function rightImage() {
    reset();
    images[index + 1].style.display = 'block';
    index = index + 1;
};

arrowright.addEventListener('click', clickRight);

function clickRight() {
    if( index === images.length -1 ){
        index = -1;
    };
    rightImage();
}

function leftImage() {
    reset();
    images[index - 1].style.display = 'block';
    index = index - 1;
};

arrowleft.addEventListener('click', clickLeft);

function clickLeft() {
    if( index === 0){
        index = images.length;
    };
    leftImage();
}

startSlide();


// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{

//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');

// }

// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();


let order = document.querySelectorAll('.btn-1');
let modal = document.querySelector('.modal');
let result = document.querySelector('.modal-content');
let spname = document.querySelector('.name_sp');

console.log(order);
for(let i = 0; i< order.length; i++){
  order[i].addEventListener('click',showResult);

}

// for(let i = 0; i< spname.length; i++){
// //   spname[i].addEventListener('click',play);
//   console.log(spname.innerHTML);
// }



// function play(event) {
//     let plays = event.target.id;
    
//     console.log(plays);

//     showResult();
// }





function showResult (event) {
  modal.style.display = 'block';
  let s = event.target.id;


//   result.innerHTML = `
//     <h1>Restart Game !!</h1>
//     `
  if(s === 'burgerss' ){
      result.innerHTML = `
      <img class="img" src="images/p-1.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>tasty burger</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
    `
  } if(s === "cakess"){
      result.innerHTML = `
      <img class="img" src="images/p-2.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>tasty cakes</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
    `
  } if (s==="sweetss"){
    result.innerHTML = `
    <img class="img" src="images/p-3.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>tasty sweets</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
  `

  } if (s==="cupcakess"){
    result.innerHTML = `
    <img class="img" src="images/p-4.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>tasty cupcakes</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
            
  `
  } if (s==="drinkss"){
    result.innerHTML = `
    <img class="img" src="images/p-5.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>cold drinks</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
  `
  } if (s==="ice-creamss"){
    result.innerHTML = `
    <img class="img" src="images/p-6.jpg" alt="">
            <h2 class="price total-cart"> $5 - $20 </h2>
            <h3>cold ice-cream</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quae reiciendis excepturi ratione nostrum.
                </p>
            
  `
 } 

  


}



window.addEventListener('click', closeModal);

function closeModal(event) {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}

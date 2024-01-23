const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");


button.addEventListener('click', () => {
  alert('Clicked');
})

button2.addEventListener('click', () => {
  alert('Clicked');
})



left.addEventListener('mouseenter', () =>{
   content.classList.add('hover-left'); 
})

left.addEventListener('mouseleave', () => {
    content.classList.remove('hover-left');
  })
  
  right.addEventListener('mouseenter', () => {
    content.classList.add('hover-right');
  })
  
  right.addEventListener('mouseleave', () => {
    content.classList.remove('hover-right');
  })
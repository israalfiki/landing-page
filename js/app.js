/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// build the nav
const navbarList = document.getElementById('navbar__list');
const navbarMenu = document.getElementsByClassName('navbar__menu');
const sections=document.getElementsByTagName('section');
for (const section of sections){
   const id = section.id;
   const navbarItem=  document.createElement('li');
   const anchor=document.createElement('a');
   navbarItem.classList= 'navbar-item';
   anchor.classList='anchor';
   anchor.innerText=id;
   anchor.setAttribute('href','#'+section.id);
   navbarItem.appendChild(anchor);
   navbarList.appendChild(navbarItem);

//Add event to anchor
   anchor.addEventListener('click',function (event){
       event.preventDefault();
    const href=this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });    
   });
   
}
// Add class 'active' to section when near top of viewport
function changeColor(){
    for(const section of sections){
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        if(top+600<window.innerHeight&&bottom+600>window.innerHeight){

            section.classList.add('active-class');
        }
        else{
            section.classList.remove('active-class');
        }
    
    }

}
document.addEventListener('scroll', changeColor);

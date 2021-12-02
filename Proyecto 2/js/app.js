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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * Definition of constants and coding for the navigation bar that is going to generate 
 our sections automatically as a list.
*/


const sections = document.querySelectorAll('section');

const navigation = document.getElementById('navbar__list');


const section = (section)=> {
    const content = `<a class="menu__link"><span>${section.dataset.nav}</span></a>`;
    return content;
}

sections.forEach(element => {
    const list = document.createElement('li');
    list.insertAdjacentHTML('beforeend', section(element));
    list.classList.add(element.id);
    navigation.appendChild(list);
    list.addEventListener('click', (event) => {
        event.preventDefault();
        element.scrollIntoView({behavior: "smooth"});
    })
});

/**
 * Adding an arrow that shows on screen when we scroll down to go back to top smoothly and it´s setted to bottom
 with css styles.
 * 
*/

const arrow = document.querySelector('.div');
document.addEventListener("scroll", (e) => {

  if(window.scrollY > 0){
    arrow.classList.add('show');
    }
    else{
        arrow.classList.remove('show');
    }
});

arrow.addEventListener('click', () => {
    window.scrollTo({top:0, behavior: "smooth"})
});

/**
 * Here we will check the position we are on the screen when we scroll to know in which section we are,
 showing it in the navbar by highlighting it.
 * 
*/

function checkPosition(element){
    const rect = element.getBoundingClientRect();
    return (
        ((window.innerHeight || document.documentElement.clientHeight)/2) + window.scrollY <= element.offsetTop + rect.height &&
        element.offsetTop <= ((window.innerHeight || document.documentElement.clientHeight)/2) + window.scrollY
    );
};

function applyClass(){
sections.forEach(element => {
    checkPosition(element);
    let bar = document.querySelector('.' + element.id);
    if(checkPosition(element)){
        element.classList.add('your-active-class');
        bar.classList.add('your-active-class');
        }
        else{
            element.classList.remove('your-active-class');
            bar.classList.remove('your-active-class');
        }
})}

document.addEventListener('scroll', applyClass);




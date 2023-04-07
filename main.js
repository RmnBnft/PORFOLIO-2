
document.addEventListener("DOMContentLoaded", function() {


// écriture progressive de l'adresse mail (h1)
const title = document.querySelector("h1");
const txt = "@gmail.com";
let hasRun = false;

function onClick() {
  if (!hasRun) {
    hasRun = true;
    title.innerHTML = "romain.bonnifet";
    setTimeout(() => {
      typewriter(txt, 0);
    }, 200);
    title.removeEventListener("click", onClick);
  }
}

title.addEventListener("click", onClick);

function typewriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${word[index]}</span>`;
      typewriter(txt, index + 1);
    }, 200);
  }
}

setTimeout(() => {
  onClick()
},10000)

//Gestion du SCROLL en fonction du bouton cliqué
const containers = document.querySelectorAll(".views")
const projectsBtn = document.querySelector('.projects-btn')
const projectsContainer = document.querySelector('.projects-container')
projectsBtn.addEventListener("click",() => {
    setTimeout(() => {
      displayProjects();
    },200)
})
function displayProjects() {
  currentIndex = Array.from(containers).indexOf(projectsContainer);
  projectsContainer.scrollIntoView({
      behavior: 'smooth'
  });
}

const careerBtn = document.querySelector('.career-btn')
const careerContainer = document.querySelector('.career-container')
careerBtn.addEventListener("click",() => {
    setTimeout(() => {
      displayCareer();
    },200)
})

function displayCareer() {
  currentIndex = Array.from(containers).indexOf(careerContainer);
  careerContainer.scrollIntoView({
      behavior: 'smooth',
  });
}

const contactBtn = document.querySelector('.contact-btn')
const contactContainer = document.querySelector('.contact-container')
contactBtn.addEventListener("click",() => {
    displayContact();
})
function displayContact() {
  currentIndex = Array.from(containers).indexOf(contactContainer);
  contactContainer.scrollIntoView({
      behavior: 'smooth'
  });
}




// PROJECTS
const divs = document.querySelectorAll('.project');
let currentIndexProjects = 0;

divs[currentIndexProjects].classList.add('show');

document.querySelector('.fa-arrow-left').addEventListener('click', () => {
  divs[currentIndexProjects].classList.remove('show');
  currentIndexProjects = currentIndexProjects === 0 ? divs.length - 1 : currentIndexProjects - 1;
  divs[currentIndexProjects].classList.add('show');
});

document.querySelector('.fa-arrow-right').addEventListener('click', () => {
  divs[currentIndexProjects].classList.remove('show');
  currentIndexProjects = currentIndexProjects === divs.length - 1 ? 0 : currentIndexProjects + 1;
  divs[currentIndexProjects].classList.add('show');
});





});
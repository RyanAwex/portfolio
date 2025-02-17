import {projects} from './projects.js';
const showSidebar = document.querySelector('.menu-btn');  
const closeSidebar = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const themeToggleMain = document.getElementById("theme-toggle-main");
const themeToggle = document.getElementById("theme-toggle");

const lightModeMain = document.getElementById("light-mode-main");
const darkModeMain = document.getElementById("dark-mode-main");
const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");


function saveToLocaleStorage() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

themeToggleMain.addEventListener("click", () => {
  saveToLocaleStorage();
});

themeToggle.addEventListener("click", () => {
  saveToLocaleStorage();
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}




// themeToggleMain.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });


darkModeMain.addEventListener('click', () => {
  darkModeMain.style.display = 'none';
  lightModeMain.style.display = 'flex';
})

lightModeMain.addEventListener('click', () => {
  darkModeMain.style.display = 'flex';
  lightModeMain.style.display = 'none';
})



darkMode.addEventListener('click', () => {
  darkMode.style.display = 'none';
  lightMode.style.display = 'flex';
})
lightMode.addEventListener('click', () => {
  darkMode.style.display = 'flex';
  lightMode.style.display = 'none';
})


// show Sidebar
showSidebar.addEventListener('click', () => {
  sidebar.style.display = 'flex';
})
  

// close Sidebar
closeSidebar.addEventListener('click', () => {
  sidebar.style.display = 'none';
})


function loadProjects() {
  let projectsHTML = "";

  projects.forEach((project) => {
    projectsHTML += `
      <section>
        <div class="main-container">
          <div class="image-container">
            <img src="${project.image}" alt="project" />
          </div>
          <div class="description-container">
            <div class="description">
              <p class="en">
                ${project.descriptionEn}
              </p>
            </div>
            <div class="button-container">
              <a target="_blank" href="${project.buttonView}">
                <button>View</button>
              </a>
              <a target="_blank" href="${project.buttonCode}">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  });
  document.querySelector(".allProjects")
    .innerHTML = projectsHTML;
}
loadProjects();
'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Get the page name from the button text
    const pageName = this.textContent.trim().toLowerCase();
    
    // Hide all pages and remove active class from all buttons
    pages.forEach(page => {
      page.classList.remove("active");
    });
    
    navigationLinks.forEach(link => {
      link.classList.remove("active");
    });
    
    // Show the clicked page
    pages.forEach(page => {
      if (page.dataset.page === pageName) {
        page.classList.add("active");
      }
    });
    
    // Highlight the clicked button
    this.classList.add("active");
    
    // Scroll to top
    window.scrollTo(0, 0);

  });
}


/**
 * COLLAPSIBLE SECTIONS
 */

let isEducationExpanded = false;
let isSkillsExpanded = false;
let isLanguagesExpanded = false;
let isProjectsExpanded = false;
let isAchievementsExpanded = false;

function toggleEducation() {
  const items = document.querySelectorAll('#edu-more');
  const btn = document.querySelector('.see-more-btn');
  const btnText = document.getElementById('edu-btn-text');
  
  isEducationExpanded = !isEducationExpanded;
  
  items.forEach(item => {
    if (isEducationExpanded) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  if (btn) {
    btn.classList.toggle('expanded', isEducationExpanded);
  }
  
  btnText.textContent = isEducationExpanded ? 'Show Less' : 'See More';
}

function toggleSkills() {
  const items = document.querySelectorAll('#skills-more');
  const btns = document.querySelectorAll('.see-more-btn');
  const btnText = document.getElementById('skills-btn-text');
  
  isSkillsExpanded = !isSkillsExpanded;
  
  items.forEach(item => {
    if (isSkillsExpanded) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  btns.forEach(btn => {
    if (btn.querySelector('#skills-btn-text')) {
      btn.classList.toggle('expanded', isSkillsExpanded);
    }
  });
  
  btnText.textContent = isSkillsExpanded ? 'Show Less Skills' : 'See More Skills';
}

function toggleLanguages() {
  const items = document.querySelectorAll('#lang-more');
  const btnText = document.getElementById('lang-btn-text');
  
  isLanguagesExpanded = !isLanguagesExpanded;
  
  items.forEach(item => {
    if (isLanguagesExpanded) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  const btn = Array.from(document.querySelectorAll('.see-more-btn')).find(b => b.querySelector('#lang-btn-text'));
  if (btn) {
    btn.classList.toggle('expanded', isLanguagesExpanded);
  }
  
  btnText.textContent = isLanguagesExpanded ? 'Show Less Languages' : 'See More Languages';
}

function toggleProjects() {
  const items = document.querySelectorAll('#projects-more');
  const btnText = document.getElementById('projects-btn-text');
  
  isProjectsExpanded = !isProjectsExpanded;
  
  items.forEach(item => {
    if (isProjectsExpanded) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  const btn = Array.from(document.querySelectorAll('.see-more-btn')).find(b => b.querySelector('#projects-btn-text'));
  if (btn) {
    btn.classList.toggle('expanded', isProjectsExpanded);
  }
  
  btnText.textContent = isProjectsExpanded ? 'Show Less Details' : 'See More Details';
}

function toggleAchievements() {
  const items = document.querySelectorAll('#achieve-more');
  const btnText = document.getElementById('achieve-btn-text');
  
  isAchievementsExpanded = !isAchievementsExpanded;
  
  items.forEach(item => {
    if (isAchievementsExpanded) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  const btn = Array.from(document.querySelectorAll('.see-more-btn')).find(b => b.querySelector('#achieve-btn-text'));
  if (btn) {
    btn.classList.toggle('expanded', isAchievementsExpanded);
  }
  
  btnText.textContent = isAchievementsExpanded ? 'Show Less Certifications' : 'See More Certifications';
}
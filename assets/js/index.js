var themeToggleButton = document.querySelector("#theme-toggle-button");
var sections = document.querySelectorAll("main section");
var navLinks = document.querySelectorAll(".nav-links a");
var settingsToggle = document.querySelector("#settings-toggle")
var settingsSideBar = document.querySelector("#settings-sidebar")



window.addEventListener("scroll", function () {
  var currentSection = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 200) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});



settingsToggle.addEventListener("click",function(){
    settingsSideBar.classList.toggle("translate-x-full")
 if (settingsSideBar.classList.contains("translate-x-full")) {
    settingsToggle.style.right = "0";
  } else {
    settingsToggle.style.right = "20rem";
  }
})

themeToggleButton.addEventListener("click", function(){
document.documentElement.classList.toggle("dark");
});


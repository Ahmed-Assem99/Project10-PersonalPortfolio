var themeToggleButton = document.querySelector("#theme-toggle-button");
var sections = document.querySelectorAll("main section");
var navLinks = document.querySelectorAll(".nav-links a");
var settingsToggle = document.querySelector("#settings-toggle")
var settingsSideBar = document.querySelector("#settings-sidebar")
var themeColorsGrid= document.querySelector("#theme-colors-grid")
var fontSetting = document.querySelector("#fontSetting")
var resetSettings= document.querySelector("#reset-settings")
var FontButtons = fontSetting.querySelectorAll(".font-option")
var ColorButtons = themeColorsGrid.querySelectorAll("button");


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

//  -------Sidebar Toggle------ //
settingsToggle.addEventListener("click",function(){
    settingsSideBar.classList.toggle("translate-x-full")
 if (settingsSideBar.classList.contains("translate-x-full")) {
    settingsToggle.style.right = "0";
  } else {
    settingsToggle.style.right = "20rem";
  }
})

// -------Dark/light Mode toggle------//
themeToggleButton.addEventListener("click", function(){
document.documentElement.classList.toggle("dark");
});

// ---------Colors settings section------//

themeColorsGrid.addEventListener("click",function(e){
if (e.target.tagName !== "BUTTON") return;

  ColorButtons.forEach(function (button) {
    button.classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900"
    );
  });

  e.target.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900"
  );

    var primary=e.target.getAttribute("data-primary")
    var secondary=e.target.getAttribute("data-secondary")


    document.documentElement.style.setProperty("--color-primary",primary)
    document.documentElement.style.setProperty("--color-secondary",secondary)
    document.documentElement.style.setProperty("--color-accent",secondary)

})



// --------Fonts Settings Section----------//
fontSetting.addEventListener("click",function(e){

var button = e.target.closest(".font-option")
if(!button) return;


var font=  button.getAttribute("data-font");
document.body.style.fontFamily=font;

FontButtons.forEach(function(btn){
btn.classList.remove(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800"
)
  btn.classList.add(
    "border-slate-200",
    "dark:border-slate-700"
  );
})

button.classList.remove(
  "border-slate-200",
  "dark:border-slate-700"
);

button.classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800"
)
})



//-------------- Reset Settings Buttons------//
resetSettings.addEventListener("click",function(e){
var tajawalFont = document.querySelector("#fontSetting .main-font")
var mainColor= document.querySelector("#theme-colors-grid .main-color")
    settingsSideBar.classList.add("translate-x-full")
    settingsToggle.style.right = "0";
    document.body.style.fontFamily="tajawal";

 FontButtons.forEach(function(btn){
btn.classList.remove(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800"
)
  btn.classList.add(
    "border-slate-200",
    "dark:border-slate-700"
  );
})
tajawalFont.classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800"
)
tajawalFont.classList.remove(
    "border-slate-200",
    "dark:border-slate-700"
)

  ColorButtons.forEach(function (button) {
    button.classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900"
    );
  });
mainColor.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900"
)
document.documentElement.style.setProperty("--color-primary","#6366f1")
document.documentElement.style.setProperty("--color-secondary","#8b5cf6")
document.documentElement.style.setProperty("--color-accent","#8b5cf6")

})



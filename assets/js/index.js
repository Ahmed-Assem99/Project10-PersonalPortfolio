var themeToggleButton = document.querySelector("#theme-toggle-button");
var sections = document.querySelectorAll("main section");
var navLinks = document.querySelectorAll(".nav-links a");
var settingsToggle = document.querySelector("#settings-toggle");
var settingsSideBar = document.querySelector("#settings-sidebar");
var themeColorsGrid = document.querySelector("#theme-colors-grid");
var fontSetting = document.querySelector("#fontSetting");
var resetSettings = document.querySelector("#reset-settings");
var FontButtons = fontSetting.querySelectorAll(".font-option");
var ColorButtons = themeColorsGrid.querySelectorAll("button");
var scrollToTop = document.querySelector("#scroll-to-top");
var portfolioFilters = document.querySelector("#portfolio-filters")
var portfolioGrid = document.querySelector("#portfolio-grid")
var testimonialsCarousel = document.querySelector("#testimonials-carousel")
var nextTestimonial = document.querySelector("#next-testimonial")
var prevTestimonial = document.querySelector("#prev-testimonial")
var carouselIndicators = document.querySelectorAll(".carousel-indicator")
var currentTestimonial = 0;
var testimonialCards = document.querySelectorAll(".testimonial-card");

//  ------------- Scroll Feature -------- //
scrollToTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  var currentSection = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 200) {
      currentSection = section.id;
    }
  });

  if (currentSection != "hero-section") {
    scrollToTop.classList.remove("invisible", "opacity-0");
    scrollToTop.classList.add("visible", "opacity-100");
  } else {
    scrollToTop.classList.add("invisible", "opacity-0");
    scrollToTop.classList.remove("visible", "opacity-100");
  }
  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
// -------Dark/light Mode toggle------//
themeToggleButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});



//-----------  Side Bar--------------//
//-------- Sidebar Toggle --------- //
settingsToggle.addEventListener("click", function () {
  settingsSideBar.classList.toggle("translate-x-full");
  if (settingsSideBar.classList.contains("translate-x-full")) {
    settingsToggle.style.right = "0";
  } else {
    settingsToggle.style.right = "20rem";
  }
});
// ---------Colors settings section------//
themeColorsGrid.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;

  ColorButtons.forEach(function (button) {
    button.classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  });

  e.target.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );

  var primary = e.target.getAttribute("data-primary");
  var secondary = e.target.getAttribute("data-secondary");

  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);
  document.documentElement.style.setProperty("--color-accent", secondary);
});
// --------Fonts Settings Section----------//
fontSetting.addEventListener("click", function (e) {
  var button = e.target.closest(".font-option");
  if (!button) return;

  var font = button.getAttribute("data-font");
  document.body.style.fontFamily = font;

  FontButtons.forEach(function (btn) {
    btn.classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    btn.classList.add("border-slate-200", "dark:border-slate-700");
  });

  button.classList.remove("border-slate-200", "dark:border-slate-700");

  button.classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );
});
//-------------- Reset Settings Buttons------//
resetSettings.addEventListener("click", function (e) {
  var tajawalFont = document.querySelector("#fontSetting .main-font");
  var mainColor = document.querySelector("#theme-colors-grid .main-color");
  settingsSideBar.classList.add("translate-x-full");
  settingsToggle.style.right = "0";
  document.body.style.fontFamily = "tajawal";

  FontButtons.forEach(function (btn) {
    btn.classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    btn.classList.add("border-slate-200", "dark:border-slate-700");
  });
  tajawalFont.classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );
  tajawalFont.classList.remove("border-slate-200", "dark:border-slate-700");

  ColorButtons.forEach(function (button) {
    button.classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  });

  mainColor.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );
  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
  document.documentElement.style.setProperty("--color-accent", "#8b5cf6");
});


// ---------Portfolio Section ---------//

portfolioFilters.addEventListener("click",function(e){
    portfolioFilters.querySelectorAll(".portfolio-filter").forEach(function(filter){
        filter.classList.remove("active",
    "bg-linear-to-r",
     "from-primary",
      "to-secondary",
    "text-white",
    "font-bold",
     "transition-all",
    "duration-300",
    "hover:shadow-lg",
    "hover:shadow-primary/50"
  
        )
        filter.classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "font-bold",
        "transition-all",
        "duration-300",
        "hover:bg-slate-100",
        "dark:hover:bg-slate-700",
        "border",
        "border-slate-300",
        "dark:border-slate-700"
        )
    })
    e.target.closest(".portfolio-filter").classList.add(
    "active",
    "bg-linear-to-r",
     "from-primary",
      "to-secondary",
    "text-white",
    "font-bold",
     "transition-all",
    "duration-300",
    "hover:shadow-lg",
    "hover:shadow-primary/50"
  )
    e.target.closest(".portfolio-filter").classList.remove(
            "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "font-bold",
        "transition-all",
        "duration-300",
        "hover:bg-slate-100",
        "dark:hover:bg-slate-700",
        "border",
        "border-slate-300",
        "dark:border-slate-700" 
    )
switch (e.target.getAttribute("data-filter")){
    case "all": 

        portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(item){
            item.classList.remove("hidden");
        })
        break;
    case "web":
        portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(item){
            item.classList.add("hidden");
        })
        portfolioGrid.querySelectorAll(`[data-category="web"]`).forEach(function(item){
        item.classList.remove("hidden")
        })
        break;
    case "app":
                portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(item){
            item.classList.add("hidden");
        })
        portfolioGrid.querySelectorAll(`[data-category="app"]`).forEach(function(item){
        item.classList.remove("hidden")
        })
        break;
    case "design":
                portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(item){
            item.classList.add("hidden");
        })
        portfolioGrid.querySelectorAll(`[data-category="design"]`).forEach(function(item){
        item.classList.remove("hidden")
        })
        break;
    case "ecommerce":
                portfolioGrid.querySelectorAll(".portfolio-item").forEach(function(item){
            item.classList.add("hidden");
        })
        portfolioGrid.querySelectorAll(`[data-category="ecommerce"]`).forEach(function(item){
        item.classList.remove("hidden")
        })
        break;
}

})


//----------Testimonials Section -------//



function updateCarousel(index) {
  var visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  var maxIndex = testimonialCards.length - visibleCards;

  if (index < 0) {
    currentTestimonial = maxIndex;
  } else if (index > maxIndex) {
    currentTestimonial = 0;
  } else {
    currentTestimonial = index;
  }

  var cardWidth = testimonialCards[0].offsetWidth;
  testimonialsCarousel.style.transform = "translateX(" + currentTestimonial * cardWidth + "px)";

  carouselIndicators.forEach(function (indicator) {
    indicator.classList.remove("bg-accent");
    indicator.classList.add("bg-slate-400", "dark:bg-slate-600");
    indicator.setAttribute("aria-selected", "false");
  });

  if (carouselIndicators[currentTestimonial]) {
    carouselIndicators[currentTestimonial].classList.add("bg-accent");
    carouselIndicators[currentTestimonial].classList.remove("bg-slate-400", "dark:bg-slate-600");
    carouselIndicators[currentTestimonial].setAttribute("aria-selected", "true");
  }
}

nextTestimonial.addEventListener("click", function () {
  updateCarousel(currentTestimonial + 1);
});

prevTestimonial.addEventListener("click", function () {
  updateCarousel(currentTestimonial - 1);
});

carouselIndicators.forEach(function (indicator) {
  indicator.addEventListener("click", function () {
    updateCarousel(Number(indicator.getAttribute("data-index")));
  });
});

window.addEventListener("resize", function () {
  updateCarousel(currentTestimonial);
});




console.log("All features initialized successfully!")
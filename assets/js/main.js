$(function () {
  "use strict";

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    }
  });



  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====

  $(".show-more").click(function () {
    if ($("#text").hasClass("show-more-height")) {
      $(this).text("PRIKAŽI MANJE");
    } else {
      $(this).text("PRIKAŽI VIŠE");
    }

    $("#text").toggleClass("show-more-height");
  });
});

//language switcher

document.addEventListener("DOMContentLoaded", function () {
  var langDropdown = document.querySelector(".lang-dropdown");
  var langLink = document.getElementById("lang-link");
  var flagImg = document.querySelector(".lang-switcher img");

  // Funkcija za preusmjeravanje korisnika na stranicu odabranog jezika
  function redirectToLanguage(selectedLang) {
    // Dodajte više "else if" blokova za druge jezike i odgovarajuće URL-ove
    let pathArray = document.URL.split("/");
      let secondLevelLocation = pathArray[6];
    if (selectedLang === "en") {
      window.location.href = "./" + secondLevelLocation;
    } else if (selectedLang === "nl") {
      window.location.href = "../../nl" + secondLevelLocation;
    } else if (selectedLang === "fr") {
    window.location.href = "../../fr" +secondLevelLocation;
  }
  }

  // Funkcija za postavljanje zastave jezika na temelju lokalno pohranjenih podataka
  function setLanguageFromLocalStorage() {
    var selectedLang = localStorage.getItem("selectedLang");
    var selectedImage = langDropdown
      .querySelector(`[data-lang="${selectedLang}"]`)
      .getAttribute("data-image");
    flagImg.setAttribute("src", selectedImage);

    // Dodavanje posebnog slučaja za ./TZ/index.html
    if (selectedLang === "nl") {
      flagImg.setAttribute("src", "./assets/images/nl.svg");
    }
  
  if (selectedLang === "fr") {
    flagImg.setAttribute("src", "./assets/images/fr.svg");
  }
}

  // Provera lokalno pohranjenih podataka i postavljanje zastave na temelju toga
  if (localStorage.getItem("selectedLang")) {
    setLanguageFromLocalStorage();
  }

  // Dodavanje "click" događaja na zastavu/link
  langLink.addEventListener("click", function (event) {
    event.preventDefault(); // Spriječavanje preusmjeravanja na #
    langDropdown.style.display =
      langDropdown.style.display === "block" ? "none" : "block";
  });

  // Dodavanje "click" događaja na opcije padajućeg menija
  var langOptions = langDropdown.querySelectorAll("a[data-lang]");
  langOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.preventDefault(); // Spriječavanje preusmjeravanja na #
      var selectedLang = this.getAttribute("data-lang");
      var selectedImage = this.getAttribute("data-image");

      // Ažuriranje zastave i preusmjeravanje korisnika na odabrani jezik
      flagImg.setAttribute("src", selectedImage);
      redirectToLanguage(selectedLang);

      // Spremanje odabranog jezika u localStorage
      localStorage.setItem("selectedLang", selectedLang);

      // Sakrij padajući meni nakon što je odabir završen
      langDropdown.style.display = "none";
      return false;
    });
  });
  setTimeout(function() {
    redirectToApp();
  }, 1000);

});
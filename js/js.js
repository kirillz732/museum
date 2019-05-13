window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(function() {

  var t = {
    "Toggle navigation": {
      pt: "Mostrar/esconder navegação"
    },
    "Музей битвы за Днепр": {
      en: "Museum of the Battle of the Dnieper",
      ru: "Музей битвы за Днепр"
    },
    "Гомельский областной музей военной славы": {
      en:"Gomel Regional Museum of Military Glory",
      ru: "Гомельский областной музей военной славы"
    },
    "Аллея Героев г. Гомеля": {
      en: "Alley of Heroes of Gomel",
      ru: "Аллея Героев г. Гомеля"
    },
    "Вверх": {
      en:"Top",
      ru: "Вверх"
    },
    "Военные музеи Гомельской области": {
      en: "Military museums of Gomel region",
      ru: "Военные музеи Гомельской области"
    },
    "Аллея Героев г. Лоев": {
      en: "Alley of Heroes of Loew",
      ru: "Аллея Героев г. Лоев"
    },
    "Военная техника": {
      en: "Military equipment",
      ru: "Военная техника"
    },
     "Памятник Освобождения": {
      en: "Liberation Monument",
      ru: "Памятник Освобождения"
    },
     "Вечный огонь": {
      en: "Eternal flame",
      ru: "Вечный огонь"
    },
     "Сквер Держинского": {
      ru: "Сквер Держинского",
      en: "Derzhinsky square"
    },
    "Зал 1": {
      en: "Holl 1",
      ru: "Зал 1"
    },
    "Зал 2": {
      en: "Holl 2",
      ru: "Зал 2"
    },
    "Зал 3": {
      en: "Holl 3",
      ru: "Зал 3"
    },
    "Зал 4": {
      en: "Holl 4",
      ru: "Зал 4"
    },
    "EN": {
      en:"EN"
    },
    "RU": {
      en:"RU"
    }
  };
  var _t = $('body').translate({lang: "ru", t: t});
  var str = _t.g("translate");


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);
    ev.preventDefault();

  });



});

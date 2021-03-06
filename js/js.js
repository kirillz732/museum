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
    "Оккупационный режим на Гомельщине (1941-1943)": {
      en: "The occupation regime in the Gomel region (1941-1943)",
      ru: "Оккупационный режим на Гомельщине (1941-1943)"
    },
    "Военные мемориалы Гомельской области": {
      en: "Military memorials of Gomel region",
      ru: "Военные меморилаы Гомельской области"
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
      en: "Monument to soldiers-liberators",
      ru: "Памятник воинам-освободителям"
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
      en: "The story of the crossing of the Dnieper river",
      ru: "История форсирования р.  Днепр "
    },
    "Зал 2": {
      en: "The fighting 65 the army",
      ru: "Боевые действия 65 армии"
    },
     "Военная история края": {
      en: "Military history of the region",
      ru: "Военная история края"
    },
      "Начало ХХ В. до ВОВ": {
      en: "The beginning of the twentieth Century until the second world war",
      ru: "Начало ХХ В. до ВОВ"
    },
    "Зал 3": {
      en: "Holl 3",
      ru: "Зал 3"
    },
    "Зал 4": {
      en: "Holl 4",
      ru: "Зал 4"
    },
     "Памятники города Гомеля": {
      en: "The monuments of the city of Gomel",
      ru: "Памятники города Гомеля"
    },
    "Курган славы": {
      en: "Mound of glory",
      ru: "Курган славы"
    },
    "Победа одна на всех": {
      en: "Victory is one for all",
      ru: "Победа – одна на всех"
    },
    "Военные мемориалы Гомельской области": {
      en: "Military memorials of Gomel region",
      ru: "Военные мемориалы Гомельской области"
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

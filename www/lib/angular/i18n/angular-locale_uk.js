angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO:"zero", ONE:"one", TWO:"two", FEW:"few", MANY:"many", OTHER:"other"};
    $provide.value("$locale", {"DATETIME_FORMATS":{"MONTH":["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"], "SHORTMONTH":["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."], "DAY":["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця", "Субота"], "SHORTDAY":["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], "AMPMS":["дп", "пп"], "medium":"d MMM y HH:mm:ss", "short":"dd.MM.yy HH:mm", "fullDate":"EEEE, d MMMM y 'р'.", "longDate":"d MMMM y 'р'.", "mediumDate":"d MMM y", "shortDate":"dd.MM.yy", "mediumTime":"HH:mm:ss", "shortTime":"HH:mm"}, "NUMBER_FORMATS":{"DECIMAL_SEP":",", "GROUP_SEP":" ", "PATTERNS":[
        {"minInt":1, "minFrac":0, "macFrac":0, "posPre":"", "posSuf":"", "negPre":"-", "negSuf":"", "gSize":3, "lgSize":3, "maxFrac":3},
        {"minInt":1, "minFrac":2, "macFrac":0, "posPre":"", "posSuf":" \u00A4", "negPre":"-", "negSuf":" \u00A4", "gSize":3, "lgSize":3, "maxFrac":2}
    ], "CURRENCY_SYM":"₴"}, "pluralCat":function (n) {
        if ((n % 10) == 1 && (n % 100) != 11) {
            return PLURAL_CATEGORY.ONE;
        }
        if ((n % 10) >= 2 && (n % 10) <= 4 && ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
            return PLURAL_CATEGORY.FEW;
        }
        if ((n % 10) == 0 || ((n % 10) >= 5 && (n % 10) <= 9) || ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
            return PLURAL_CATEGORY.MANY;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "id":"uk"});
}]);
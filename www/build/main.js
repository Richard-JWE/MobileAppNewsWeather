webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, http, navParams, st) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.st = st;
        this.article = [];
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.st.ready()
            .then(function () {
            //Get the data
            _this.st.get('dataStorage')
                .then(function (data) {
                if (data) {
                    //API with the info in Storage
                    _this.news(data.country);
                    if (data.comp) {
                        _this.news(data.country);
                    }
                }
            })
                .catch(function (err) {
                console.log("Error trying to access storage: ");
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log("Error trying to check Storage readiness: ");
            console.log(err);
        });
    };
    NewsPage.prototype.news = function (country) {
        var _this = this;
        this.article = [];
        var newsapi = "https://newsapi.org/v2/top-headlines?country=" + country + "&pageSize=100&apiKey=e47b4b614302401ab2d82fa9a7c65aa5";
        this.http.get(newsapi).subscribe(function (response) {
            _this.article = response['articles'];
            if (_this.article.length === 0) {
                // No news stories found for the given country, display the message
                alert("error " + country + " not found");
                _this.article.push({ title: "No news stories found for country with country code " + country });
            }
            return console.log(_this.article);
            //console.log(response);
        }, function (error) {
            console.error('Error getting country data:', error);
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let new of article">\n    <ion-item>\n      <ion-thumbnail item-start [hidden]="!new.urlToImage"> \n        <a [href]="new.url" target="_blank"><img [src]="new.urlToImage" title="img"></a>\n      </ion-thumbnail>\n      <a [href]="new.url"><ion-card-title>{{new.title}}</ion-card-title></a>\n      <a [href]="new.url" target="_blank" class="newLabelDescription">\n        <p>{{ new.description }}</p>\n      </a>\n\n    </ion-item>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettPage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettPage1 = /** @class */ (function () {
    function SettPage1(navCtrl, navParams, st) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.st = st;
        this.sett = {
            location: undefined,
            unit: undefined,
            statusToggle: undefined,
            name: undefined,
            country: undefined,
        };
        this.receivedData = this.navParams.get('data');
    }
    SettPage1.prototype.ionViewDidEnter = function () {
        this.sett.unit = "M";
    };
    //Method to store the info in the Storage and pop the page on "submit" button (Save)
    SettPage1.prototype.setSettings = function (sett) {
        sett.name = sett.location;
        if (sett.statusToggle == true && sett.location2 == undefined)
            sett.statusToggle = false;
        //Store all data from the object of the form
        this.st.set('dataStorage', { "loc": sett.location, "unit": sett.unit, "comp": sett.statusToggle, "name": sett.name, "country": sett.country });
        //Close the page and go back to Home
        this.navCtrl.pop();
    };
    SettPage1.prototype.getData = function (name) {
        var _this = this;
        var url = "https://restcountries.com/v3.1/capital/" + name;
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            //console.log(data);
            _this.result = data;
        });
    };
    SettPage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sett',template:/*ion-inline-start:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/sett/sett.html"*/'<!--\n  Generated template for the SettPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n        <p style="color: #ea6153;">\n          Please fill in to use service as intended\n        </p>\n\n        <form (ngSubmit)="setSettings(sett)">\n          <!--Whole List for the Form-->\n          <ion-list>\n\n            <ion-list>\n              <ion-item>\n                <ion-label position="floating" color="primary" stacked>City Name:</ion-label>\n                <ion-input type="text" [(ngModel)]="sett.location" name="location"\n                  placeholder="Enter City Name"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position="floating" color="primary" stacked>Country Code:</ion-label>\n                <ion-input type="text" [(ngModel)]="sett.country" name="name"\n                  placeholder="Enter Country Code (ie)"></ion-input>\n              </ion-item>\n              <!-- <ion-item>\n          <ion-label color="primary" stacked>News Country:</ion-label>\n          <ion-input type="text" [(ngModel)]="sett.country" name="country"\n            placeholder="Enter News Country Code eg. IE"></ion-input>\n        </ion-item> -->\n              <ion-item>\n                <ion-label position="floating" color="primary" stacked>Unit Choice For Weather:</ion-label>\n              </ion-item>\n              <ion-list radio-group [(ngModel)]="sett.unit" name="unit">\n                <ion-item>\n                  <ion-label position="floating">Scientific</ion-label>\n                  <ion-radio value="S"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label position="floating">Metric</ion-label>\n                  <ion-radio value="M" checked></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label position="floating">Imperial</ion-label>\n                  <ion-radio value="I"></ion-radio>\n                </ion-item>\n              </ion-list>\n\n              <!--Button - Submit Form-->\n              <button ion-button type="submit">Save</button>\n            </ion-list>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/sett/sett.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettPage1);
    return SettPage1;
}());

//# sourceMappingURL=sett.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/news/news.module": [
		280,
		1
	],
	"../pages/sett/sett.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_weather_get_weather__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sett_sett__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_news__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    //Constructor: instantiate Classes needed to allow Dependency Injection
    function HomePage(http, navCtrl, gw, st) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.gw = gw;
        this.st = st;
        //General Error Flag to control Async calls after error catch
        //eg: if News in first city and Second City "Error Catch City not found", getNews() would re-enable News button after disabled on handleGeneralDisplay()
        //Weather Variables
        //Array of objects containing relevant information
        this.locationsArray = [];
        this.result = [];
        this.disablePreviousButton = true;
        this.disableNextButton = false;
        this.news = [];
    }
    HomePage_1 = HomePage;
    //On first load, show nothing deleting any stored value on Storage
    HomePage.prototype.ionViewDidLoad = function () {
        //this.st.clear();
    };
    /* Method to Push the Settings Page */
    HomePage.prototype.goSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sett_sett__["a" /* SettPage1 */]);
    };
    HomePage.prototype.goHome = function () {
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.goNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_news__["a" /* NewsPage */]);
    };
    //On Change get the Weather Data
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //Reset basic variables
        this.locationsArray = [];
        //Wait until the storage is ready
        this.st.ready()
            .then(function () {
            //Get the data
            _this.st.get('dataStorage')
                .then(function (data) {
                //If there's data (not first load)
                if (data) {
                    //Get to the API with the info in Storage
                    _this.getWeather(data.loc, data.unit);
                    _this.getCountry(data.name);
                    if (data.comp) {
                        _this.getWeather(data.loc, data.unit);
                        _this.getCountry(data.name);
                    }
                    //Get the Symbol of the Temperature with the units required
                    _this.weatherSymbol = _this.getWeatherSymbol(data.unit);
                }
            })
                .catch(function (err) {
                console.log("Error trying to access storage: ");
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log("Error trying to check Storage readiness: ");
            console.log(err);
        });
    };
    //Method to access the weather API 
    HomePage.prototype.getWeather = function (location, unit) {
        var _this = this;
        this.gw.getWeather(location, unit).subscribe(
        //On success Accessing the API
        function (dataWeather) {
            //Object stores the information needed
            var data = {
                location: dataWeather.data[0].city_name,
                weather: dataWeather.data[0].app_temp,
                description: dataWeather.data[0].weather.description,
                cityName: dataWeather.data[0].country_code,
                country: dataWeather.data[0].country_code,
            };
            _this.locationsArray.push(data);
        });
    };
    //Method to select the correct Unit Symbol for Display
    HomePage.prototype.getWeatherSymbol = function (unit) {
        switch (unit) {
            //Celsius Symbol: &#8451;
            case "M":
                return "&#8451;";
            //Kelvin Symbol: &#8490;
            case "S":
                return "&#8490;";
            //Farenheit Symbol: &#8457;
            case "I":
                return "&#8457;";
            default:
                return "";
        }
    };
    HomePage.prototype.getCountry = function (name) {
        var _this = this;
        var url = "https://restcountries.com/v3.1/capital/" + name;
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            //console.log(data);
            _this.result = data;
            _this.cityNotFound = false;
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(false);
        }, function (error) {
            console.error('Undefined/Not Found:', error);
            _this.cityNotFound = true;
            _this.cityNotFound = name;
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(true);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      G00411237\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goSettings()">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center; margin: 15px;">\n    <h2>Capital:</h2>\n    <ion-grid>\n      <ion-row *ngFor="let data of result">\n        <ion-col width-50 offset-25>\n          <h2>{{ data.capital ? data.capital : \' not found \' }}, {{ data.name.common ? data.name.common : \'Country not\n            found\' }}</h2>\n          <h2>{{ data.flag ? data.flag : \'not found\' }}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card *ngIf="cityNotFound">\n      <ion-card-content>\n        {{ cityNotFound }} not found. Please try another city in settings.\n        <button ion-button (click)="goSettings()">Go to Settings</button>\n      </ion-card-content>\n    </ion-card>\n\n    <br><br>\n\n    <!-- Div for each location, with *ngFor to display all available (Template) -->\n    <div class="weatherItem" *ngFor="let location of locationsArray">\n      <ion-card lines="none">\n        <ion-item><strong>Weather for: {{ location.location }}</strong></ion-item>\n        <ion-item><strong>Temperature: {{ location.weather }}</strong> <span\n            [innerHTML]="weatherSymbol"></span></ion-item>\n        <ion-item><strong>Country Code: {{ location.cityName }}</strong></ion-item>\n        <ion-item><strong>Description: {{ location.description }}</strong></ion-item>\n      </ion-card>\n\n      <!-- News Section -->\n      <!-- Button to display the news -->\n\n      <button ion-button (click)="goNews()">News</button>\n      <br><br>\n\n\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_get_weather_get_weather__["a" /* GetWeatherProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

// https://api.thenewsapi.com/v1/news/all?api_token=InGLViamYYxe4xEji37KzRcJQd2ikAdI8j6I2YIv&search="gb
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetWeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GetWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetWeatherProvider = /** @class */ (function () {
    //Instantiate HTTPClient
    function GetWeatherProvider(http) {
        this.http = http;
    }
    //Method to access the Weather API
    GetWeatherProvider.prototype.getWeather = function (name, unit) {
        //Key: e41f650f8b3ed7647a0c338bb92e5742
        //Example full url: http://api.openweathermap.org/data/2.5/weather?q=galway&units=metric&appid=e41f650f8b3ed7647a0c338bb92e5742
        //Get the JSON and return it
        return this.http.get("https://api.weatherbit.io/v2.0/current?city=" + name + "&key=1ecaf94c7e7a413a9b0b34260c8f4ae8&units=" + unit + "&include=minutely");
    };
    GetWeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GetWeatherProvider);
    return GetWeatherProvider;
}());

//# sourceMappingURL=get-weather.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_get_weather_get_weather__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sett_sett__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sett_sett__["a" /* SettPage1 */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sett/sett.module#SettPageModule', name: 'SettPage1', segment: 'sett', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sett_sett__["a" /* SettPage1 */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_get_weather_get_weather__["a" /* GetWeatherProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/richardjameson/Desktop/G00411237(1)/G00411237/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContent": () => (/* binding */ getContent)
/* harmony export */ });
const getContent = () => `
<ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Taxi to Amsterdam</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
                      </p>
                      <p class="event__duration">30M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Order Uber</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">20</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Flight to Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
                      </p>
                      <p class="event__duration">1H 10M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">160</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add luggage</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">50</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Switch to comfort</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">80</span>
                        </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>
                      </p>
                      <p class="event__duration">1H 35M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">160</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Rent a car</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">200</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Check-in in Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T12:25">16:20</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T13:35">17:00</time>
                      </p>
                      <p class="event__duration">40M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">600</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add breakfast</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">50</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>

            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">2</span>
                <time class="day__date" datetime="2019-03-19">MAR 19</time>
              </div>

              <ul class="trip-events__list">
                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/sightseeing.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Sightseeing in Chamonix</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T11:20">14:20</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T13:00">13:00</time>
                      </p>
                      <p class="event__duration">1H 20M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">50</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Book tickets</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">40</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Lunch in city</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">30</span>
                        </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to Geneva</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T10:00">16:00</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T11:00">17:00</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>

                <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Flight to Geneva</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T18:00">18:00</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T19:00">19:00</time>
                      </p>
                      <p class="event__duration">1H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">20</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Add luggage</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">30</span>
                       </li>
                       <li class="event__offer">
                         <span class="event__offer-title">Switch to comfort</span>
                         &plus;
                         &euro;&nbsp;<span class="event__offer-price">100</span>
                        </li>
                    </ul>
`;


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilters": () => (/* binding */ getFilters)
/* harmony export */ });
const getFilters = () => `
<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
    <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
    <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
</form>
`;


/***/ }),

/***/ "./src/components/route.js":
/*!*********************************!*\
  !*** ./src/components/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoute": () => (/* binding */ getRoute)
/* harmony export */ });
const getRoute = () => `
<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>

    <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
</section>
`;

const getSorting = () => `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
<span class="trip-sort__item  trip-sort__item--day">Day</span>

<div class="trip-sort__item  trip-sort__item--event">
  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
  <label class="trip-sort__btn" for="sort-event">Event</label>
</div>

<div class="trip-sort__item  trip-sort__item--time">
  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
  <label class="trip-sort__btn" for="sort-time">
    Time
    <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>
  </label>
</div>

<div class="trip-sort__item  trip-sort__item--price">
  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
  <label class="trip-sort__btn" for="sort-price">
    Price
    <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>
  </label>
</div>

<span class="trip-sort__item  trip-sort__item--offers">Offers</span>
</form>
`;


/***/ }),

/***/ "./src/components/site-menu.js":
/*!*************************************!*\
  !*** ./src/components/site-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenu": () => (/* binding */ getMenu)
/* harmony export */ });
const getMenu = () => `
<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
  <a class="trip-tabs__btn" href="#">Stats</a>
</nav>
`;


/***/ }),

/***/ "./src/components/sorting.js":
/*!***********************************!*\
  !*** ./src/components/sorting.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSorting": () => (/* binding */ getSorting)
/* harmony export */ });
const getSorting = () => `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
<span class="trip-sort__item  trip-sort__item--day">Day</span>

<div class="trip-sort__item  trip-sort__item--event">
  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
  <label class="trip-sort__btn" for="sort-event">Event</label>
</div>

<div class="trip-sort__item  trip-sort__item--time">
  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
  <label class="trip-sort__btn" for="sort-time">
    Time
    <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>
  </label>
</div>

<div class="trip-sort__item  trip-sort__item--price">
  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
  <label class="trip-sort__btn" for="sort-price">
    Price
    <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>
  </label>
</div>

<span class="trip-sort__item  trip-sort__item--offers">Offers</span>
</form>
`;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_site_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/site-menu */ "./src/components/site-menu.js");
/* harmony import */ var _components_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/route */ "./src/components/route.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content */ "./src/components/content.js");






const render = (container, text, position) => {
  container.insertAdjacentHTML(position, text);
};

render(document.querySelector(`.trip-main`), (0,_components_route__WEBPACK_IMPORTED_MODULE_1__.getRoute)(), `afterbegin`);
render(document.querySelector(`.switch-trip-view`), (0,_components_site_menu__WEBPACK_IMPORTED_MODULE_0__.getMenu)(), `afterend`);
render(document.querySelector(`.filter-events`), (0,_components_filters__WEBPACK_IMPORTED_MODULE_2__.getFilters)(), `afterend`);
render(document.querySelector(`.trip-events`), (0,_components_sorting__WEBPACK_IMPORTED_MODULE_3__.getSorting)(), `afterbegin`);
render(
  document.querySelector(`.trip-events__trip-sort`),
  (0,_components_content__WEBPACK_IMPORTED_MODULE_4__.getContent)(),
  `afterend`
);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
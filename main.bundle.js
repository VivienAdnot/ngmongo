webpackJsonp([0,3],{

/***/ 1027:
/***/ function(module, exports) {

module.exports = ".app-container {\r\n    padding: 20px;\r\n}"

/***/ },

/***/ 1028:
/***/ function(module, exports) {

module.exports = ".fill-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}"

/***/ },

/***/ 1029:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1030:
/***/ function(module, exports) {

module.exports = ".task-item {\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    background-color: #eee;\r\n}\r\n\r\nbutton.delete {\r\n    float: right;\r\n    top: -60px;\r\n}"

/***/ },

/***/ 1031:
/***/ function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"app-container\">\n    <md-card *ngIf=\"!authService.authenticated()\">\n        <md-card-title>Hello, visitor.</md-card-title>\n        <md-card-subtitle>\n            Please <a (click)=\"authService.signIn()\">sign in</a> to manage your task list.\n        </md-card-subtitle>\n    </md-card>\n\n    <app-task-list *ngIf=\"authService.authenticated()\"\n        (startAjaxRequest)=\"slimLoading.start()\"\n        (completeAjaxRequest)=\"slimLoading.complete()\">\n    </app-task-list>\n\n    <!-- adds the slim loading bar to our app -->\n    <ng2-slim-loading-bar [color]=\"'gold'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\n</div>"

/***/ },

/***/ 1032:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <span>Task List</span>\n    <span class=\"fill-space\"></span>\n    <button md-button (click)=\"authService.signIn()\" *ngIf=\"!authService.authenticated()\">Sign In</button>\n    <button md-button (click)=\"authService.signOut()\" *ngIf=\"authService.authenticated()\">Sign Out</button>\n</md-toolbar>"

/***/ },

/***/ 1033:
/***/ function(module, exports) {

module.exports = "<div class=\"task-form\">\n    <!--<input id=\"name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"friendshipFormModel.name\" required #nameCtrl=\"ngModel\">-->\n    <input [(ngModel)]=\"task\"  placeholder=\"New task\">\n    <!--<md-input [(ngModel)]=\"task\" placeholder=\"New task\"></md-input>-->\n    <button md-button md-raised-button color=\"primary\" (click)=\"addTask()\">Add</button>\n</div>"

/***/ },

/***/ 1034:
/***/ function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Task List</md-card-title>\n    <md-card-subtitle>All your tasks in one place.</md-card-subtitle>\n\n    <app-task-form (taskAdded)=\"taskAddedHandler($event)\"></app-task-form>\n\n    <md-list>\n        <div class=\"task-item\" *ngFor=\"let task of tasks; trackBy: $index\">\n            <p><small><strong>{{ task.createdAt | date: 'short' }}</strong></small></p>\n            <p>{{ task.description }}</p>\n            <button class=\"delete\" md-button md-raised-button color=\"accent\" (click)=\"deleteTask(task)\">Delete</button>\n        </div>\n        <div class=\"task-item\" *ngIf=\"tasks?.length == 0\">\n            <p>You have no pending tasks.</p>\n        </div>\n    </md-list>\n</md-card>"

/***/ },

/***/ 1177:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(620);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_lock__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// FIXME: replace these with your own Auth0 'Client ID' and 'Domain'
var AUTH0_CLIENT_ID = 'WXroPcMRV7PnZVDPallSspaypRs1EVD2';
var AUTH0_DOMAIN = 'vivien.eu.auth0.com';
// this is the key to the JWT in the browser localStorage
var ID_TOKEN = 'id_token';
var AuthService = (function () {
    function AuthService() {
        this.lock = new __WEBPACK_IMPORTED_MODULE_1_auth0_lock___default.a(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});
        // listening to 'authenticated' events
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem(ID_TOKEN, authResult.idToken);
        });
    }
    AuthService.prototype.signIn = function () {
        this.lock.show();
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem(ID_TOKEN);
    };
    AuthService.prototype.authenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/auth.service.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(571);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, slimLoading) {
        this.authService = authService;
        this.slimLoading = slimLoading;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1031),
            styles: [__webpack_require__(1027)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["a" /* SlimLoadingBarService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/app.component.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListService = (function () {
    function TaskListService(authHttp) {
        this.authHttp = authHttp;
        this.TASKS_ENDPOINT = 'https://wt-731b6cc859f639106036fe797f5a6b13-0.run.webtask.io/tasks';
    }
    TaskListService.prototype.loadTasks$ = function () {
        return this.authHttp.get(this.TASKS_ENDPOINT);
    };
    TaskListService.prototype.addTask$ = function (task) {
        return this.authHttp.post(this.TASKS_ENDPOINT, {
            description: task
        });
    };
    TaskListService.prototype.deleteTask$ = function (task) {
        return this.authHttp.delete(this.TASKS_ENDPOINT + '?id=' + task._id);
    };
    TaskListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object])
    ], TaskListService);
    return TaskListService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/task-list.service.js.map

/***/ },

/***/ 619:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 619;


/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(758);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/main.js.map

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_list_task_list_component__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_list_task_form_task_form_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_service__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__ = __webpack_require__(571);
/* unused harmony export authHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// creates a factory to AuthHttp
function authHttpFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthConfig"](), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_list_task_form_task_form_component__["a" /* TaskFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__["b" /* SlimLoadingBarModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_service__["a" /* TaskListService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/app.module.js.map

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(757);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/index.js.map

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(1032),
            styles: [__webpack_require__(1028)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/nav-bar.component.js.map

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.task = null;
    }
    TaskFormComponent.prototype.addTask = function () {
        this.taskAdded.emit(this.task);
        this.task = null;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskFormComponent.prototype, "taskAdded", void 0);
    TaskFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(1033),
            styles: [__webpack_require__(1029)]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/task-form.component.js.map

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_list_service__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = (function () {
    function TaskListComponent(taskListService) {
        this.taskListService = taskListService;
        this.startAjaxRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.completeAjaxRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.loadTasks();
    };
    TaskListComponent.prototype.loadTasks = function () {
        var _this = this;
        this.startAjaxRequest.emit();
        this.taskListService.loadTasks$().subscribe(function (response) { return _this.tasks = response.json(); }, function (error) { return console.log(error); }, function () { return _this.completeAjaxRequest.emit(); });
    };
    TaskListComponent.prototype.taskAddedHandler = function (task) {
        var _this = this;
        this.startAjaxRequest.emit();
        this.taskListService.addTask$(task).subscribe(function (response) { return _this.loadTasks(); }, function (error) { return console.log(); });
    };
    TaskListComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.startAjaxRequest.emit();
        this.taskListService.deleteTask$(task).subscribe(function (response) { return _this.loadTasks(); }, function (error) { return console.log(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "startAjaxRequest", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "completeAjaxRequest", void 0);
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(1034),
            styles: [__webpack_require__(1030)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_list_service__["a" /* TaskListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__task_list_service__["a" /* TaskListService */]) === 'function' && _a) || Object])
    ], TaskListComponent);
    return TaskListComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/task-list.component.js.map

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/environment.js.map

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Vivien/Documents/vivien-perso/code/tests/ngmongo/src/polyfills.js.map

/***/ }

},[1177]);
//# sourceMappingURL=main.bundle.map
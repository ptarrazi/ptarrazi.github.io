webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_users__ = __webpack_require__(154);
/* unused harmony reexport web_users */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers__ = __webpack_require__(339);
/* unused harmony reexport Customers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transport_orders_view__ = __webpack_require__(345);
/* unused harmony reexport Transport_Orders_View */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_types__ = __webpack_require__(343);
/* unused harmony reexport Material_Types */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transport_orders__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__transport_orders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_repository__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__file_repository__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transport_orders_status_values__ = __webpack_require__(344);
/* unused harmony reexport Transport_Orders_Status_Values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handling_mat_lst__ = __webpack_require__(342);
/* unused harmony reexport Handling_Mat_Lst */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gate_trans_view__ = __webpack_require__(341);
/* unused harmony reexport Gate_Trans_View */









//# sourceMappingURL=entity-model.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_entity_model__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_breeze_client__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_breeze_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_breeze_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busy_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FileRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransOrdStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var FileRead = (function () {
    function FileRead() {
    }
    return FileRead;
}());

;
var TransOrdStatuses;
(function (TransOrdStatuses) {
    TransOrdStatuses[TransOrdStatuses["WaitingApproval"] = 0] = "WaitingApproval";
    TransOrdStatuses[TransOrdStatuses["Approved"] = 1] = "Approved";
    TransOrdStatuses[TransOrdStatuses["Rejected"] = 2] = "Rejected";
    TransOrdStatuses[TransOrdStatuses["InProgress"] = 3] = "InProgress";
    TransOrdStatuses[TransOrdStatuses["Executed"] = 4] = "Executed";
    TransOrdStatuses[TransOrdStatuses["Canceled"] = 5] = "Canceled";
})(TransOrdStatuses || (TransOrdStatuses = {}));
;
var DataService = (function () {
    function DataService(config, http, busyService, authSrvc, document) {
        this.config = config;
        this.http = http;
        this.busyService = busyService;
        this.authSrvc = authSrvc;
        this.document = document;
        this.userIsCustomer = false;
        this.customerIID = 0;
        this.customerName = '';
        this.transportOrdersViewCount = 0;
        this.getUser_WebUserData_called = false;
        this._em = new __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityManager"](this.buildUrl("/breeze/Domain"));
        this._em.fetchMetadata().then(function () {
            /*
            // Φέρε τα SubmissiοnMethods
            this.buildHttpHeaders();
            let query = EntityQuery.from('SubmissionMethods')
                        .where("CodeNumber", "==", 1);
            this._em.executeQuery(query)
                .then(res => {
                    this.SubmittedByWebId = (<SubmissionMethods>res.results[0]).Id;
                })
                .catch((error) => {
                    console.log(error);
                    return Promise.reject(error);
                });

            // Βρές το StatusId του PendingValidation
            
            let query2 = EntityQuery.from('Statuses')
                        .where("CodeNumber", "==", 1);
            this._em.executeQuery(query2)
                .then(res => {
                    this.Status_PendingValidation_Id = (<Statuses>res.results[0]).Id;
                })
                .catch((error) => {
                    console.log(error);
                    return Promise.reject(error);
                });
            */
        });
    }
    DataService.prototype.buildHttpHeaders = function () {
        // Place Authentication token bearer into Http Headers
        var ajaxAdapter = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["config"].getAdapterInstance('ajax');
        var headers = ajaxAdapter.defaultSettings['headers'] || {};
        headers['Authorization'] = 'Bearer ' + this.authSrvc.token;
        ajaxAdapter.defaultSettings['headers'] = headers;
    };
    DataService.prototype.buildUrl = function (uri) {
        var res;
        /*
        if (this.document.location.hostname == 'localhost')
          res = this.config.servicesBaseUrl + uri;
        else
          res = this.document.location.origin +"/PublicApi"+ uri;
        */
        if (!__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].production) {
            res = this.config.servicesBaseUrl + uri;
        }
        else {
            res = "../WebApi" + uri;
        }
        console.log("DataService.buildUrl: res=" + res + " doc.loc.orig=" + this.document.location.origin);
        return res;
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        //return Observable.throw(errMsg);
        return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(error);
    };
    DataService.prototype.saveChanges = function () {
        return this._em.saveChanges()
            .then(function (saveResult) {
            console.log(saveResult);
            return Promise.resolve(true);
        }, function (rejectReason) {
            return Promise.reject(rejectReason);
        })
            .catch(function (reason) {
            return Promise.reject(reason);
        });
    };
    ;
    DataService.prototype.getUser_WebUserData = function () {
        var _this = this;
        if (this.getUser_WebUserData_called) {
            return Promise.resolve({});
        }
        this.getUser_WebUserData_called = true;
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('web_users')
            .expand('Customers')
            .where("UserName", "==", this.authSrvc.userName);
        //.toType('web_users');
        //console.log(this.authSrvc.userName)
        return this.busy(this._em.executeQuery(query)
            .then(function (res) {
            //console.log(res); 
            if (res.results.length > 0) {
                _this.customerIID = res.results[0].CustomerIID;
                _this.customerName = res.results[0].Customers.Name;
                //this.customerName = (<any>res.results[0]).Customers_Name;
                _this.userIsCustomer = _this.customerIID > 0;
                return res.results[0];
            }
            else {
                // No User
                var error = 'Ο χρήστης δεν είναι δηλωμένος σε Δήμο';
                console.log(error);
                _this.customerIID = 0;
                _this.userIsCustomer = _this.customerIID > 0;
                return undefined;
            }
        })
            .catch(function (error) {
            console.log(error);
            _this.customerIID = 0;
            _this.userIsCustomer = _this.customerIID > 0;
            return Promise.reject(error);
        }));
    };
    DataService.prototype.getTransportOrdersViewFiltered = function (skip, take, TransporterIID, MaterialIID, StatusId, TranspOrderCodeId) {
        var pred = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["Predicate"].create('CustomerIID', '>', 0);
        if (TranspOrderCodeId) {
            pred = pred.and('TransOrderId', 'EndsWith', TranspOrderCodeId.toString());
        }
        if (TransporterIID) {
            pred = pred.and('TransporterIID', '==', TransporterIID);
        }
        if (MaterialIID) {
            pred = pred.and('MaterialIID', '==', MaterialIID);
        }
        if ((StatusId != undefined) && (StatusId >= 0)) {
            pred = pred.and('Status', '==', StatusId);
        }
        return this.getTransportOrdersView(skip, take, pred);
    };
    ;
    DataService.prototype.busy = function (op) {
        if (!this.customerIID) {
            this.getUser_WebUserData();
        }
        return this.busyService.busy(op);
    };
    ;
    DataService.prototype.getTransportOrdersView = function (skip, take, pred) {
        var _this = this;
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('TransportOrdersView')
            .skip(skip)
            .take(take)
            .orderBy('IssueDate', true)
            .inlineCount(true);
        if (pred) {
            query = query.where(pred);
        }
        return this.busy(this._em.executeQuery(query))
            .then(function (res) {
            //console.log(res); 
            _this.transportOrdersViewCount = res.inlineCount;
            return res.results;
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    DataService.prototype.getTransportOrderViewByGUID = function (guid) {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('TransportOrdersView')
            .where('GUID', '==', guid);
        return this.busy(this._em.executeQuery(query))
            .then(function (res) {
            //console.log(res); 
            return res.results[0];
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    DataService.prototype.getTransporters = function () {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('Transporters')
            .select('IID, Name'); //.toType('Customers');
        return this.busy(this._em.executeQuery(query))
            .then(function (res) {
            //console.log(res.results);                                 
            return res.results;
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    DataService.prototype.getMaterials = function () {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('TransportMaterials')
            .select('NID, Name');
        return this.busy(this._em.executeQuery(query))
            .then(function (res) {
            //console.log(res);                 
            return res.results;
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    DataService.prototype.getStatuses = function () {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('TransportOrdersStatus')
            .select('Id, Name');
        return this.busy(this._em.executeQuery(query))
            .then(function (res) {
            //console.log(res.results);                 
            return res.results;
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    DataService.prototype.addNewTransportOrder = function (data, fileRead) {
        // Attach Files
        if (fileRead != undefined) {
            var eFilesStorage = new __WEBPACK_IMPORTED_MODULE_0__entities_entity_model__["a" /* File_Repository */]();
            eFilesStorage.FileName = fileRead.fileName;
            eFilesStorage.FileContent = fileRead.fileData;
            eFilesStorage.GUID = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["core"].getUuid();
            eFilesStorage.SourceTableName = 'TRANSPORT_ORDERS';
            eFilesStorage.SourceFieldName = 'ApplicationForm_FileRepoGUID';
            data.ApplicationForm_FileRepoGUID = eFilesStorage.GUID;
            var f = this._em.createEntity('File_Repository', eFilesStorage);
        }
        data.GUID = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["core"].getUuid();
        var oldId = data.GUID;
        data.IssueDate = new Date();
        data.IssuedByUser = this.authSrvc.userName;
        data.FirstDate = new Date();
        data.FirstUser = 'web';
        data.CustomerIID = this.customerIID;
        data.Year = '0000';
        data.TransOrderId = '0';
        var e = this._em.createEntity('Transport_Orders', data);
        //this._em.addEntity(e);
        //console.log(e);
        return this._em.saveChanges()
            .then(function (saveResult) {
            return Promise.resolve({ result: true });
        }, function (rejectReason) {
            return Promise.reject(rejectReason);
        })
            .catch(function (reason) {
            var errors = e.entityAspect.getValidationErrors();
            var errorString = "";
            errors.forEach(function (ve) {
                errorString += ve.errorMessage + "\n";
            });
            return Promise.reject(errorString);
        });
    };
    DataService.prototype.getFileRepositoryByGUID = function (guid) {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('FileRepository')
            .where("GUID", "==", guid);
        return this.busy(this._em.executeQuery(query))
            .then(function (res) { return res.results[0]; })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    // Διελεύσεις μίας Εντολής Μεταφοράς
    DataService.prototype.getGateTransForTransportOrderGUID = function (transOrderGuid) {
        this.buildHttpHeaders();
        var query = __WEBPACK_IMPORTED_MODULE_2_breeze_client__["EntityQuery"].from('GateTrans')
            .where("TransportOrderGUID", "==", transOrderGuid);
        return this.busy(this._em.executeQuery(query))
            .then(function (res) { return res.results; })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* APP_CONFIG */])),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__busy_service__["a" /* BusyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__busy_service__["a" /* BusyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__authentication_index__["g" /* AuthenticationService */]) === "function" && _c || Object, Object])
], DataService);

var _a, _b, _c;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return web_users; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var web_users = (function (_super) {
    __extends(web_users, _super);
    function web_users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    web_users.initializer = function (entity) { };
    return web_users;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=web-users.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(347);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BusyService = (function () {
    function BusyService() {
        this._busyCounter = 0;
    }
    Object.defineProperty(BusyService.prototype, "isBusy", {
        get: function () {
            return this._busyCounter > 0;
        },
        enumerable: true,
        configurable: true
    });
    BusyService.prototype.busy = function (op) {
        var _this = this;
        setTimeout(function () {
            _this._busyCounter++;
            op.then(function (result) {
                _this._busyCounter--;
            }).catch(function (reason) {
                _this._busyCounter--;
                throw reason; // Rethrow error
            });
        });
        return op;
    };
    return BusyService;
}());
BusyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BusyService);

//# sourceMappingURL=busy.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_store__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptService = (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        __WEBPACK_IMPORTED_MODULE_1__script_store__["a" /* ScriptStore */].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    return ScriptService;
}());
ScriptService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ScriptService);

//# sourceMappingURL=script.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faq; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Faq = (function () {
    function Faq() {
    }
    return Faq;
}());
Faq = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <h1>\u03A3\u03C5\u03C7\u03BD\u03AD\u03C2 \u0395\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2</h1>\n\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.\n    "
    })
], Faq);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guidelines; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Guidelines = (function () {
    function Guidelines() {
    }
    return Guidelines;
}());
Guidelines = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <h1>\u039F\u03B4\u03B7\u03B3\u03AF\u03B5\u03C2</h1>\n\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.\n    "
    })
], Guidelines);

//# sourceMappingURL=guidelines.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(354);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport_orders_list_component__ = __webpack_require__(358);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__transport_orders_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport_order_component__ = __webpack_require__(357);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__transport_order_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatetrans_of_transporder_component__ = __webpack_require__(356);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__gatetrans_of_transporder_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_web_users__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AuthenticationService, UserExtendedInfo } from '../_authentication/index';
//import { AuthenticationService } from '../_authentication/index';


var UserInfoComponent = (function () {
    function UserInfoComponent(router, 
        //private authService: AuthenticationService,
        ds, toastr) {
        this.router = router;
        this.ds = ds;
        this.toastr = toastr;
        //user: UserExtendedInfo = new UserExtendedInfo();
        this.user = new __WEBPACK_IMPORTED_MODULE_4__entities_web_users__["a" /* web_users */];
        //model: any = {};
        this.loading = false;
        this.error = '';
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.fetchUserInfo();
    };
    UserInfoComponent.prototype.fetchUserInfo = function () {
        var _this = this;
        this.ds.getUser_WebUserData_called = false;
        this.ds.getUser_WebUserData().then(function (value) {
            _this.user = value;
        });
    };
    UserInfoComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.ds.saveChanges()
            .then(function (value) {
            _this.loading = false;
            _this.router.navigate(['/']);
            _this.toastr.info("Τα στοιχεία χρήστη αποθηκεύτηκαν");
        })
            .catch(function (reason) {
            _this.loading = false;
            _this.toastr.error('Error from Server' + reason);
        });
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(597)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], UserInfoComponent);

var _a, _b, _c;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(332);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(335);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginhelp_component__ = __webpack_require__(336);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__loginhelp_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_component__ = __webpack_require__(337);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_component__ = __webpack_require__(333);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__changepassword_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpassword_component__ = __webpack_require__(334);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__forgotpassword_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpassword_component__ = __webpack_require__(338);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__resetpassword_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_routing__ = __webpack_require__(331);
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 322;


/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authConfig; });
var authConfig = {
    apiLoginUrl: "/Token",
    apiRegisterUrl: "/api/Account/Register",
    apiUserInfoUrl: "/api/Account/UserExtendedInfo",
    apiUserExtendedInfoUrl: "/api/Account/UserExtendedInfo",
    apiUpdateUserExtendedInfoUrl: "/api/Account/UpdateUserExtendedInfo",
    apiChangePasswordUrl: "/api/Account/ChangePassword",
    apiForgotPasswordUrl: "/api/Account/ForgotPassword",
    apiResetPasswordUrl: "/api/Account/ResetPassword",
    lcStorageUserItemStr: "currentUser"
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_index__ = __webpack_require__(29);
/* unused harmony export authRoutes */

var authRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__authentication_index__["a" /* LoginComponent */] },
    { path: 'loginhelp', component: __WEBPACK_IMPORTED_MODULE_0__authentication_index__["b" /* LoginHelpComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__authentication_index__["c" /* RegisterComponent */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_0__authentication_index__["e" /* ForgotPasswordComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_0__authentication_index__["f" /* ResetPasswordComponent */] }
    //,
    //{ path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard] }
];
//# sourceMappingURL=auth.routing.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RegisterUserModel; });
/* unused harmony export UserInfo */
/* unused harmony export UserExtendedInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChangePasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetPasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var RegisterUserModel = (function () {
    function RegisterUserModel() {
    }
    return RegisterUserModel;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var UserExtendedInfo = (function () {
    function UserExtendedInfo() {
    }
    return UserExtendedInfo;
}());

var ChangePasswordModel = (function () {
    function ChangePasswordModel() {
    }
    return ChangePasswordModel;
}());

var ResetPasswordModel = (function () {
    function ResetPasswordModel() {
    }
    return ResetPasswordModel;
}());

var AuthenticationService = (function () {
    function AuthenticationService(http, config, document) {
        this.http = http;
        this.config = config;
        this.document = document;
        // set token if saved in local storage localStorage / sessionStorage
        var currentUser = JSON.parse(sessionStorage.getItem(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].lcStorageUserItemStr));
        this.token = currentUser && currentUser.token;
        this.userName = currentUser && currentUser.username;
    }
    Object.defineProperty(AuthenticationService.prototype, "isAuthenticated", {
        get: function () { return (this.userName != null); },
        enumerable: true,
        configurable: true
    });
    ;
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var body = 'grant_type=password&username=' + username + '&password=' + password;
        return this.http.post(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiLoginUrl), body)
            .map(function (response) {
            // login successful if there's a jwt token in the response                
            var token = response.json() && response.json().access_token;
            if (token) {
                // set token property
                _this.token = token;
                _this.userName = username;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].lcStorageUserItemStr, JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.userName = null;
        sessionStorage.removeItem(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].lcStorageUserItemStr);
    };
    // Register a new user
    AuthenticationService.prototype.register = function (regUser) {
        var body = JSON.stringify(regUser);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json; charset=UTF-8' });
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiRegisterUrl), body, options)
            .map(function (response) { return true; });
    };
    AuthenticationService.prototype.buildUrl = function (uri) {
        var res;
        /*
        if (this.document.location.hostname == 'localhost')
          res = this.config.servicesBaseUrl + uri;
        else
          res = this.document.location.origin +"/PublicApi"+ uri;
        */
        if (!__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production) {
            res = this.config.servicesBaseUrl + uri;
        }
        else {
            res = "../WebApi" + uri;
        }
        console.log("AutService.buildUrl: res=" + res + " doc.loc.orig=" + this.document.location.origin);
        return res;
    };
    AuthenticationService.prototype.userInfo = function () {
        /*
        let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiUserInfoUrl), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthenticationService.prototype.extractData = function (response) {
        var user = new UserInfo();
        var jsonFromBody = response.json();
        user.EMail = jsonFromBody.Email;
        return user || {};
    };
    AuthenticationService.prototype.userExtendedInfo = function () {
        /*
        let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiUserExtendedInfoUrl), options)
            .map(this.extractExtendedData)
            .catch(this.handleError);
    };
    AuthenticationService.prototype.extractExtendedData = function (response) {
        var user = new UserExtendedInfo();
        var jsonFromBody = response.json();
        user.UserExtId = jsonFromBody.UserExtId;
        user.Email = jsonFromBody.Email;
        user.CompanyName = jsonFromBody.CompanyName;
        user.Address = jsonFromBody.Address;
        user.PersonName = jsonFromBody.PersonName;
        user.PersonSurname = jsonFromBody.PersonSurname;
        user.CompanyPosition = jsonFromBody.CompanyPosition;
        user.TelephoneNumber = jsonFromBody.TelephoneNumber;
        return user || {};
    };
    AuthenticationService.prototype.updateUserExtendedInfo = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiUpdateUserExtendedInfoUrl), JSON.stringify(userInfo), options)
            .map(function (response) {
            return response.ok;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.changePassword = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiChangePasswordUrl), JSON.stringify(model), options)
            .map(function (response) {
            return response.ok;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.forgotPassword = function (email) {
        var body = '?email=' + email;
        var url = this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiForgotPasswordUrl) + body;
        return this.http.post(url, '')
            .map(function (response) {
            return response.ok;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.resetPassword = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.buildUrl(__WEBPACK_IMPORTED_MODULE_5_app_authentication_auth_config__["a" /* authConfig */].apiResetPasswordUrl), JSON.stringify(model), options)
            .map(function (response) {
            return response.ok;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        //return Observable.throw(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* APP_CONFIG */])),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, Object, Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_index__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__authentication_index__["i" /* ChangePasswordModel */]();
        this.loading = false;
        this.error = '';
    }
    ChangePasswordComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        console.log(this.model);
        this.authService.changePassword(this.model)
            .subscribe(function (data) {
            //this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
            try {
                var body = error.json();
                var modelState = body.ModelState;
                var errors = "";
                for (var field in modelState) {
                    errors = errors + modelState[field];
                }
                _this.error = errors;
            }
            catch (catcherror) {
                alert(error);
            }
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(586)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */]) === "function" && _b || Object])
], ChangePasswordComponent);

var _a, _b;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_index__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.model = { email: null };
        this.loading = false;
        this.error = '';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        //
    };
    ForgotPasswordComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.authService.forgotPassword(this.model.email)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
            _this.toastr.info('Σας στάλθηκε ηλεκτρονικό μήνυμα. Κοιτάξτε το ταχυδρομείο σας.');
        }, function (error) {
            _this.loading = false;
            try {
                console.log(error);
                if (error.status == 0) {
                    _this.toastr.error('No Answer from Server');
                }
                else if (error.status == 400) {
                    _this.toastr.error('Not Found');
                }
                var body = error.json();
                var modelState = body.ModelState;
                var errors = "";
                for (var field in modelState) {
                    errors = errors + modelState[field];
                }
                _this.error = errors;
            }
            catch (catcherror) {
                alert(error);
            }
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(587)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], ForgotPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_index__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Το όνομα χρήστη ή ο Κωδικός είναι εσφαλμένα';
                _this.loading = false;
            }
        }, function (error) {
            console.log("error in login > " + error);
            _this.error = undefined;
            if (error._body != undefined) {
                var body = JSON.parse(error._body);
                if (body.error_description != undefined) {
                    _this.error = body.error_description;
                }
            }
            if (_this.error == undefined) {
                _this.error = 'Σφάλμα κατά την επικοινωνία με τον σέρβερ ή το όνομα χρήστη ή ο Κωδικός είναι εσφαλμένα';
            }
            _this.loading = false;
        });
    };
    LoginComponent.prototype.newComplaint = function () {
        this.router.navigate(['/newapplication']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(588)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginHelpComponent = (function () {
    function LoginHelpComponent(router) {
        this.router = router;
    }
    LoginHelpComponent.prototype.ngOnInit = function () {
    };
    return LoginHelpComponent;
}());
LoginHelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(589)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], LoginHelpComponent);

var _a;
//# sourceMappingURL=loginhelp.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_index__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__authentication_index__["j" /* RegisterUserModel */]();
        this.loading = false;
        this.error = '';
        //  this.model = {
        //      UserName: 'andreas4',
        //      PersonName: 'John',
        //      PersonSurname: 'Pappa',
        //      Password: 'Aa3456!',
        //      ConfirmPassword: 'Aa3456!',
        //      Email: 'info4@motion.gr',
        //      CompanyName: 'mill',
        //      CompanyPosition: 'Mngr',
        //      Address: 'sxisto',
        //      TelephoneNumber: '2104567890'        
        //      };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authService.register(this.model)
            .subscribe(function (data) {
            //this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
            //this.alertService.error(error);
            //console.log("error: "+error);
            try {
                var body = JSON.parse(error._body); // Κάνει το string -> object                   
                var modelState = body.ModelState;
                var errors = "";
                for (var field in modelState) {
                    errors = errors + modelState[field];
                }
                _this.error = errors;
            }
            catch (error) {
                alert(error);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(590)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_index__["g" /* AuthenticationService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_index__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__authentication_index__["h" /* ResetPasswordModel */]();
        this.loading = false;
        this.error = '';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        // reset login status
        this.authenticationService.logout();
        /*
        this.model.id = this.route.snapshot.params['id'];
        this.model.code = this.route.snapshot.params['code'];
        console.log(this.route.snapshot.params);
        */
        this.route.params
            .subscribe(function (params) {
            console.log("On Init");
            console.log(params);
            _this.model.id = params['id'];
            _this.model.code = params['code'];
            console.log(_this.model);
            return;
        });
    };
    ResetPasswordComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        //this.model.password = '';
        //this.model.confirmPassword = '';
        this.authenticationService.resetPassword(this.model)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            console.log("error in ResetPassword > " + error);
            _this.error = 'Password is incorrect';
            _this.loading = false;
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(591)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */]) === "function" && _c || Object])
], ResetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Customers */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Customers = (function (_super) {
    __extends(Customers, _super);
    function Customers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Customers.initializer = function (entity) { };
    return Customers;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File_Repository; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var File_Repository = (function (_super) {
    __extends(File_Repository, _super);
    function File_Repository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    File_Repository.initializer = function (entity) { };
    return File_Repository;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=file-repository.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Gate_Trans_View */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Gate_Trans_View = (function (_super) {
    __extends(Gate_Trans_View, _super);
    function Gate_Trans_View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Gate_Trans_View.initializer = function (entity) { };
    return Gate_Trans_View;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=gate-trans-view.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Handling_Mat_Lst */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Handling_Mat_Lst = (function (_super) {
    __extends(Handling_Mat_Lst, _super);
    function Handling_Mat_Lst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Handling_Mat_Lst.initializer = function (entity) { };
    return Handling_Mat_Lst;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=handling-mat-lst.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Material_Types */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Material_Types = (function (_super) {
    __extends(Material_Types, _super);
    function Material_Types() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Material_Types.initializer = function (entity) { };
    return Material_Types;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=material-types.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Transport_Orders_Status_Values */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Transport_Orders_Status_Values = (function (_super) {
    __extends(Transport_Orders_Status_Values, _super);
    function Transport_Orders_Status_Values() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Transport_Orders_Status_Values.initializer = function (entity) { };
    return Transport_Orders_Status_Values;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=transport-orders-status-values.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* unused harmony export Transport_Orders_View */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Transport_Orders_View = (function (_super) {
    __extends(Transport_Orders_View, _super);
    function Transport_Orders_View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Transport_Orders_View.initializer = function (entity) { };
    return Transport_Orders_View;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=transport-orders-view.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transport_Orders; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Transport_Orders = (function (_super) {
    __extends(Transport_Orders, _super);
    function Transport_Orders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /// <code> Place custom code between <code> tags
    /// [Initializer]
    Transport_Orders.initializer = function (entity) { };
    return Transport_Orders;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));

//# sourceMappingURL=transport-orders.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        // localStorage or sessionStorage
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHelper; });
var FileHelper = (function () {
    function FileHelper() {
    }
    FileHelper.getContentType = function (fileName) {
        var strextension = fileName.split('.').pop();
        var contentType;
        switch (strextension.toLowerCase()) {
            case "gif":
                contentType = "image/gif";
                break;
            case "jpg":
            case "jpeg":
                contentType = "image/jpeg";
                break;
            case "png":
                contentType = "image/png";
                break;
            case "bmp":
                contentType = "image/bmp";
                break;
            case "doc":
                contentType = "application/ms-word";
                break;
            case "docx":
                contentType = "application/vnd.ms-word.document.12";
                break;
            case "pdf":
                contentType = "application/pdf";
                break;
            case "xls":
                contentType = "application/vnd.ms-excel";
                break;
            case "ppt":
                contentType = "application/vnd.ms-powerpoint";
                break;
            case "zip":
                contentType = "application/zip";
                break;
            case "txt":
                contentType = "text/plain";
                break;
            default:
                contentType = "application/octet-stream";
                break;
        }
        return contentType;
    };
    return FileHelper;
}());

//# sourceMappingURL=fileHelper.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileHelper__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fileHelper__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { enableProdMode, Component, OnInit, ViewContainerRef, Inject } from '@angular/core';
var NotifyService = (function () {
    function NotifyService(toastr /*, vRef: ViewContainerRef*/) {
        this.toastr = toastr; /*, vRef: ViewContainerRef*/
        //this.toastr.setRootViewContainerRef(vRef);        
    }
    NotifyService.prototype.show = function (msgType, msg) {
        var opt = {
            toastLife: 3000,
            dismiss: "auto",
            showCloseButton: true,
            positionClass: "toast-top-full-width",
            animate: "flyLeft"
        };
        var t = new __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["Toast"](msgType, msg);
        this.toastr.show(t, opt);
    };
    NotifyService.prototype.info = function (msg) {
        this.show("info", msg);
    };
    NotifyService.prototype.success = function (msg) {
        this.show("success", msg);
    };
    NotifyService.prototype.error = function (msg) {
        this.show("error", msg);
    };
    return NotifyService;
}());
NotifyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] /*, vRef: ViewContainerRef*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] /*, vRef: ViewContainerRef*/) === "function" && _a || Object])
], NotifyService);

var _a;
//# sourceMappingURL=notify.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var AppComponent = (function () {
    function AppComponent(authService, toastr, vRef, notify, config, busyService, ds) {
        this.authService = authService;
        this.toastr = toastr;
        this.notify = notify;
        this.config = config;
        this.busyService = busyService;
        this.ds = ds;
        this.title = 'Εντολές Μεταφορών Δήμων';
        this.version = "";
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
        this.version = this.config.version;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(592),
        styles: [__webpack_require__(512)]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_index__["g" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["c" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["c" /* NotifyService */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* BusyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* BusyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_breeze_bridge_angular__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_index__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_index__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__transport_orders_index__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__faq_faq_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guidelines_guidelines_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userinfo_userinfo_component__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["b" /* LoginHelpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["c" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__userinfo_userinfo_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["d" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["e" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["f" /* ResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__transport_orders_index__["a" /* TransportOrdersListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__transport_orders_index__["b" /* TransportOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__transport_orders_index__["c" /* GatetransOfTrasporderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__faq_faq_component__["a" /* Faq */],
            __WEBPACK_IMPORTED_MODULE_17__guidelines_guidelines_component__["a" /* Guidelines */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4_breeze_bridge_angular__["a" /* BreezeBridgeAngularModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_6__app_config__["b" /* DevAppConfig */] },
            __WEBPACK_IMPORTED_MODULE_9__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__authentication_index__["g" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["b" /* BusyService */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["c" /* NotifyService */],
            __WEBPACK_IMPORTED_MODULE_14__services_index__["d" /* ScriptService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transport_orders_index__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guidelines_guidelines_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




//import { NewComplaintComponent, ComplaintsComponent, ComplaintComponent, EditComplaintComponent } from './complaints/index';         




var appRoutes = [
    /* Authentication */
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["a" /* LoginComponent */] },
    { path: 'loginhelp', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["b" /* LoginHelpComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["c" /* RegisterComponent */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["e" /* ForgotPasswordComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["f" /* ResetPasswordComponent */] },
    { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_1__authentication_index__["d" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    /*
    { path: 'newapplication', component: NewComplaintComponent },
    */
    { path: 'listofapplications', component: __WEBPACK_IMPORTED_MODULE_4__transport_orders_index__["a" /* TransportOrdersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'application/:id', component: __WEBPACK_IMPORTED_MODULE_4__transport_orders_index__["b" /* TransportOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'applicationgatetrans/:id', component: __WEBPACK_IMPORTED_MODULE_4__transport_orders_index__["c" /* GatetransOfTrasporderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    /*
    { path: 'application/:id', component: ComplaintComponent, canActivate: [AuthGuard] },
    { path: 'editapplication/:id', component: EditComplaintComponent, canActivate: [AuthGuard] },
    */
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'userinfo', component: __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__["a" /* UserInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__["a" /* Faq */] },
    { path: 'guidelines', component: __WEBPACK_IMPORTED_MODULE_6__guidelines_guidelines_component__["a" /* Guidelines */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, notify, ds) {
        this.authService = authService;
        this.notify = notify;
        this.ds = ds;
        this.userName = null;
        this.customerName = null;
        this.dataLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });        
        this.userName = this.authService.userName;
        this.ds.getUser_WebUserData_called = false;
        this.ds.getUser_WebUserData().then(function (value) {
            if (value != undefined) {
                _this.userName = value.PersonName + " " + value.PersonSurname;
                _this.customerName = value.CustomerIID.toString();
            }
            _this.dataLoaded = true;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(593)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_index__["g" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_index__["g" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptStore; });
// Load scripts (i.e. libraries) on demand
//<script src='assets/pdfmake.min.js'></script>
//<script src='assets/vfs_fonts.js'></script>  
var ScriptStore = [
    { name: 'pdfmake', src: 'assets/pdfmake.min.js' },
    { name: 'vfs_fonts', src: 'assets/vfs_fonts.js' }
];
//# sourceMappingURL=script.store.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_entity_model__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatetransOfTrasporderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GatetransOfTrasporderComponent = (function () {
    function GatetransOfTrasporderComponent(route, location, notify, ds) {
        this.route = route;
        this.location = location;
        this.notify = notify;
        this.ds = ds;
        this.title = 'Διελεύσεις Εντολής Μεταφοράς';
        this.transpOrder = new __WEBPACK_IMPORTED_MODULE_4__entities_entity_model__["b" /* Transport_Orders */];
    }
    GatetransOfTrasporderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            //const TransportOrderGUID = params['id'];
            _this.TransportOrderGUID = params['id'];
            _this.ds.getTransportOrderViewByGUID(_this.TransportOrderGUID)
                .then(function (v) { _this.transpOrder = v; });
            _this.ds.getGateTransForTransportOrderGUID(_this.TransportOrderGUID)
                .then(function (v) { _this.data = v; });
            return _this.TransportOrderGUID;
        });
    };
    GatetransOfTrasporderComponent.prototype.goBack = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return GatetransOfTrasporderComponent;
}());
GatetransOfTrasporderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(594),
        styles: [__webpack_require__(513)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */]) === "function" && _d || Object])
], GatetransOfTrasporderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gatetrans-of-transporder.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_entity_model__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(349);
/* unused harmony export Datastates */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Datastates;
(function (Datastates) {
    Datastates[Datastates["Insert"] = 0] = "Insert";
    Datastates[Datastates["Edit"] = 1] = "Edit";
    Datastates[Datastates["View"] = 2] = "View";
})(Datastates || (Datastates = {}));
;
var TransportOrderComponent = (function () {
    function TransportOrderComponent(router, route, notify, ds) {
        this.router = router;
        this.route = route;
        this.notify = notify;
        this.ds = ds;
        this._selectFromList = "<Επιλέξτε απο την λίστα>";
        this.loading = false;
        this.title = "Εντολή Μεταφοράς";
        this.TransOrdStatuses = __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* TransOrdStatuses */];
        this.Datastates = Datastates;
        this.data = new __WEBPACK_IMPORTED_MODULE_3__entities_entity_model__["b" /* Transport_Orders */]();
        this.fileRead = new __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* FileRead */]();
        this.fileLoadingTextOut = '';
        this.fileIsLoading = false;
    }
    TransportOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var TransportOrderGUID = params['id'];
            if (TransportOrderGUID == '0') {
                // New Order
                _this.datastate = Datastates.Insert;
                _this.title = "Καταχώρηση Νέας Εντολής Μεταφοράς";
                _this.data = new __WEBPACK_IMPORTED_MODULE_3__entities_entity_model__["b" /* Transport_Orders */](); // Χρειάζεται ?
            }
            else {
                _this.datastate = Datastates.View;
                _this.title = "Εντολή Μεταφοράς (Παρουσίαση Μόνο)";
                _this.ds.getTransportOrderViewByGUID(TransportOrderGUID)
                    .then(function (v) {
                    _this.data = v;
                });
            }
            return TransportOrderGUID;
        });
        this.getLookups();
    };
    TransportOrderComponent.prototype.ngOnDestroy = function () {
        if (this.datastate == Datastates.Insert) {
            this.notify.error('ΑΚΥΡΩΘΗΚΕ η Καταχώρηση Νέας Εντολής Μεταφοράς');
        }
    };
    TransportOrderComponent.prototype.getLookups = function () {
        var _this = this;
        this.ds.getMaterials()
            .then(function (v) { return _this.materials = v.map(function (v) { return ({ label: v.Name, value: v.NID }); }); });
        this.ds.getTransporters()
            .then(function (v) { return _this.transporters = v.map(function (v) { return ({ label: v.Name, value: v.IID }); }); });
        this.ds.getStatuses()
            .then(function (v) { return _this.statuses = v.map(function (v) { return ({ label: v.Name, value: v.Id }); }); });
    };
    TransportOrderComponent.prototype.onFileAttach = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        this.fileRead.fileName = this.file.name;
        // Load File
        var reader = new FileReader();
        reader.onloadend = function (file) {
            var contents = file.target;
            _this.fileRead.fileData = contents.result; // text/plain;base64,xxxxx
            _this.fileRead.fileType = _this.fileRead.fileData.substring(0, _this.fileRead.fileData.indexOf(";"));
            _this.fileRead.fileData = _this.fileRead.fileData.substring(_this.fileRead.fileData.indexOf("base64,") + 7);
            _this.fileLoadingTextOut = 'το αρχείο είναι έτοιμο για ανέβασμα';
        };
        this.fileLoadingTextOut = '...loading';
        reader.readAsDataURL(this.file);
    };
    TransportOrderComponent.prototype.openFile = function (guid) {
        this.ds.getFileRepositoryByGUID(guid)
            .then(function (rec) {
            var mediaType = __WEBPACK_IMPORTED_MODULE_5__helpers_index__["a" /* FileHelper */].getContentType(rec.FileName);
            //console.log(rec.FileData);                
            var fileName = rec.FileName;
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            byteString = atob(rec.FileContent);
            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ia], { type: mediaType });
            __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](blob, fileName);
        }, function (rejected) {
            console.log(rejected);
        });
    };
    TransportOrderComponent.prototype.save = function () {
        var _this = this;
        var hasErrors = false;
        this.errorString = '';
        if (!this.fileLoadingTextOut) {
            hasErrors = true;
            this.notify.error("Πρέπει να δώσετε Αρχείο Αίτησης");
            this.errorString = this.errorString.concat("Πρέπει να δώσετε Αρχείο Αίτησης. ");
        }
        if ((this.data.NoOfPassages < 1) || (this.data.NoOfPassages > 50)) {
            hasErrors = true;
            this.notify.error("Πρέπει το Πλήθος Διελεύσεων να είναι απο 1 έως 50");
            this.errorString = this.errorString.concat("Πρέπει το Πλήθος Διελεύσεων να είναι απο 1 έως 50. ");
        }
        if (hasErrors) {
            return;
        }
        this.ds.addNewTransportOrder(this.data, this.fileRead)
            .then(function (success) {
            _this.notify.success("Η Εντολή Αποθηκεύτηκε");
            _this.datastate = Datastates.View;
            _this.loading = false;
            _this.router.navigate(['/listofapplications']);
        }, function (error) {
            _this.loading = false;
            _this.notify.error(error);
        });
    };
    return TransportOrderComponent;
}());
TransportOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(595)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* DataService */]) === "function" && _d || Object])
], TransportOrderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=transport-order.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_script_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportOrdersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Filters = (function () {
    function Filters() {
    }
    return Filters;
}());
var TransportOrdersListComponent = (function () {
    function TransportOrdersListComponent(router, notify, ds, busyService, scriptService) {
        this.router = router;
        this.notify = notify;
        this.ds = ds;
        this.busyService = busyService;
        this.scriptService = scriptService;
        this._selectFromList = "<Επιλέξτε απο την λίστα>";
        this.filters = new Filters();
    }
    TransportOrdersListComponent.prototype.ngOnInit = function () {
        this.totalRecords = 0;
        this.getLookups();
    };
    TransportOrdersListComponent.prototype.onSelect = function (id) {
        this.router.navigate(['/application', id]);
    };
    TransportOrdersListComponent.prototype.lazyLoad = function (event) {
        var _this = this;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        /*
        this.ds.getTransportOrdersView(event.first, event.rows)
            .then(v => {
                this.totalRecords = this.ds.transportOrdersViewCount;
                this.data = v
            });
        */
        /*
        this.ds.getTransportOrdersView(this.firstRecord, this.rowsPerPage)
        .then(v => {
           this.totalRecords = this.ds.transportOrdersViewCount;
           this.data = v
        });
        */
        this.ds.getTransportOrdersViewFiltered(this.firstRecord, this.rowsPerPage, this.filters.TransporterIID, this.filters.MaterialIID, this.filters.StatusId, this.filters.TransportOrderCodeId)
            .then(function (v) {
            _this.totalRecords = _this.ds.transportOrdersViewCount;
            _this.data = v;
        });
    };
    TransportOrdersListComponent.prototype.applyFilters = function () {
        this.lazyLoad(null);
    };
    TransportOrdersListComponent.prototype.clearFilters = function () {
        this.filters = new Filters();
        this.applyFilters();
    };
    TransportOrdersListComponent.prototype.getLookups = function () {
        var _this = this;
        this.ds.getMaterials()
            .then(function (v) { return _this.materials = v.map(function (v) { return ({ label: v.Name, value: v.NID }); }); });
        this.ds.getTransporters()
            .then(function (v) { return _this.transporters = v.map(function (v) { return ({ label: v.Name, value: v.IID }); }); });
        this.ds.getStatuses()
            .then(function (v) { return _this.statuses = v.map(function (v) { return ({ label: v.Name, value: v.Id }); }); });
    };
    TransportOrdersListComponent.prototype.getAllTransportOrdersView = function () {
        // fetch all
        return this.ds.getTransportOrdersViewFiltered(0, 1000, this.filters.TransporterIID, this.filters.MaterialIID, this.filters.StatusId, this.filters.TransportOrderCodeId);
    };
    TransportOrdersListComponent.prototype.exportToPdf = function () {
        var _this = this;
        this.scriptService.load('pdfmake').then(function (data) {
            console.log('script loaded ', data);
            _this.scriptService.load('vfs_fonts').then(function (data) {
                console.log('script loaded ', data);
                // fetch all
                _this.getAllTransportOrdersView().then(function (v) {
                    // build csv
                    _this.busyService.busy(_this.buildPdf(v));
                });
            });
        }).catch(function (error) { return console.log(error); });
    };
    TransportOrdersListComponent.prototype.buildPdf = function (data) {
        // prepare the document definition using declarative approach
        var docDefinition = {
            // a string or { width: number, height: number }
            pageSize: 'A4',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation: 'landscape',
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins: [40, 60, 40, 50],
            //header: { text: 'Χ.Υ.Τ.Α. Μαυροράχης - Φο.Δ.Σ.Α. Κεντρικής Μακεδονίας', style: 'pageHeader', margin: [40, 20, 40, 20] },
            header: {
                columns: [
                    {
                        text: 'Χ.Υ.Τ.Α. Μαυροράχης - Φο.Δ.Σ.Α. Κεντρικής Μακεδονίας'
                    },
                    {
                        text: 'Δήμος ',
                        alignment: 'right'
                    }
                ],
                style: 'pageHeader',
                margin: [40, 20, 40, 20]
            },
            footer: function (currentPage, pageCount) {
                return {
                    text: 'Σελίδα ' + currentPage.toString() + ' από ' + pageCount.toString() + ' ', alignment: 'right', style: 'pageFooter',
                    margin: [40, 0, 40, 0]
                };
            },
            content: [
                {
                    text: 'Εντολές Μεταφοράς', style: 'title', alignment: 'center', margin: [0, 0, 0, 10]
                },
                {
                    style: 'mainTable',
                    table: {
                        widths: [60, 75, 130, 140, 80, 105, 100],
                        body: [
                            [{ text: 'Αριθμός Εντολής', style: 'tableHeader', alignment: 'center' },
                                { text: 'Ημερομηνία', style: 'tableHeader', alignment: 'center' },
                                { text: 'Υλικό', style: 'tableHeader' },
                                { text: 'Μεταφορέας', style: 'tableHeader' },
                                { text: 'Αιτούμενες Διελεύσεις', style: 'tableHeader', alignment: 'center' },
                                { text: 'Πραγματοποιημένες Διελεύσεις', style: 'tableHeader', alignment: 'center' },
                                { text: 'Κατάσταση Εκτέλεσης', style: 'tableHeader', alignment: 'center' }
                            ]
                        ]
                    }
                }
            ],
            styles: {
                pageHeader: {
                    bold: false,
                    color: '#000080',
                    fontSize: 8
                },
                pageFooter: {
                    bold: false,
                    color: '#000080',
                    fontSize: 8
                },
                title: {
                    bold: true,
                    color: '#000080',
                    fontSize: 14
                },
                tableHeader: {
                    bold: true,
                    color: '#000',
                    fontSize: 11
                },
                mainTable: {
                    color: '#000',
                    fontSize: 10
                }
            }
        };
        docDefinition.header.columns[1].text = 'Δήμος: ' + this.ds.customerName;
        var arrayLength = data.length;
        for (var i = 0; i < arrayLength; i++) {
            var item = data[i];
            var dt = new Date(item.IssueDate);
            var dtStr = dt.toLocaleDateString('el-GR'); //+ " " + dt.toLocaleTimeString('el-GR', { hour12: false, hour: 'numeric', minute: 'numeric' });
            docDefinition.content[1].table.body.push([
                { text: item.TransOrderId, style: '', alignment: 'center' },
                { text: dtStr, style: '', alignment: 'center' },
                { text: item.MaterialName.toString(), style: '' },
                { text: item.TransporterName.toString(), style: '' },
                { text: this.numberToString(item.NoOfPassages), style: '', alignment: 'center' },
                { text: this.numberToString(item.NoOfPassagesRecorded), style: '', alignment: 'center' },
                { text: item.StatusName, style: '', alignment: 'center' } // Κατάσταση Εκτέλεσης
            ]);
        }
        pdfMake.createPdf(docDefinition).download();
        return Promise.resolve(true);
    };
    TransportOrdersListComponent.prototype.numberToString = function (i) {
        if ((i) && (i != null)) {
            return i.toString();
        }
        else {
            return '0';
        }
    };
    TransportOrdersListComponent.prototype.exportToCsv = function () {
        var _this = this;
        // fetch all
        this.getAllTransportOrdersView().then(function (v) {
            // build csv
            _this.busyService.busy(_this.buildCsv(v));
        });
    };
    TransportOrdersListComponent.prototype.buildCsv = function (data) {
        var titles = [
            'Αριθμός Εντολής',
            'Ημερομηνία',
            'Μεταφορέας',
            'Υλικό',
            'Αιτούμενες Διελεύσεις',
            'Πραγματοποιημένες Διελεύσεις',
            'Κατάσταση Εκτέλεσης'
        ];
        // build csv
        //console.log(data);
        var csv = titles.join(';');
        csv += "\n";
        var arrayLength = data.length;
        for (var i = 0; i < arrayLength; i++) {
            var item = data[i];
            var dt = new Date(item.IssueDate);
            var cells = [
                item.TransOrderId,
                dt.toLocaleDateString('el-GR')
                    + " " + dt.toLocaleTimeString('el-GR', { hour12: false, hour: 'numeric', minute: 'numeric' }),
                item.TransporterName.toString(),
                item.MaterialName.toString(),
                this.numberToString(item.NoOfPassages),
                this.numberToString(item.NoOfPassagesRecorded),
                item.StatusName // Κατάσταση Εκτέλεσης
            ];
            csv += cells.join(';');
            csv += "\n";
        }
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + '\uFEFF' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Εντολές Μεταφοράς.csv';
        hiddenElement.click();
        return Promise.resolve(true);
    };
    return TransportOrdersListComponent;
}());
TransportOrdersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(596),
        styles: [__webpack_require__(514)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* NotifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* BusyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* BusyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_script_service__["a" /* ScriptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_script_service__["a" /* ScriptService */]) === "function" && _e || Object])
], TransportOrdersListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=transport-orders-list.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityBase; });
var EntityBase = (function () {
    function EntityBase() {
    }
    Object.defineProperty(EntityBase.prototype, "$typeName", {
        get: function () {
            if (!this.entityAspect)
                return '';
            return this.entityAspect.getKey().entityType.shortName;
        },
        enumerable: true,
        configurable: true
    });
    return EntityBase;
}());

//# sourceMappingURL=entity-base.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)();
// imports


// module
exports.push([module.i, "div {\r\n  color : black;\r\n  opacity: 0.95;  \r\n}\r\n\r\n\r\n.coloredheader {\r\n  background-color: limegreen;\r\n  opacity: 0.90;  \r\n}\r\n\r\n\r\n.vertical-align {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n.header h3 {\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n.footer {\r\n  background-color: limegreen;\r\n  color: white;  \r\n}\r\n.footer a {\r\n  color: white;\r\n}\r\n\r\n/* ************* Navigation Bar Default ******************** */\r\n.navbar {\r\n  border-radius: 0px;\r\n}\r\n.navbar-default {\r\n  background-color: limegreen;\r\n  border-color: green;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #0d311e;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #0d311e;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #0d311e;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #ffffff;\r\n  background-color: limegreen;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #ffffff;\r\n  background-color: limegreen;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: limegreen;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: limegreen;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #0d311e;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #0d311e;\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #0d311e;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #0d311e;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffff;\r\n    background-color: limegreen;\r\n  }\r\n}\r\n/* ****************** Nav Bar end ************************* */\r\n\r\n\r\n/* -------------- SPINNER SPINNER SPINNER ---------------------- */\r\n\r\n\r\n.spinner {\r\n  z-index:9999;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  height:140px;\r\n  width:140px;\r\n  margin:0px auto;\r\n  animation: rotation .6s infinite linear;\r\n  border-left:16px solid rgba(0,174,239,.15);\r\n  border-right:16px solid rgba(0,174,239,.15);\r\n  border-bottom:16px solid rgba(0,174,239,.15);\r\n  border-top:16px solid rgba(0,174,239,.8);\r\n  border-radius:100%;\r\n}\r\n@keyframes rotation {\r\n  from {transform: rotate(0deg);}\r\n  to {transform: rotate(359deg);}\r\n}\r\n\r\n/* -------------- SPINNER SPINNER SPINNER ---------------------- */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)();
// imports


// module
exports.push([module.i, "#datatable {\r\n    padding: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(72)();
// imports


// module
exports.push([module.i, "\r\n.aquastyle { color:white !important; background-color:#9CD7F7 !important; } \r\n\r\n#filters {\r\n    border-radius: 3px;    \r\n    padding: 1em;    \r\n    margin-top: 0.3em; \r\n    border-style: solid;    \r\n    border-color: darkgray;\r\n    border-width: 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__data_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__data_service__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busy_service__ = __webpack_require__(156);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__busy_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_service__ = __webpack_require__(350);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__notify_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_service__ = __webpack_require__(157);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__script_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Αλλαγή Κωδικού Πρόσβασης</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !oldpassword.valid }\">\r\n            <label for=\"oldpassword\">Ισχύων Κωδικός</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"oldpassword\" [(ngModel)]=\"model.oldpassword\" #oldpassword=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !oldpassword.valid\" class=\"help-block\">Ο ισχύων κωδικός είναι υποχρεωτικός</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !newpassword.valid }\">\r\n            <label for=\"newpassword\">Νέος Κωδικός Πρόσβασης</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"newpassword\" [(ngModel)]=\"model.newpassword\" #newpassword=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !newpassword.valid\" class=\"help-block\">Ο νέος κωδικός πρόσβασης είναι υποχρεωτικός</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n            <label for=\"confirmpassword\">Επιβεβαίωση Νέου Κωδικού Πρόσβασης</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Η επιβεβαίωση του νέου κωδικού πρόσβασης είναι υποχρεωτική</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Αποθήκευση</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Άκυρο</a>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\r\n    <div class=\"col-md-6\">\r\n        <h2>Ξεχάσατε τον κωδικό πρόσβασης σας;</h2>\r\n        <p>\r\n        Εισάγετε την διεύθυνση του ηλεκτρονικού ταχυδρομείου (email) σας και θα σας στείλουμε ένα ηλεκτρονικό μήνυμα εισόδου στην εφαρμογή.\r\n        </p>\r\n        <br>\r\n        <br>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                <label for=\"email\">Διεύθυνση ηλεκτρονικού ταχυδρομείου (email)</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Η διεύθυνση ηλκτρονικού ταχυδρομείου είναι υποχρεωτική</div>\r\n            </div>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\"> &nbsp;  OK &nbsp;</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Άκυρο</a>\r\n            </div>            \r\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\r\n<div class=\"col-xs-10 col-sm-8 col-md-6 col-xs-offset-0 \">\r\n    \r\n    <div class=\"row\" style=\"display: flex; flex-direction: row;\">\r\n        <div class=\"col-xs-8\">\r\n          <h2>Είσοδος</h2>\r\n        </div>\r\n        <div class=\"col-xs-4\" style=\"align-self: flex-end; text-align: right; margin-bottom: 10px;\">\r\n            <a class=\"fa fa-question-circle-o\" [routerLink]=\"['/loginhelp']\"> Βοήθεια</a>           \r\n        </div>\r\n    </div>\r\n    \r\n    \r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Όνομα Χρήστη</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Το όνομα χρήστη είναι υποχρεωτικό</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Κωδικός Πρόσβασης</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ο κωδικός πρόσβασης είναι υποχρεωτικός</div>\r\n            <div class=\"text-right\"><a [routerLink]=\"['/forgotpassword']\" class=\"btn btn-link\">Ξέχασα τον κωδικό μου!</a>\r\n            </div>\r\n\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Είσοδος</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Εγγραφή νέου χρήστη</a>\r\n            \r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n    <br>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Οδηγίες εισόδου στο σύστημα</h2>\r\n    <h3>Εάν δεν έχετε λογαριασμό στο σύστημα</h3>\r\n    <p>\r\n        Πατήστε το σύνδεσμο <a [routerLink]=\"['/register']\">\"Εγγραφή νέου χρήστη\"</a>.\r\n    </p>\r\n    <h3>Εάν έχετε λογαριασμό και ξεχάσατε τα στοιχεία του</h3>\r\n    <p>\r\n        Πατήστε το σύνδεσμο <a [routerLink]=\"['/forgotpassword']\">\"Ξέχασα τον κωδικό μου!\"</a>.<br />\r\n        Το σύστημα θα σας ζητήσει το e-mail σας και θα σας στείλει \r\n        ένα ηλεκτρονικό μήνυμα για να κάνετε εισαγωγή στο σύστημα.\r\n    </p>\r\n    <br />\r\n    <br />\r\n    <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Επιστροφή</a>\r\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Εγγραφή Νέου Χρήστη</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n        <!-- Όνομα -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !personName.valid }\">\r\n            <label for=\"personName\">Όνομα</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"personName\" [(ngModel)]=\"model.PersonName\" #personName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !personName.valid\" class=\"help-block\">Το όνομα είναι υποχρεωτικό</div>\r\n        </div>\r\n\r\n        <!-- Επώνυμο -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !personSurname.valid }\">\r\n            <label for=\"personName\">Επώνυμο</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"personSurname\" [(ngModel)]=\"model.PersonSurname\" #personSurname=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !personSurname.valid\" class=\"help-block\">Το επώνυμο είναι υποχρεωτικό</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !companyName.valid }\">\r\n            <label for=\"companyName\">Όνομα Δήμου</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"companyName\" [(ngModel)]=\"model.CompanyName\" #companyName=\"ngModel\"/>\r\n        </div>\r\n        <!-- Position of Responsible Person -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !positionOfResponsiblePerson.valid }\">\r\n            <label for=\"positionOfResponsiblePerson\">Θέση στον δήμο</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"positionOfResponsiblePerson\" [(ngModel)]=\"model.CompanyPosition\" #positionOfResponsiblePerson=\"ngModel\"/>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !address.valid }\">\r\n            <label for=\"address\">Διεύθυνση</label>\r\n            <textarea class=\"form-control\" rows=\"3\" name=\"address\" [(ngModel)]=\"model.Address\" #address=\"ngModel\"></textarea>\r\n        </div>\r\n        \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !telephoneNumber.valid }\">\r\n            <label for=\"telephoneNumber\">Αριθμός Τηλεφώνου</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"telephoneNumber\" [(ngModel)]=\"model.TelephoneNumber\" #telephoneNumber=\"ngModel\"/>\r\n        </div>        \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !eMail.valid }\">\r\n            <label for=\"username\">Διεύθυνση ηλεκτρονικού ταχυδρομείου (Email)</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"eMail\" [(ngModel)]=\"model.Email\" #eMail=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !eMail.valid\" class=\"help-block\">Η διεύθυνση ηλεκτρονικού ταχυδρομείου είναι υποχρεωτική</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Όνομα Χρήστη</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.UserName\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Το όνομα χρήστη είναι υποχρεωτικό</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Κωδικός Πρόσβασης</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.Password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ο κωδικός πρόσβασης είναι υποχρεωτικός</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n            <label for=\"password\">Επαλήθευση Κωδικού Πρόσβασης</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.ConfirmPassword\" #confirmPassword=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Η επιβεβαίωση του κωδικού πρόσβασης είναι υποχρεωτική</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Εγγραφή</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Ακύρωση</a>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\r\n    <div class=\"col-md-6\">\r\n        <h2>Επαναφορά Κωδικού Πρόσβασης</h2>\r\n        <br>\r\n        <br>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !newPassword.valid }\">\r\n                <label for=\"newPassword\">Κωδικός Πρόσβασης</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" #newPassword=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !newPassword.valid\" class=\"help-block\">Ο κωδικός είναι υποχρεωτικός</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n                <label for=\"confirmPassword\">Επιβεβαίωση Κωδικού</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Η επιβεβαίωση του κωδικού είναι υποχρεωτική</div>\r\n            </div>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\"> &nbsp; Αποθήκευση &nbsp;</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Ακύρωση</a>\r\n            </div>            \r\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n        </form>\r\n    </div>    \r\n</div>\r\n\r\n"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<style> \n.flex-container {\n    display: -webkit-flex;\n    display: flex;\n}\n\n.flex-item {\n    margin: 4px;\n}\n.rotate{\n    animation: fa-spin 2s infinite linear\n}\n</style>\n\n<!-- Top Line: Programme Name & Login User -->\n<div class=\"header\" [ngClass]=\"{coloredheader: !authService.isAuthenticated}\" >\n\n\n<div class=\"container\">\n  <div class=\"row vertical-align\">\n    <div class=\"col-xs-6  flex-container\">\n      <div class=\"flex-item\">\n        <h3>\n          <i class=\"fa fa-truck\" [ngClass]=\"busyService.isBusy?'rotate':''\" aria-hidden=\"true\" ></i>          \n          <!--\n          <i *ngIf=\"!busyService.isBusy\" class=\"fa fa-question-circle\" aria-hidden=\"true\" ></i>\n          <img *ngIf=\"busyService.isBusy\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          -->\n           &nbsp;{{ title }}     \n        </h3>        \n      </div>\n    </div>  \n    <div *ngIf=\"!authService.isAuthenticated\" class=\"col-xs-6 text-right\">  \n      \n      <strong>Χ.Υ.Τ.Α. Μαυροράχης</strong><br>    \n      Φο.Δ.Σ.Α. Κεντρικής Μακεδονίας\n    </div>\n    <div *ngIf=\"authService.isAuthenticated\" class=\"col-xs-3 flex-container\">\n      <div class=\"flex-item\">      \n        <strong>Χ.Υ.Τ.Α. Μαυροράχης</strong><br>    \n        Φο.Δ.Σ.Α. Κεντρικής Μακεδονίας\n      </div>\n    </div>\n    <div class=\"col-xs-3 text-right\"  [hidden]=\"!authService.isAuthenticated\">\n      <div>\n        {{authService.userName}}&nbsp;\n        <i class=\"fa fa-user\" aria-hidden=\"true\" ></i>\n      </div> \n      <div> \n        <a [routerLink]=\"['/changepassword']\">Αλλαγή Κωδικού</a> | \n        <a [routerLink]=\"['/login']\">Αποσύνδεση</a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<!-- Menu Line -->\n<nav class=\"navbar navbar-default\" [hidden]=\"!authService.isAuthenticated\">\n<div class=\"container\">  \n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a [routerLink]=\"['/']\">Αρχική Σελίδα</a></li>\n\n      <li class=\"nav-item\"><a [routerLink]=\"['/listofapplications']\" *ngIf=\"ds.userIsCustomer\">Κατάλογος</a></li>\n      <li class=\"nav-item\"><a [routerLink]=\"['/application/0']\" *ngIf=\"ds.userIsCustomer\">Υποβολή</a></li>\n\n      <li class=\"nav-item\"><a [routerLink]=\"['/userinfo']\" *ngIf=\"ds.userIsCustomer\">Στοιχεία Χρήστη</a></li>\n      <li class=\"nav-item\"><a [routerLink]=\"['/faq']\">Συχνές Ερωτήσεις</a></li>\n      <li class=\"nav-item\"><a [routerLink]=\"['/guidelines']\">Οδηγίες</a></li>\n    </ul>\n</div>  \n</nav>\n\n<div [ngClass]=\"busyService.isBusy?'spinner':''\"></div>\n<!-- Main Space -->\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n<!-- Footer Bottom Line -->\n\n<footer class=\"footer\">\n<div class=\"container\">                    \n            <div class=\"col-md-5 \"><a href=\"https://fodsakm.gr/site/\">Φο.Δ.Σ.Α. Κεντρικής Μακεδονίας</a></div>          \n            <div class=\"col-md-7 text-right\">Created by <a href=\"http://www.motion.gr\">Motion Hellas Ltd.</a> &copy; 2018 ({{ version }})</div>          \n</div>          \n</footer>\n"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"jumbotron\">\r\n        <h2><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Αρχική Σελίδα</h2>\r\n        <h3>Καλωσήρθατε χρήστη: <span class=\"text-primary\">{{userName}}</span></h3>\r\n        <div *ngIf=\"!ds.userIsCustomer && dataLoaded\">\r\n            <h3 class=\"text-danger\">Δεν είστε δηλωμένος σε κάποιο Δήμο.</h3>\r\n            <p  class=\"text-danger\">Επικοινωνήστε με την υπηρεσία για να σας δηλώσουν.</p>\r\n        </div>\r\n        <div *ngIf=\"ds.userIsCustomer && dataLoaded\">\r\n            <h3>Είσαστε δηλωμένος στον δήμο: <span class=\"text-primary\">{{ds.customerName}}</span></h3>\r\n            <br />\r\n            <p>\r\n                Μπορείτε να υποβάλετε μία νέα αίτηση Εντολής Μεταφοράς πατώντας το σύνδεσμο: <a [routerLink]=\"['/application',0]\">Υποβολή</a>.\r\n            </p>\r\n            <p>\r\n                Μπορείτε να δείτε τις Εντολές Μεταφοράς που έχετε υποβάλει πατώντας το σύνδεσμο: <a [routerLink]=\"['/listofapplications']\">Κατάλογος</a>.\r\n            </p>\r\n        </div>        \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> {{title}}</h2>\r\n</div>\r\n\r\n<!-- ΕΝΤΟΛΗ ΜΕΤΑΦΟΡΑΣ -->\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">Εντολή Μεταφοράς</div>\r\n  <div class=\"panel-body\">\r\n  <!-- Αρ. Εντολής -->\r\n  <div class=\"form-group row\">\r\n\r\n        <label class=\"col-sm-2 col-form-label text-right\">Αριθμός Εντολής</label>\r\n        <div class=\"col-sm-3\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"transpOrder.TransOrderId\"/>\r\n        </div>\r\n        \r\n        <label class=\"col-sm-2 col-form-label text-right\">Μεταφορέας</label>\r\n        <div class=\"col-sm-5\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"transpOrder.TransporterName\"/>\r\n        </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label text-right\">Αιτούμενες Διελεύσεις</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"transpOrder.NoOfPassages\"/>\r\n                </div>\r\n                \r\n                <label class=\"col-sm-2 col-form-label text-right\">Υλικό</label>\r\n                <div class=\"col-sm-5\">\r\n                    <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"transpOrder.MaterialName\"/>\r\n                </div>\r\n  </div>\r\n  </div>      \r\n</div>\r\n\r\n<!-- ΔΙΕΛΕΥΣΕΙΣ -->\r\n<!-- Data Grid -->\r\n<div class=\"panel panel-default\">\r\n<div class=\"panel-heading\">{{title}}</div>\r\n\r\n\r\n<p-dataTable id=\"datatable\" [value]=\"data\" class=\"panel-body\"\r\n        \r\n                >\r\n        <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr>\r\n                <td [attr.colspan]=\"6\">\r\n                Δεν υπάρχουν στοιχεία.\r\n                </td>\r\n        </tr>\r\n        </ng-template>\r\n        <p-column field=\"IID\" header=\"Κωδικός Ζύγισης\" [style]=\"{'width':'10%', 'color':'#101010', 'text-align':'center'}\" >\r\n        </p-column>    \r\n        <p-column field=\"cVehPlateNo\" header=\"Πινακίδα Οχήματος\" [style]=\"{'width':'10%', 'color':'#101010', 'text-align':'center'}\" >\r\n        </p-column>    \r\n        <p-column field=\"DateIn\" header=\"Ημερομηνία\" [style]=\"{'width':'10%', 'color':'#101010', 'text-align':'center'}\" >\r\n            <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                <div  class=\"text-center\">\r\n                    {{item[col.field] | date: 'dd/MM/yyyy'}}\r\n                </div>\r\n            </ng-template>\r\n        </p-column>    \r\n        <p-column field=\"NetWeight\" header=\"Καθαρό Βάρος (Kg)\" [style]=\"{'width':'10%', 'color':'#101010', 'text-align':'center'}\" >\r\n        </p-column>    \r\n</p-dataTable>         \r\n</div>\r\n\r\n<!-- Buttons -->\r\n<div class=\"form-group\" style=\"padding-top: 15px;\">        \r\n    <button class=\"btn btn-primary\" (click)=\"goBack();\">\r\n        Επιστροφή\r\n    </button>        \r\n</div>\r\n"

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> {{title}}</h2>\r\n</div>\r\n\r\n<!-- Φόρμα Συμπλήρωσης Στοιχείων (Νέα Εντολή) -->\r\n<form *ngIf=\"datastate == Datastates.Insert\"  name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>   \r\n\r\n        <!-- Transporter -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !transporter.valid }\">\r\n                <label for=\"transporter\">Μεταφορέας</label>\r\n                \r\n                <p-dropdown name=\"transporter\" \r\n                            [options]=\"transporters\" \r\n                            [(ngModel)]=\"data.TransporterIID\"\r\n                            #transporter=\"ngModel\" \r\n                            placeholder={{_selectFromList}}\r\n                            required                         \r\n                            [style]=\"{'width':'100%'}\">\r\n                </p-dropdown>        \r\n                \r\n                <div *ngIf=\"f.submitted && !transporter.valid\" class=\"help-block\">\r\n                    Πρέπει να δηλώσετε Μεταφορέα.\r\n                </div>\r\n        </div>\r\n    \r\n        <!-- Material -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !material.valid }\">\r\n                <label for=\"material\">Υλικό</label>\r\n                \r\n                <p-dropdown name=\"material\" \r\n                            [options]=\"materials\" \r\n                            [(ngModel)]=\"data.MaterialIID\"\r\n                            #material=\"ngModel\" \r\n                            placeholder={{_selectFromList}}\r\n                            required                         \r\n                            [style]=\"{'width':'100%'}\">\r\n                </p-dropdown>        \r\n                \r\n                <div *ngIf=\"f.submitted && !material.valid\" class=\"help-block\">\r\n                    Πρέπει να δηλώσετε Υλικό.\r\n                </div>\r\n            </div>\r\n\r\n        <!-- Quantity -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !noOfPassages.valid }\">\r\n                <label for=\"noOfPassages\">Πλήθος διελεύσεων</label>\r\n                <input type=\"number\" class=\"form-control\" name=\"noOfPassages\" \r\n                       [(ngModel)]=\"data.NoOfPassages\" #noOfPassages=\"ngModel\" \r\n                       required min=\"1\" max=\"50\"/>\r\n                <div *ngIf=\"f.submitted && !noOfPassages.valid\" class=\"help-block\">\r\n                     Πρέπει να δηλώσετε πλήθος διελεύσεων απο 1 έως 50.\r\n                </div>\r\n        </div>            \r\n\r\n        <!-- FILES -->\r\n        <div class=\"form-group\">\r\n                <label for=\"files\">Αρχείο Αίτησης σε pdf με ψηφιακή υπογραφή</label>\r\n                <input type=\"file\" id=\"files\" name='files[]' (change)=\"onFileAttach($event)\"/>            \r\n                {{fileLoadingTextOut}}\r\n        </div>\r\n\r\n    <!-- Buttons -->\r\n    <div *ngIf=\"f.submitted && !f.form.valid\" class=\"alert alert-danger\">\r\n        Υπάρχουν λάθη στα πεδία της φόρμας.\r\n    </div>\r\n    <div class=\"form-group\" style=\"padding-top: 15px;\">\r\n        <button [disabled]=\"loading || (fileIsLoading)\" class=\"btn btn-primary\">\r\n            &nbsp;Αποθήκευση και Αποστολή&nbsp;\r\n        </button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/listofapplications']\" class=\"btn btn-danger\">\r\n            Άκυρο\r\n        </a>\r\n        \r\n    </div>\r\n    <div *ngIf=\"errorString\" class=\"alert alert-danger\">{{errorString}}</div>    \r\n    {{errorString}}\r\n</form>\r\n\r\n<!--  Φόρμα Εμφάνισης Στοιχείων -->\r\n<div *ngIf=\"datastate == Datastates.View\" style=\"padding-top: 15px;\">   \r\n\r\n    <!-- Αρ. Εντολής -->\r\n    <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label text-right\">Αριθμός Εντολής</label>\r\n                <div class=\"col-sm-4\">\r\n                    <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.TransOrderId\"/>\r\n                </div>\r\n                \r\n                <label class=\"col-sm-2 col-form-label text-right\">Έτος</label>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.Year\"/>\r\n                </div>\r\n    </div>\r\n\r\n    <!-- Ημερομηνία Αίτησης -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Ημερομηνία Αίτησης</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.IssueDate |  date: 'dd/MM/yyyy'\" style=\"width: 100%\"/>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Transporter -->\r\n    <div class=\"form-group row\">\r\n        <label for=\"transporter\" class=\"col-sm-3 col-form-label text-right\">Μεταφορέας</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.TransporterName\"/>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Material -->\r\n    <div class=\"form-group row\">\r\n            <label for=\"material\" class=\"col-sm-3 col-form-label text-right\">Υλικό</label>\r\n            <div class=\"col-sm-9\">              \r\n                <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.MaterialName\"/>\r\n            </div>\r\n        </div>\r\n\r\n    <!-- Quantity -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Αιτούμενο πλήθος διελεύσεων</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"number\" readonly class=\"form-control\" [ngModel]=\"data.NoOfPassages\" />            \r\n        </div>        \r\n    </div>  \r\n\r\n    <!-- Αιτών -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Αιτών</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"number\" readonly class=\"form-control\" [ngModel]=\"data.IssuedByUser\" />            \r\n        </div>        \r\n    </div>  \r\n\r\n    <!-- Αρχείο Αίτησης -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Αρχείο Αίτησης</label>\r\n        <div class=\"col-sm-9\">\r\n            <button class=\"btn btn-primary\" \r\n                    (click)=\"openFile(data.ApplicationForm_FileRepoGUID)\"\r\n            >\r\n                    <i class=\"fa fa-download\" aria-hidden=\"true\"></i>                    \r\n                    &nbsp; Άνοιγμα Αρχείου\r\n            </button>\r\n        </div>        \r\n    </div>  \r\n\r\n    <hr style=\"padding-top: 7px; padding-bottom: 2px;\">\r\n    <!-- Κατάσταση Εντολής -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Κατάσταση Εντολής</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.StatusName\" />            \r\n        </div>        \r\n    </div>  \r\n\r\n    <!-- Αιτία Απόρριψης -->\r\n    <div *ngIf=\"data.ApprovalProcStatus == TransOrdStatuses.Canceled\" class=\"form-group row\">\r\n        <label for=\"transporter\" class=\"col-sm-3 col-form-label text-right\">Αιτία Απόρριψης</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.ReasonForRejection\"/>\r\n        </div>        \r\n    </div>\r\n\r\n    <!-- Ημερομηνία Έγκρισης -->\r\n    <div class=\"form-group row\">\r\n        <label for=\"transporter\" class=\"col-sm-3 col-form-label text-right\">Ημερομηνία Έγκρισης</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.ApprovedDate |  date: 'dd/MM/yyyy'\"/>\r\n        </div>        \r\n    </div>\r\n\r\n    <!-- Αιτία Ακύρωσης -->\r\n    <div *ngIf=\"data.Canceled\" class=\"form-group row\">\r\n        <label for=\"transporter\" class=\"col-sm-3 col-form-label text-right\">Αιτία Ακύρωσης</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"text\" readonly class=\"form-control\" [ngModel]=\"data.ReasonCanceled\"/>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- NoOfPassagesRecorded -->\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label text-right\">Πλήθος εκτελεσμένων διελεύσεων</label>\r\n        <div class=\"col-sm-9\">\r\n            <input type=\"number\" readonly class=\"form-control\" [ngModel]=\"0+data.NoOfPassagesRecorded\" />            \r\n        </div>\r\n    </div>  \r\n\r\n\r\n\r\n\r\n    <!-- Buttons -->\r\n    <div class=\"form-group\" style=\"padding-top: 15px;\">\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/listofapplications']\" class=\"btn btn-primary\">\r\n            Επιστροφή\r\n        </a>\r\n        \r\n    </div>\r\n        \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> Εντολές Μεταφοράς που έχουν καταχωρηθεί</h2>\r\n</div>\r\n\r\n<!-- FILTERS -->\r\n<div style=\"padding-top:1em;padding-bottom:0.7em;\">\r\n    <button class=\"btn btn-default btn-sm active\" type=\"button\"\r\n     data-toggle=\"collapse\" data-target=\"#filters\" aria-expanded=\"false\" aria-controls=\"filters\">\r\n        <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Φίλτρα\r\n    </button>  \r\n    <div class=\"collapse\" id=\"filters\">\r\n        <div  class=\"row\">\r\n        <!-- Transporter -->\r\n        <div class=\"form-group col-sm-3 \">\r\n                <label for=\"transporter\">Μεταφορέας</label>\r\n                \r\n                <p-dropdown name=\"transporter\" \r\n                            [editable]=\"true\"\r\n                            [options]=\"transporters\" \r\n                            [(ngModel)]=\"filters.TransporterIID\"\r\n                            #transporter=\"ngModel\" \r\n                            placeholder={{_selectFromList}}                            \r\n                            [style]=\"{'width':'100%'}\">\r\n                </p-dropdown>        \r\n        </div>\r\n    \r\n        <!-- Material -->\r\n        <div class=\"form-group col-sm-3 \">\r\n                <label for=\"material\">Υλικό</label>\r\n                \r\n                <p-dropdown name=\"material\" \r\n                            [editable]=\"true\"\r\n                            [options]=\"materials\" \r\n                            [(ngModel)]=\"filters.MaterialIID\"\r\n                            #material=\"ngModel\" \r\n                            placeholder={{_selectFromList}}                            \r\n                            [style]=\"{'width':'100%'}\">\r\n                </p-dropdown>        \r\n        </div>\r\n        <!-- Status -->\r\n        <div class=\"form-group col-sm-3 \">\r\n            <label for=\"status\">Κατάσταση Εκτέλεσης</label>\r\n            \r\n            <p-dropdown name=\"status\" \r\n                        [editable]=\"true\"\r\n                        [options]=\"statuses\" \r\n                        [(ngModel)]=\"filters.StatusId\"\r\n                        #status=\"ngModel\" \r\n                        placeholder={{_selectFromList}}                        \r\n                        [style]=\"{'width':'100%'}\">\r\n            </p-dropdown>        \r\n        </div>\r\n        <!-- Id -->\r\n        <div class=\"form-group col-sm-3 \">\r\n                <label>Αριθμός Εντολής</label>\r\n                <input type=\"text\" class=\"form-control\" \r\n                 [(ngModel)]=\"filters.TransportOrderCodeId\" />\r\n        </div>\r\n    \r\n    \r\n        </div>\r\n        <button class=\"btn btn-default btn-sm active\" type=\"button\" (click)=\"applyFilters();\">\r\n            <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Εφαρμογή Φίλτρων\r\n        </button>  \r\n        <button class=\"btn btn-default btn-sm active\" type=\"button\" (click)=\"clearFilters();\">\r\n            <i class=\"fa fa-eraser\" aria-hidden=\"true\"></i> Ακύρωση Φίλτρων\r\n        </button>      \r\n    </div>\r\n    \r\n</div>\r\n\r\n<!-- Data Grid -->\r\n<div>\r\n<p-dataTable [value]=\"data\" [rows]=\"10\" [paginator]=\"true\" \r\n             [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30,50,100]\"\r\n             [lazy]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"lazyLoad($event)\"\r\n             [resizableColumns]=\"true\"\r\n             [first]=\"firstRecord\" [rows]=\"rowsPerPage\"\r\n             >\r\n    <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr>\r\n            <td [attr.colspan]=\"6\">\r\n                Δεν υπάρχουν στοιχεία.\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n    <p-column field=\"TransOrderId\" header=\"Αριθμός Εντολής\" [style]=\"{'width':'10%', 'color':'grey'}\" >\r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Αριθμός<br/> Εντολής</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n            <div  class=\"text-center\">\r\n                <a (click)=\"onSelect(item['GUID'])\" style=\"cursor: pointer;\">{{item[col.field]}}</a>\r\n            </div>\r\n        </ng-template>\r\n    </p-column>    \r\n    <p-column field=\"IssueDate\" header=\"Ημερομηνία Καταχώρησης\" [style]=\"{'width':'15%', 'color':'grey'}\">\r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Ημερομηνία<br />Καταχώρησης</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n            <div  class=\"text-center\">\r\n                {{item[col.field] | date: 'dd/MM/yyyy'}}\r\n            </div>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-column field=\"TransporterName\" header=\"Μεταφορέας\" [style]=\"{'width':'20%', 'white-space': 'normal', 'color':'grey'}\">\r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Μεταφορέας</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n            <div  class=\"text-center\">\r\n                {{item[col.field]}}\r\n            </div>\r\n        </ng-template>        \r\n    </p-column>\r\n    <p-column field=\"MaterialName\" header=\"Υλικό\" [style]=\"{'width':'*', 'white-space': 'normal', 'color':'grey'}\">\r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Υλικό</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n            <div  class=\"text-center\">\r\n                {{item[col.field]}}\r\n            </div>\r\n        </ng-template>                \r\n    </p-column>\r\n    <p-column field=\"NoOfPassages\" header=\"Πλήθος Διελεύσεων\" [style]=\"{'width':'10%', 'white-space': 'normal', 'color':'grey'}\">            \r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Πλήθος<br>Διελεύσεων</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">                        \r\n                <div  class=\"text-center\">\r\n                    <a [routerLink]=\"['/applicationgatetrans',item['GUID']]\" style=\"cursor: pointer;\">\r\n                        {{0+item['NoOfPassagesRecorded']}} / {{item['NoOfPassages']}}        \r\n                    </a>    \r\n                </div>\r\n        </ng-template>\r\n    </p-column>   \r\n    <p-column field=\"StatusName\" header=\"Κατάσταση Εκτέλεσης\" [style]=\"{'width':'12%', 'white-space': 'normal', 'color':'grey'}\">\r\n        <ng-template pTemplate=\"header\">                        \r\n            <div  class=\"text-center\">\r\n                <b>Κατάσταση<br>Εκτέλεσης</b>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n            <div  class=\"text-center\">\r\n                {{item[col.field]}}\r\n            </div>\r\n        </ng-template>               \r\n    </p-column>   \r\n</p-dataTable>\r\n</div>\r\n\r\n<!-- EXPORT BUTTONS-->\r\n<div style=\"padding-top:1em;\">\r\n    <button class=\"btn btn-default btn-sm active\" type=\"button\" (click)=\"exportToPdf();\">\r\n        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Εξαγωγή σε Pdf\r\n    </button>  \r\n    <button class=\"btn btn-default btn-sm active\" type=\"button\" (click)=\"exportToCsv();\">\r\n        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Εξαγωγή σε Csv\r\n    </button>      \r\n</div>\r\n"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Στοιχεία Χρήστη</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !personName.valid }\">\r\n            <label for=\"personName\">Όνομα (*)</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"personName\" [(ngModel)]=\"user.PersonName\" #personName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !personName.valid\" class=\"help-block\">Το όνομα είναι υποχρεωτικό</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !personSurname.valid }\">\r\n            <label for=\"personSurname\">Επώνυμο (*)</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"personSurname\" [(ngModel)]=\"user.PersonSurname\" #personSurname=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !personSurname.valid\" class=\"help-block\">Το επώνυμο είναι υποχρεωτικό</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !companyName.valid }\">\r\n            <label for=\"companyName\">Επωνυμία Εταιρίας</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"companyName\" [(ngModel)]=\"user.CompanyName\" #companyName=\"ngModel\" />\r\n        </div>\r\n\r\n        <!-- Position of Responsible Person -->\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !positionOfResponsiblePerson.valid }\">\r\n            <label for=\"positionOfResponsiblePerson\">Θέση στην Εταιρία</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"positionOfResponsiblePerson\" [(ngModel)]=\"user.CompanyPosition\" #positionOfResponsiblePerson=\"ngModel\"/>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !address.valid }\">\r\n            <label for=\"address\">Διεύθυνση</label>\r\n            <textarea class=\"form-control\" rows=\"3\" name=\"address\" [(ngModel)]=\"user.Address\" #address=\"ngModel\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !telephoneNumber.valid }\">\r\n            <label for=\"telephoneNumber\">Αριθμός Τηλεφώνου</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"telephoneNumber\" [(ngModel)]=\"user.TelephoneNumber\" #telephoneNumber=\"ngModel\" />\r\n        </div>        \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !eMail.valid }\">\r\n            <label for=\"username\">Διεύθυνση ηλεκτρονικού ταχυδρομείου (Email) (*)</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"eMail\" [(ngModel)]=\"user.Email\" #eMail=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !eMail.valid\" class=\"help-block\">Η διεύθυνση ηλεκτρονικού ταχυδρομείου είναι υποχρεωτική</div>\r\n        </div>\r\n        <p><strong>(*)</strong> Τα πεδία αυτά είναι υποχρεωτικά<br></p>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Αποθήκευση</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/']\" class=\"btn btn-link\">Άκυρο</a>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* unused harmony export DevServicesBaseUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DevAppConfig; });


var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]("app.config");
// Δεν το χρησιμοποιώ παρά μόνο στο Debug
var DevServicesBaseUrl = "https://www.cms.gr/PublicApi";
if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    // Στοχεύω στον debuger του VS2013
    DevServicesBaseUrl = "http://localhost:34488";
    // Στοχεύω στον ptf-pc IIS
    //DevServicesBaseUrl = "http://www.cms.gr/PublicApi";
}
var DevAppConfig = {
    version: "v 1.0",
    servicesBaseUrl: DevServicesBaseUrl
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(323);


/***/ })

},[878]);
//# sourceMappingURL=main.bundle.js.map
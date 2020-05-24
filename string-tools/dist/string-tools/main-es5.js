function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./command.service */
    "./src/app/command.service.ts");
    /* harmony import */


    var _text_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./text-utils.service */
    "./src/app/text-utils.service.ts");

    var _c0 = ["codePane"];
    var _c1 = ["inputPane"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(commandService, textUtilsService) {
        _classCallCheck(this, AppComponent);

        this.commandService = commandService;
        this.textUtilsService = textUtilsService;
        this.h1 = "string-tools";
        this.outputValue = "";
        this.explain = "";
        this.commandService = commandService;
        this.textUtilsService = textUtilsService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.UpdateExplanation(this.codePaneRef.nativeElement.value, this.inputPaneRef.nativeElement.value);
          this.ProcessClick(this.codePaneRef.nativeElement.value, this.inputPaneRef.nativeElement.value);
        }
      }, {
        key: "UpdateExplanation",
        value: function UpdateExplanation(codeValue, inputValue) {
          var lines = this.commandService.processCommands(codeValue, inputValue, true);
          this.explain = this.textUtilsService.LinesToText(lines);
        }
      }, {
        key: "ProcessClick",
        value: function ProcessClick(codeValue, inputValue) {
          var lines = this.commandService.processCommands(codeValue, inputValue, false);
          this.outputValue = this.textUtilsService.LinesToText(lines);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_command_service__WEBPACK_IMPORTED_MODULE_1__["CommandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codePaneRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputPaneRef = _t.first);
        }
      },
      decls: 17,
      vars: 2,
      consts: [[1, "string-tools"], [1, "string-tools__top_section"], [1, "code-window", 3, "input"], ["codePane", ""], ["readonly", "", 1, "explain-window"], [1, "panes-container"], [1, "pane", "pane--left"], [1, "pane-textarea", 3, "input"], ["inputPane", ""], [1, "pane", "pane--right"], ["outputPane", ""], ["readonly", "", 1, "pane-textarea"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_textarea_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            ctx.UpdateExplanation(_r0.value, _r1.value);
            return ctx.ProcessClick(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "split ,\nat 1, 2\ncsv '\nenclose\nflat\ncsv\nprint INSERT INTO Account (AccountRef, Company) VALUES $0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_textarea_input_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.ProcessClick(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1,W22355,foo\n2,X13989,bar\n3,Y22492,baz\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.explain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.outputValue);
        }
      },
      styles: [".h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.string-tools[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 100rem;\n}\n\n.string-tools__top_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.code-window[_ngcontent-%COMP%], .explain-window[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 0.25rem;\n  box-sizing: border-box;\n  height: 14rem;\n}\n\n.code-window[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.explain-window[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-left: 1rem;\n}\n\n.panes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.pane[_ngcontent-%COMP%] {\n  width: 49.5%;\n  height: 42rem;\n}\n\n.pane--left[_ngcontent-%COMP%] {\n  border: solid 1px green;\n  margin-right: auto;\n}\n\n.pane--right[_ngcontent-%COMP%] {\n  border: solid 1px blue;\n  margin-left: auto;\n}\n\n.pane-textarea[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n  width: 97%;\n  height: 97%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXFVzZXJzXFxlZHdhclxcRGV2XFxzdHJpbmctdG9vbHNcXHN0cmluZy10b29scy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjs7QURFRTs7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREVJO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRElFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc3RyaW5nLXRvb2xzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDByZW07XHJcbiAgICAmX190b3Bfc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29kZS13aW5kb3csXHJcbiAgLmV4cGxhaW4td2luZG93IHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvZGUtd2luZG93IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBsYWluLXdpbmRvdyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhbmVzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLnBhbmUge1xyXG4gICAgd2lkdGg6IDQ5LjUlO1xyXG4gICAgaGVpZ2h0OiA0MnJlbTtcclxuICBcclxuICAgICYtLWxlZnQge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi0tcmlnaHQge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsdWU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYW5lLXRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGhlaWdodDogOTclO1xyXG4gIH0gIiwiLmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RyaW5nLXRvb2xzIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDByZW07XG59XG4uc3RyaW5nLXRvb2xzX190b3Bfc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2RlLXdpbmRvdyxcbi5leHBsYWluLXdpbmRvdyB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDE0cmVtO1xufVxuXG4uY29kZS13aW5kb3cge1xuICB3aWR0aDogNDAlO1xufVxuXG4uZXhwbGFpbi13aW5kb3cge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFuZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnBhbmUge1xuICB3aWR0aDogNDkuNSU7XG4gIGhlaWdodDogNDJyZW07XG59XG4ucGFuZS0tbGVmdCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucGFuZS0tcmlnaHQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibHVlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBhbmUtdGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA5NyU7XG4gIGhlaWdodDogOTclO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [{
          type: _command_service__WEBPACK_IMPORTED_MODULE_1__["CommandService"]
        }, {
          type: _text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]
        }];
      }, {
        codePaneRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["codePane"]
        }],
        inputPaneRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["inputPane"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/command-parsing.service.ts":
  /*!********************************************!*\
    !*** ./src/app/command-parsing.service.ts ***!
    \********************************************/

  /*! exports provided: CommandParsingService */

  /***/
  function srcAppCommandParsingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandParsingService", function () {
      return CommandParsingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _text_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./text-utils.service */
    "./src/app/text-utils.service.ts");
    /* harmony import */


    var _command_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./command-types.service */
    "./src/app/command-types.service.ts");

    var CommandParsingService = /*#__PURE__*/function () {
      function CommandParsingService(textUtilsService, commandTypesService) {
        _classCallCheck(this, CommandParsingService);

        this.textUtilsService = textUtilsService;
        this.commandTypesService = commandTypesService;
        this.textUtilsService = textUtilsService;
        this.commandTypesService = commandTypesService;
      }

      _createClass(CommandParsingService, [{
        key: "ParseCodeLine",
        value: function ParseCodeLine(codeLine) {
          var codeLine = codeLine.trim();

          if (codeLine.length === 0) {
            return undefined;
          } else {
            var codeLineSplit = codeLine.split(/\s+/);
            var commandName = codeLineSplit[0];
            var commandType = this.commandTypesService.FindCommandType(commandName);
            var para = codeLine.replace(commandName, "").trim();
            return {
              commandType: commandType,
              para: para
            };
          }
        }
      }]);

      return CommandParsingService;
    }();

    CommandParsingService.ɵfac = function CommandParsingService_Factory(t) {
      return new (t || CommandParsingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_text_utils_service__WEBPACK_IMPORTED_MODULE_1__["TextUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_command_types_service__WEBPACK_IMPORTED_MODULE_2__["CommandTypesService"]));
    };

    CommandParsingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommandParsingService,
      factory: CommandParsingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandParsingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _text_utils_service__WEBPACK_IMPORTED_MODULE_1__["TextUtilsService"]
        }, {
          type: _command_types_service__WEBPACK_IMPORTED_MODULE_2__["CommandTypesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/command-types.service.ts":
  /*!******************************************!*\
    !*** ./src/app/command-types.service.ts ***!
    \******************************************/

  /*! exports provided: CommandTypesService */

  /***/
  function srcAppCommandTypesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandTypesService", function () {
      return CommandTypesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _text_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./text-utils.service */
    "./src/app/text-utils.service.ts");

    var CommandTypesService = function CommandTypesService(textUtilsService) {
      _classCallCheck(this, CommandTypesService);

      this.textUtilsService = textUtilsService;

      this.FindCommandType = function (name) {
        var i;

        for (i = 0; i < this.CommandTypes.length; i++) {
          if (new RegExp("^" + this.CommandTypes[i].name).test(name)) {
            return this.CommandTypes[i];
          }
        }

        return null;
      };

      this.CommandTypes = [{
        name: "regex",
        desc: "Sets the current regex",
        para: [{
          name: "Regex",
          desc: "String defining the regex"
        }],
        exec: function (value, para, context, explain) {
          context.regex = this.textUtilsService.AsScalar(para);
          context.searchString = null;

          if (explain) {
            return "Set the current regex to " + para;
          } else {
            return value;
          }
        }.bind(this)
      }, {
        name: "searchString|search-string",
        desc: "Sets the current search string",
        para: [{
          name: "Search String",
          desc: "The search string to set"
        }],
        exec: function (value, para, context, explain) {
          context.searchString = this.textUtilsService.AsScalar(para);
          context.regex = null;

          if (explain) {
            return "Set the current search string to " + para;
          } else {
            return value;
          }
        }.bind(this)
      }, {
        name: "split",
        desc: "Splits up the line of text.",
        para: [{
          name: "Separator",
          desc: "The string upon which to split."
        }],
        exec: function (value, para, context, explain) {
          value = this.textUtilsService.AsScalar(value);
          var i;

          if (!para && context.regex) {
            if (explain) {
              return "Split the line using the regex " + context.regex;
            } else {
              return value.split(new RegExp(context.regex));
            }
          } else if (!para && context.searchString) {
            if (explain) {
              return "Split the line on '" + context.searchString + "'";
            } else {
              return value.split(context.searchString);
            }
          } else {
            var defaultDelimiter = context.isTabDelimited ? "\t" : ",";
            para = para === "\\t" ? "\t" : para;
            var delimiter = para || defaultDelimiter;

            if (explain) {
              var formattedDelimiter = this.textUtilsService.FormatDelimiter(delimiter, false);
              return "Split the line on every " + formattedDelimiter;
            } else {
              var splitValues = value.split(new RegExp(delimiter));

              for (i = 0; i < splitValues.length; i++) {
                if (context.isColumnNumeric.length <= i) {
                  context.isColumnNumeric[i] = true;
                }

                if (!this.textUtilsService.IsNumeric(splitValues[i])) {
                  context.isColumnNumeric[i] = false;
                }
              }

              return splitValues;
            }
          }
        }.bind(this)
      }, {
        name: "match|filter",
        desc: "Only lines which match a regex or search string",
        para: [{
          name: "Search String",
          desc: "The string which lines must contain"
        }],
        exec: function (value, para, context, explain) {
          var searchString = para || context.searchString;

          if (!searchString && context.regex) {
            if (explain) {
              return "Only include lines matching the regex " + context.regex;
            } else {
              if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                return value.filter(function (val) {
                  return new RegExp(context.regex).test(val);
                });
              } else {
                return new RegExp(context.regex).test(value) ? value : null;
              }
            }
          } else {
            if (explain) {
              return "Only include lines containing '" + searchString + "'";
            } else {
              if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                return value.filter(function (val) {
                  return val.includes(searchString);
                });
              } else {
                return value.includes(searchString) ? value : null;
              }
            }
          }
        }.bind(this)
      }, {
        name: "nomatch|exclude",
        desc: "Exclude lines that match a regex or search string",
        para: [{
          name: "Regex",
          desc: "The regex that lines must not match"
        }],
        exec: function (value, para, context, explain) {
          var regex = para || context.regex;

          if (!regex && context.searchString) {
            if (explain) {
              return "Exclude lines containing '" + context.searchString + "'";
            } else {
              if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                return value.filter(function (val) {
                  return !val.includes(context.searchString);
                });
              } else {
                return value.includes(context.searchString) ? null : value;
              }
            }
          } else {
            if (explain) {
              return "Exclude lines matching the regex " + regex;
            } else {
              if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                return value.filter(function (val) {
                  return !new RegExp(regex).test(val);
                });
              } else {
                return new RegExp(regex).test(value) ? null : value;
              }
            }
          }
        }.bind(this)
      }, {
        name: "at",
        desc: "Selects specified columns from text that has been split.",
        para: [{
          name: "Column Indices",
          desc: "Zero-based. Use negatives to count back from the end."
        }],
        exec: function (value, para, context, explain) {
          if (explain) {
            var indices = this.textUtilsService.ParseIntegers(para);
            var positions = [];

            for (var i = 0; i < indices.length; i++) {
              if (indices[i] >= 0) {
                positions.push("[" + indices[i].toString() + "]");
              } else {
                positions.push("[" + Math.abs(indices[i]) + " from the end" + "]");
              }
            }

            return "Get the items at positions " + positions.join(" ");
          } else {
            value = this.textUtilsService.AsArray(value);

            var _indices = para.trim().split(/[^\d\-]+/);

            var result = [];
            var i;

            for (i = 0; i < _indices.length; i++) {
              var index = parseInt(_indices[i], 10);

              if (index < 0) {
                index = value.length + index;
              }

              if (index >= 0 && index < value.length) {
                result.push(value[index]);
              }
            }

            return result;
          }
        }.bind(this)
      }, {
        name: "flat|batch",
        desc: "Flattens an array of arrays into one array, or batches items into arrays of a given size",
        para: [{
          name: "Batch Size",
          desc: "If set, converts into batches of this size"
        }],
        exec: function (value, para, context, explain) {
          if (explain) {
            if (this.textUtilsService.IsNumeric(para)) {
              return "Convert into arrays of " + para + " items";
            } else {
              return "Flatten an array of arrays into one array";
            }
          } else {
            return value;
          }
        }.bind(this)
      }, {
        name: "enclose",
        desc: "Put some character(s) at the start and end of each line",
        para: [],
        exec: function (value, para, context, explain) {
          var leftChar;
          var rightChar;

          if (para.length === 0) {
            leftChar = "(";
            rightChar = ")";
          } else if (para.length === 1) {
            leftChar = para[0];
            rightChar = para[0];
          } else {
            leftChar = para[0];
            rightChar = para[1];
          }

          if (explain) {
            return "Enclose each item in " + leftChar + "  " + rightChar;
          } else {
            var scalarValue = this.textUtilsService.AsScalar(value);
            return leftChar + scalarValue + rightChar;
          }
        }.bind(this)
      }, {
        name: "tsv",
        desc: "Tab-separates text that has been split.",
        para: [],
        exec: function (value, para, context, explain) {
          if (explain) {
            return "Output the items in tab-separated format";
          } else {
            value = this.textUtilsService.AsArray(value);
            return value.join("\t");
          }
        }.bind(this)
      }, {
        name: "csv",
        desc: "Delimits text which has been split.",
        para: [{
          name: "'",
          desc: "Enclose values in single quotes."
        }, {
          name: '"',
          desc: "Enclose values in double quotes."
        }, {
          name: "@",
          desc: "When values are enclosed in double quotes, precede " + "opening double quotes with the @ symbol."
        }, {
          name: "\\",
          desc: "When values are enclosed in double quotes, escape " + "any double quotes within values with a backslash."
        }, {
          name: "<anything else>",
          desc: "The character(s) to use as the delimiter."
        }],
        exec: function (value, para, context, explain) {
          value = this.textUtilsService.AsArray(value);
          var options = {
            isDoubleQuote: para.includes('"'),
            isSingleQuote: para.includes("'"),
            isAtString: para.includes("@"),
            isEscaped: para.includes("\\"),
            delimiter: para.replace(/["'\\@]+/, "") || ","
          };

          if (para.includes("\\t")) {
            options.delimiter = "\t";
          }

          if (explain) {
            var explanation = "Output the items";

            if (options.delimiter === ",") {
              explanation += " in CSV format";
            } else {
              var formattedDelimiter = this.textUtilsService.FormatDelimiter(options.delimiter, true);
              explanation += " separated with " + formattedDelimiter;
            }

            if (options.isDoubleQuote) {
              explanation += ", with values in double quotes";

              if (options.isAtString) {
                explanation += " preceded by @";
              }

              if (options.isEscaped) {
                explanation += ", backslash-escaping any double quotes";
              } else {
                explanation += ", doubling-up any double quotes";
              }
            } else if (options.isSingleQuote) {
              explanation += ", with values in single quotes";

              if (options.isEscaped) {
                explanation += ", backslash-escaping any quotes";
              } else {
                explanation += ", doubling-up any quotes";
              }
            }

            return explanation;
          } else {
            var toDelimitedString = function toDelimitedString(value, options) {
              var result = [];
              var i;

              for (i = 0; i < value.length; i++) {
                var val = value[i];

                if (options.isDoubleQuote) {
                  // || val.includes(options.delimiter)) {
                  if (options.isEscaped) {
                    // Replace " with \"
                    val = val.replace(/"/g, '\\"');
                    val = '"' + val + '"';
                  } else {
                    // Replace " with ""
                    val = val.replace(/"/g, '""');
                    val = '"' + val + '"';

                    if (options.isAtString) {
                      val = "@" + val;
                    }
                  }
                } else if (options.isSingleQuote) {
                  if (options.isEscaped) {
                    // Replace ' with \'
                    val = val.replace(/'/g, "\\'");
                    val = "'" + val + "'";
                  } else {
                    // Replace ' with ''
                    val = val.replace(/'/g, "''");
                    val = "'" + val + "'";
                  }
                }

                result.push(val);
              }

              return result.join(options.delimiter);
            };
          }

          return toDelimitedString(value, options);
        }.bind(this)
      }, {
        name: "join",
        desc: "Joins a split line of text back together.",
        para: [{
          name: "delimiter",
          desc: "The delimiter to insert between items (default is tab)."
        }],
        exec: function (value, para, context, explain) {
          value = this.textUtilsService.AsArray(value);
          var defaultDelimiter = context.isTabDelimited ? "\t" : " ";
          para = para === "\\t" ? "\t" : para;
          var delimiter = para || defaultDelimiter;

          if (explain) {
            var formattedDelimiter = this.textUtilsService.FormatDelimiter(delimiter, true);
            return "Output items separated with " + formattedDelimiter + " - doesn't escape " + formattedDelimiter + " in values";
          } else {
            return value.join(delimiter);
          }
        }.bind(this)
      }, {
        name: "print",
        desc: "Prints output",
        para: [{
          name: "<text>",
          desc: "What to print."
        }],
        exec: function (value, para, context, explain) {
          if (explain) {
            return "print " + para;
          } else {
            var result = para;
            var i;
            var arrayValue = Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) ? value : ["", value]; // Replace $0 with the whole value.

            result = result.replace(new RegExp("\\$0", "g"), arrayValue.join("")); // Replace $1..$9 with the value at index 1..9.

            for (i = 1; i <= 9; i++) {
              if (i <= arrayValue.length) {
                result = result.replace(new RegExp("\\$" + i, "g"), arrayValue[i - 1]);
              }
            } // Replace $-1..$-9 with the value -1..-9 from the end.


            for (i = 1; i <= 9; i++) {
              if (arrayValue.length - i >= 0) {
                result = result.replace(new RegExp("\\$-" + i, "g"), arrayValue[arrayValue.length - i]);
              }
            } // Replace $A..$Z and $a..$z with the value at index 10..35.


            for (i = 0; i < 26; i++) {
              if (i + 10 < arrayValue.length) {
                result = result.replace(new RegExp("\\$[" + String.fromCharCode(i + 65) + String.fromCharCode(i + 97) + "]", "g"), arrayValue[i + 10]);
              }
            }

            return result;
          }
        }.bind(this)
      }];
      this.textUtilsService = textUtilsService;
    };

    CommandTypesService.ɵfac = function CommandTypesService_Factory(t) {
      return new (t || CommandTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]));
    };

    CommandTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommandTypesService,
      factory: CommandTypesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandTypesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/command.service.ts":
  /*!************************************!*\
    !*** ./src/app/command.service.ts ***!
    \************************************/

  /*! exports provided: CommandService */

  /***/
  function srcAppCommandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandService", function () {
      return CommandService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _text_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./text-utils.service */
    "./src/app/text-utils.service.ts");
    /* harmony import */


    var _command_parsing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./command-parsing.service */
    "./src/app/command-parsing.service.ts");
    /* harmony import */


    var _command_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./command-types.service */
    "./src/app/command-types.service.ts");

    var CommandService = /*#__PURE__*/function () {
      function CommandService(textUtilsService, commandParsingService, commandTypesService) {
        _classCallCheck(this, CommandService);

        this.textUtilsService = textUtilsService;
        this.commandParsingService = commandParsingService;
        this.commandTypesService = commandTypesService;
        this.textUtilsService = textUtilsService;
        this.commandParsingService = commandParsingService;
        this.commandTypesService = commandTypesService;
      }

      _createClass(CommandService, [{
        key: "processCommands",
        value: function processCommands(codeValue, inputValue, explain) {
          var codeLines = this.textUtilsService.TextToLines(codeValue);
          var lines = this.textUtilsService.TextToLines(inputValue);
          var i;
          var j;
          var k;
          var context = {
            isTabDelimited: this.textUtilsService.IsTabDelimited(lines),
            regex: null,
            searchString: null,
            isColumnNumeric: null
          };
          var currentValues = lines;

          for (i = 0; i < codeLines.length; i++) {
            var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
            var newValues = [];

            if (parsedCommand.commandType.name === "flat|batch") {
              if (!parsedCommand.para || !this.textUtilsService.IsPositiveInteger(parsedCommand.para)) {
                var flattened = [];

                for (j = 0; j < currentValues.length; j++) {
                  if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(currentValues[j])) {
                    for (k = 0; k < currentValues[j].length; k++) {
                      flattened.push(currentValues[j][k]);
                    }
                  } else {
                    flattened.push(currentValues[j]);
                  }
                }

                newValues[0] = flattened;
              } else {
                var batchSize = parseInt(parsedCommand.para, 10);
                var batches = [];
                var flattened = [];

                for (j = 0; j < currentValues.length; j++) {
                  if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(currentValues[j])) {
                    for (k = 0; k < currentValues[j].length; k++) {
                      flattened.push(currentValues[j][k]);

                      if (flattened.length === batchSize) {
                        batches.push(flattened);
                        flattened = [];
                      }
                    }
                  } else {
                    flattened.push(currentValues[j]);

                    if (flattened.length === batchSize) {
                      batches.push(flattened);
                      flattened = [];
                    }
                  }
                }

                if (flattened.length) {
                  batches.push(flattened);
                }

                newValues = batches;
              }
            } else {
              if (parsedCommand.commandType.name === "split") {
                context.isColumnNumeric = [];
              }

              for (j = 0; j < currentValues.length; j++) {
                var newLineValue = parsedCommand.commandType.exec(currentValues[j], parsedCommand.para, context, explain);

                if (newLineValue !== null) {
                  newValues.push(newLineValue);
                }
              }
            }

            currentValues = newValues;
          }

          var outputLines = [];

          if (explain) {
            for (i = 0; i < codeLines.length; i++) {
              var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
              var commandType = parsedCommand.commandType;
              var para = parsedCommand.para;
              var explanation = parsedCommand.commandType.exec(lines, para, context, true);
              outputLines.push(explanation);
            }

            return outputLines;
          } else {
            for (i = 0; i < currentValues.length; i++) {
              var value = currentValues[i];

              if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                var arrayValue = value;

                for (j = 0; j < arrayValue.length; j++) {
                  outputLines.push(arrayValue[j]);
                }
              } else {
                outputLines.push(value);
              }
            }

            return outputLines;
          }
        }
      }]);

      return CommandService;
    }();

    CommandService.ɵfac = function CommandService_Factory(t) {
      return new (t || CommandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_command_parsing_service__WEBPACK_IMPORTED_MODULE_3__["CommandParsingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_command_types_service__WEBPACK_IMPORTED_MODULE_4__["CommandTypesService"]));
    };

    CommandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommandService,
      factory: CommandService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _text_utils_service__WEBPACK_IMPORTED_MODULE_2__["TextUtilsService"]
        }, {
          type: _command_parsing_service__WEBPACK_IMPORTED_MODULE_3__["CommandParsingService"]
        }, {
          type: _command_types_service__WEBPACK_IMPORTED_MODULE_4__["CommandTypesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/text-utils.service.ts":
  /*!***************************************!*\
    !*** ./src/app/text-utils.service.ts ***!
    \***************************************/

  /*! exports provided: TextUtilsService */

  /***/
  function srcAppTextUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextUtilsService", function () {
      return TextUtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);

    var TextUtilsService = /*#__PURE__*/function () {
      function TextUtilsService() {
        _classCallCheck(this, TextUtilsService);

        this.ParseIntegers = function (para) {
          var split = para.trim().split(/[^\d\-]+/);
          var integers = [];

          for (var i = 0; i < split.length; i++) {
            integers.push(parseInt(split[i], 10));
          }

          return integers;
        };

        this.IsTabDelimited = function (lines) {
          var i;

          var countTabs = function countTabs(line) {
            return (line.match(/\t/g) || []).length;
          };

          var tabsPerLine = countTabs(lines[0]);

          if (tabsPerLine === 0) {
            return false;
          }

          for (i = 0; i < lines.length; i++) {
            if (countTabs(lines[i]) !== tabsPerLine) {
              return false;
            }
          }

          return true;
        };

        this.FormatDelimiter = function (delimiter, pluralise) {
          var formatDelimiterSingular = function formatDelimiterSingular(delimiter) {
            if (delimiter === "\t") {
              return "tab";
            } else if (delimiter === " ") {
              return "space";
            } else if (delimiter === ",") {
              return "comma";
            } else {
              return "'" + delimiter + "' character";
            }
          };

          var formattedDelimiter = formatDelimiterSingular(delimiter);
          return pluralise ? formattedDelimiter + "s" : formattedDelimiter;
        };
      }

      _createClass(TextUtilsService, [{
        key: "LinesToText",
        value: function LinesToText(lines) {
          return lines.join("\r\n");
        }
      }, {
        key: "TextToLines",
        value: function TextToLines(text) {
          return text.trim().split(/\n/);
        }
      }, {
        key: "IsNumeric",
        value: function IsNumeric(value) {
          return /^-{0,1}\d+$/.test(value);
        }
      }, {
        key: "IsPositiveInteger",
        value: function IsPositiveInteger(value) {
          return /^[1-9]\d*$/.test(value);
        }
      }, {
        key: "AsArray",
        value: function AsArray(value) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            return value;
          } else {
            return value.split(/\s+/);
          }
        }
      }, {
        key: "AsScalar",
        value: function AsScalar(value) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            return value[0];
          } else {
            return value;
          }
        }
      }]);

      return TextUtilsService;
    }();

    TextUtilsService.ɵfac = function TextUtilsService_Factory(t) {
      return new (t || TextUtilsService)();
    };

    TextUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TextUtilsService,
      factory: TextUtilsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! c:\Users\edwar\Dev\string-tools\string-tools\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
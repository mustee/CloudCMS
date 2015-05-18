/// <reference path="../../typings/dt-angular/angular.d.ts" />
/// <reference path="../../typings/dt-angular/angular-route.d.ts" />
/// <reference path="controllers/logincontroller.ts" />
/// <reference path="controllers/registercontroller.ts" />
var CloudCMS;
(function (CloudCMS) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "scripts/templates/Login.html",
                controller: "LoginController"
            }).when("/login", {
                templateUrl: "scripts/templates/Login.html",
                controller: "LoginController"
            }).when("/register", {
                templateUrl: "scripts/templates/Register.html",
                controller: "RegisterController"
            }).otherwise({ redirectTo: "/" });
        }
        return Config;
    })();
    CloudCMS.Config = Config;
    Config.$inject = ["$routeProvider"];
})(CloudCMS || (CloudCMS = {}));

/// <reference path="config.ts" />
/// <reference path="controllers/registercontroller.ts" />
/// <reference path="controllers/logincontroller.ts" />

var app = angular.module("cloudCMS", ['ngRoute']);
app.config(CloudCMS.Config);
app.controller('LoginController', CloudCMS.Controllers.LoginController);
app.controller('RegisterController', CloudCMS.Controllers.RegisterController);
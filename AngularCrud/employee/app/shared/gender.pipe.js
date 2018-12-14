"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GenderPipe = /** @class */ (function () {
    function GenderPipe() {
    }
    GenderPipe.prototype.transform = function (value, fallback) {
        var gender = "";
        if (value == 1) {
            gender = "male";
        }
        else if (value == 2) {
            gender = "female";
        }
        else {
            gender = "not set";
        }
        return gender;
    };
    GenderPipe = __decorate([
        core_1.Pipe({
            name: "beautifygender"
        })
    ], GenderPipe);
    return GenderPipe;
}());
exports.GenderPipe = GenderPipe;
//# sourceMappingURL=gender.pipe.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonenumbers = void 0;
var class_validator_1 = require("class-validator");
var phonenumbers = /** @class */ (function () {
    function phonenumbers() {
    }
    __decorate([
        (0, class_validator_1.IsDefined)()
    ], phonenumbers.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], phonenumbers.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], phonenumbers.prototype, "number", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)()
    ], phonenumbers.prototype, "userid", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], phonenumbers.prototype, "users", void 0);
    return phonenumbers;
}());
exports.phonenumbers = phonenumbers;
//# sourceMappingURL=phonenumbers.model.js.map
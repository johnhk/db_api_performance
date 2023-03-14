"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var class_validator_1 = require("class-validator");
var users = /** @class */ (function () {
    function users() {
    }
    __decorate([
        (0, class_validator_1.IsDefined)(),
        (0, class_validator_1.IsInt)()
    ], users.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], users.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], users.prototype, "surname", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], users.prototype, "note", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], users.prototype, "company", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)()
    ], users.prototype, "emailadresses", void 0);
    __decorate([
        (0, class_validator_1.IsDefined)()
    ], users.prototype, "phonenumbers", void 0);
    return users;
}());
exports.users = users;
//# sourceMappingURL=users.model.js.map
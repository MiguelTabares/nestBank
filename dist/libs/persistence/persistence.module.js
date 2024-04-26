"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const db_config_1 = require("./db-config");
let PersistenceModule = class PersistenceModule {
};
exports.PersistenceModule = PersistenceModule;
exports.PersistenceModule = PersistenceModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => {
                    const { db, env } = configService;
                    const uriDb = env === 'local'
                        ? `${db.connection}${db.host}/${db.name}`
                        : `mongodb+srv://${db.user}:${db.password}@cluster0.mongodb.net/${db.name}?retryWrites=true&w=majority`;
                    return {
                        uri: uriDb,
                    };
                },
                inject: [db_config_1.default.KEY],
            }),
        ],
    })
], PersistenceModule);
//# sourceMappingURL=persistence.module.js.map
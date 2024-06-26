"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    app.setGlobalPrefix('/v1/api');
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}/v1/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map
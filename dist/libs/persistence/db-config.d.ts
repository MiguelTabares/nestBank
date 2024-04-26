declare const _default: (() => {
    db: {
        connection: string;
        host: string;
        name: string;
        user: string;
        password: string;
    };
    env: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    db: {
        connection: string;
        host: string;
        name: string;
        user: string;
        password: string;
    };
    env: string;
}>;
export default _default;

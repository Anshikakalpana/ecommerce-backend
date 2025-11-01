import swaggerAutogen from 'swagger-autogen';
const doc = {
    info: {
        title: 'My API',
        description: 'API Documentation',
    },
    host: 'localhost:3000',
};
const outputFile = './src/swagger-output.json';
const routes = [
    './src/app/routes/userRoute.ts',
    './src/app/routes/cartRoute.ts',
    './src/app/routes/productRoute.ts',
];
swaggerAutogen()(outputFile, routes, doc);
//# sourceMappingURL=swagger.js.map
import swaggerAutogen from 'swagger-autogen';
const doc = {
    info: {
        title: 'My API',
        description: 'API documentation for my project',
    },
    host: 'localhost:3000',
};
const outputFile = './dist/swagger-output.json';
const routes = [
    './dist/app/routes/userRoute.js',
    './dist/app/routes/cartRoute.js',
    './dist/app/routes/productRoute.js',
];
swaggerAutogen()(outputFile, routes, doc);
//# sourceMappingURL=swagger.js.map
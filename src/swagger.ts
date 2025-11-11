// import swaggerAutogen from 'swagger-autogen';

// const doc = {
//   info: {
//     title: 'My API',
//     description: 'API Documentation',
//   },
//   host: 'localhost:3000',
// };

// const outputFile = './src/swagger-output.json'; 
// const routes = [];

// swaggerAutogen()(outputFile, routes, doc);

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
  './src/app/routes/productRoute.ts',
  './src/app/routes/cartRoute.ts'
];
swaggerAutogen()(outputFile, routes, doc);





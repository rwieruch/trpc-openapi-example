import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createOpenApiExpressMiddleware } from 'trpc-openapi';

import { appRouter } from './router';
import { createContext } from './context';
import { openApiDocument } from './openapi';

const app = express();

app.use(cors());

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(
  '/api',
  createOpenApiExpressMiddleware({ router: appRouter })
);

app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(openApiDocument));

app.listen(4000);

import { initTRPC, inferAsyncReturnType } from '@trpc/server';
import { OpenApiMeta } from 'trpc-openapi';

import { createContext } from './context';

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const procedure = t.procedure;

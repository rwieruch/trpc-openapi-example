import { router } from './trpc';
import { searchRouter } from './search';

export const appRouter = router({
  search: searchRouter,
});

export type AppRouter = typeof appRouter;

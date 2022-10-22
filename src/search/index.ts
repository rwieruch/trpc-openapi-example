import axios from 'axios';
import { z } from 'zod';

import { router, procedure } from '../trpc';

const SEARCH_URL = 'http://hn.algolia.com/api/v1/search';

export const searchRouter = router({
  getStoriesBySearch: procedure
    .meta({ openapi: { method: 'GET', path: '/v1/search' } })
    .input(
      z.object({ query: z.string(), page: z.string().optional() })
    )
    .output(
      z.object({
        page: z.number(),
        hits: z.array(
          z.object({
            created_at: z.string(),
            title: z.string(),
            url: z.string(),
            author: z.string(),
            points: z.number(),
            objectID: z.string(),
          })
        ),
      })
    )
    .query(async (req) => {
      const { input } = req;

      const { data } = await axios(SEARCH_URL, {
        params: {
          query: input.query,
          page: input.page,
        },
      });

      return data;
    }),
});

import axios from 'axios';
import jestOpenAPI from 'jest-openapi';

import { openApiDocument } from '../openapi';

jestOpenAPI(openApiDocument);

describe('GET /v1/search', () => {
  it('query', async () => {
    const res = await axios.get(
      'http://localhost:4000/api/v1/search',
      {
        params: {
          query: 'react',
        },
      }
    );

    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });

  it('query, page', async () => {
    const res = await axios.get(
      'http://localhost:4000/api/v1/search',
      {
        params: {
          query: 'react',
          page: '1',
        },
      }
    );

    expect(res.status).toEqual(200);
    expect(res).toSatisfyApiSpec();
  });
});

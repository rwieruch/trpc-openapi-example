# tRPC with Open API (Hacker News Edition)

- feat. [Hacker News' API](https://hn.algolia.com/api)

## Motivation

- mirror a REST API which is out of your control (here Hacker News' API) with [tRPC](https://trpc.io/): introduce manually TypeScript for this API and therefore TypeScript support for your client-side application (not included here)
- generate an Open API (Swagger) documentation
- run tests (see: _src/search/test.ts_) of the "out of control" API's response against your controlled type definitions (see: _src/search/index.ts_)

## Get Started

Install and start:

```sh
yarn install
yarn start
```

Visit `http://localhost:4000/` for Swagger UI

- open /v1/search and "Try it out"
- e.g. `{ query: 'react' }` or `{ query: 'react', page: '1' }`

Visit `http://localhost:4000/api/v1/search?query=react` or `http://localhost:4000/api/v1/search?query=react&page=1` for the mirrored API endpoint

Optionally run tests against your mirrored API vs remote API: `yarn test`

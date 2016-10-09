# dango

[![Travis](https://img.shields.io/travis/vutran/dango/develop.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/dango) [![Coveralls branch](https://img.shields.io/coveralls/vutran/dango/develop.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/dango) [![license](https://img.shields.io/github/license/vutran/dango.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Search for emojis 🍕😋😍🐷.

## Install

```bash
$ npm install --save dango
```

## Usage

```js
import dango from 'dango';

dango('pizza').then(items => {
  console.log(items);
});
```

## API

### dango(q)

Returns a `Promise` that resolves an array of items.

#### q

Type: `String`

A query to search for.

## License

MIT © [Vu Tran](https://github.com/vutran/)

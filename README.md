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

  /*
  [ { score: 0.6858612895, text: '🍕' },
  { score: 0.02997607924, text: '😋' },
  { score: 0.02023460716, text: '😍' },
  { score: 0.010817755945, text: '🐷' },
  { score: 0.0093791456893, text: '👅' },
  { score: 0.0077837170102, text: '🙌' },
  { score: 0.007717252709, text: '😛' },
  { score: 0.0075424523093, text: '👌' },
  { score: 0.0074847843498, text: '❤' },
  { score: 0.0063261617906, text: '🍴' } ]
  */
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

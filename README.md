# next-ant-column
> Ant table coumn for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-ant-column
```

## usage
```js
import '@jswork/next-ant-column';

get fields() {
  return [
    nx.antColumn('ID', 'id'),
    nx.antColumn('用户名', 'username'),
  ]
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-ant-column/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-ant-column
[version-url]: https://npmjs.org/package/@jswork/next-ant-column

[license-image]: https://img.shields.io/npm/l/@jswork/next-ant-column
[license-url]: https://github.com/afeiship/next-ant-column/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-ant-column
[size-url]: https://github.com/afeiship/next-ant-column/blob/master/dist/next-ant-column.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-ant-column
[download-url]: https://www.npmjs.com/package/@jswork/next-ant-column

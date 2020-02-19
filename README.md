# next-ant-column
> Ant table coumn for next.

## installation
```bash
npm install -S @feizheng/next-ant-column
```

## usage
```js
import '@feizheng/next-ant-column';

get fields() {
  return [
    nx.antColumn('ID', 'id'),
    nx.antColumn('用户名', 'username'),
  ]
}
```

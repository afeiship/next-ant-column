/*!
 * name: @jswork/next-ant-column
 * description: Ant table coumn for next.
 * homepage: https://github.com/afeiship/next-ant-column
 * version: 1.0.0
 * date: 2020-11-22 16:29:41
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.antColumn = function (inTitle, inKey, inCallback, inOptions) {
    return nx.mix(
      {
        title: inTitle,
        key: inKey,
        dataIndex: inKey,
        render: inCallback || nx.stubValue
      },
      inOptions
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antColumn;
  }
})();

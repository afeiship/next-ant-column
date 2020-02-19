/*!
 * name: @feizheng/next-ant-column
 * description: Ant table coumn for next.
 * url: https://github.com/afeiship/next-ant-column
 * version: 1.0.0
 * date: 2020-02-19 17:21:58
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  /* prettier-ignore */
  var RETURN_VALUE = function(inValue) { return inValue;};

  nx.antColumn = function(inTitle, inKey, inCallback, inOptions) {
    return nx.mix(
      {
        title: inTitle,
        key: inKey,
        dataIndex: inKey,
        render: inCallback || RETURN_VALUE
      },
      inOptions
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antColumn;
  }
})();

//# sourceMappingURL=next-ant-column.js.map

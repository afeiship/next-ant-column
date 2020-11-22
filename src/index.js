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

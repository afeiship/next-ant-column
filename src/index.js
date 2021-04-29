(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.antColumn = function (inTarget, inKey, inCallback, inOptions) {
    if (Array.isArray(inTarget)) {
      return inTarget.map(function (title) {
        return nx.antColumn(title, inKey, inCallback, inOptions);
      });
    }

    var key = inKey || inTarget;
    return nx.mix(
      {
        title: inTarget,
        key: key,
        dataIndex: key,
        render: inCallback || nx.stubValue
      },
      inOptions
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antColumn;
  }
})();

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DOT = '.';

  nx.antColumn = function (inTarget, inKey, inCallback, inOptions) {
    if (Array.isArray(inTarget)) {
      return inTarget.map(function (title) {
        return nx.antColumn(title, inKey, inCallback, inOptions);
      });
    }

    var key = inKey || inTarget;
    var defaultCallback = key.includes(DOT)
      ? function (_, record) {
          return nx.get(record, key);
        }
      : nx.stubValue;

    return nx.mix(
      {
        title: inTarget,
        key: key,
        dataIndex: key,
        render: inCallback || defaultCallback
      },
      inOptions
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antColumn;
  }
})();

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

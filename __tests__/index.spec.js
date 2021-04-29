(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.antColumn', function () {
      var res = nx.antColumn('标题', 'title', (text) => text, { width: '20%' });
      console.log(res);
    });

    test('nx.antColum support array options', ()=>{
      var res = nx.antColumn([
        'title',
        'summary',
        'content',
        'updated_at',
        'created_at'
      ]);

      console.log(res);
    })
  });
})();

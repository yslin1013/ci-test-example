const axios = require('axios');

const fns = {
  fetchData: (num = 1) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(res => res.data)
      .catch(err => 'error');
  }
};

test('回傳值必定為 "delectus aut autem"（async）', async () => {
  expect.assertions(1);
  // async 函式下，await 會確保取得遠端資料後才繼續往下運行
  const data = await fns.fetchData(1);
  expect(data.title).toEqual('delectus aut autem');
});

test('驗證非同步 特定屬性是否已被定義', async () => {
  expect.assertions(1);
  const data = await fns.fetchData(1);
  expect(data.title).toBeDefined();
});

/*
// 非同步：Promise 寫法
test('返回值必定為 "delectus aut autem"', () => {
  // 斷言，確保非同步有正確取得資料
  expect.assertions(1);

  // 當有使用 assertions 則必需加上 return，才能正確驗證結果
  // The assertion for a promise must be returned.
  return fns.fetchData(1).then(data => {
    expect(data.title).toEqual('delectus aut autem');
  });
});

fns.fetchData(1).then(res => {
  console.log(res);
});
*/

/*
test('返回值必定為 "delectus aut autem"', () => {
  let data = {};
  fns.fetchData(1).then(res => { data = res; });
  // expect 無法正確取得值
  expect(data.title).toEqual('delectus aut autem');
});
*/
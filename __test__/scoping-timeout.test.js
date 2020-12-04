// 模擬資料庫的資料
const userDB = [
  { id: 0, name: 'Mike' },
  { id: 1, name: 'John' },
];

// 新增測試資料
function insertTestData (data, callBack) {
  setTimeout(() => {
    userDB.push(data);
    callBack();
  }, 3000);
}

// 移除測試資料
function deleteTestData (id) {
  let findIndex = userDB.findIndex((user) => { return user.id === id });
  if (findIndex !== -1) userDB.splice(findIndex, 1);
}

// 查詢測試資料
function getUserData (id) {
  let goalData = userDB.find((user) => { return user.id === id; });
  return goalData;
}

// 全部測試完後確認資料狀態
afterAll(() => { console.log(userDB); });

describe('Test about user data', () => {
  // 開始前新增測試資料
  beforeAll(done => {
    function callBack() { done(); }
    insertTestData({ id: 99, name: 'TESTER' }, callBack);
  });
  // 結束時清除測試資料
  afterAll(() => { deleteTestData(99); });
  // 確認是否回傳正確的資料
  test('Test get user data', () => {
    expect(getUserData(99)).toEqual({ id: 99, name: 'TESTER' });
  });
});
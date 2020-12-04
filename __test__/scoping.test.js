beforeAll(() => { console.log('Global beforeAll'); });
beforeEach(() => { console.log('Global beforeEach'); });
afterAll(() => { console.log('Global afterAll'); });
afterEach(() => { console.log('Global afterEach'); });

describe('Test', () => {
  beforeAll(() => { console.log('Local beforeAll'); });
  beforeEach(() => { console.log('Local beforeEach'); });
  afterAll(() => { console.log('Local afterAll'); });
  afterEach(() => { console.log('Local afterEach'); });
  test('Test1', () => { expect(true).toBe(true); });
  test('Test1', () => { expect(3).toBe(3); });
});


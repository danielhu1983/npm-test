import { NpmTestPage } from './app.po';

describe('npm-test App', () => {
  let page: NpmTestPage;

  beforeEach(() => {
    page = new NpmTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DanelPage } from './app.po';

describe('danel App', () => {
  let page: DanelPage;

  beforeEach(() => {
    page = new DanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lg works!');
  });
});

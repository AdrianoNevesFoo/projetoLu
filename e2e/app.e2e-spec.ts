import { SiteSilPage } from './app.po';

describe('site-sil App', () => {
  let page: SiteSilPage;

  beforeEach(() => {
    page = new SiteSilPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

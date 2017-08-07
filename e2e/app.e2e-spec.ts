import { ProjetoLuPage } from './app.po';

describe('projeto-lu App', () => {
  let page: ProjetoLuPage;

  beforeEach(() => {
    page = new ProjetoLuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { ModulepaginationPage } from './app.po';

describe('modulepagination App', () => {
  let page: ModulepaginationPage;

  beforeEach(() => {
    page = new ModulepaginationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

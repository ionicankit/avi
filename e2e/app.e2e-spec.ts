import { AviPage } from './app.po';

describe('avi App', () => {
  let page: AviPage;

  beforeEach(() => {
    page = new AviPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

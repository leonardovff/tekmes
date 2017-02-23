import { TEKMESPage } from './app.po';

describe('tekmes App', () => {
  let page: TEKMESPage;

  beforeEach(() => {
    page = new TEKMESPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

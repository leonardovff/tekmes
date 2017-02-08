import { TekmesPage } from './app.po';

describe('tekmes App', function() {
  let page: TekmesPage;

  beforeEach(() => {
    page = new TekmesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

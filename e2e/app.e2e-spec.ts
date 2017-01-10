import { ProdiumPage } from './app.po';

describe('prodium App', function() {
  let page: ProdiumPage;

  beforeEach(() => {
    page = new ProdiumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

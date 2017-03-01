import { TWC2K17Page } from './app.po';

describe('twc-2-k17 App', function() {
  let page: TWC2K17Page;

  beforeEach(() => {
    page = new TWC2K17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

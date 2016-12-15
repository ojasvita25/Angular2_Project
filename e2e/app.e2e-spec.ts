import { TEST1Angular2Page } from './app.po';

describe('test1-angular2 App', function() {
  let page: TEST1Angular2Page;

  beforeEach(() => {
    page = new TEST1Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

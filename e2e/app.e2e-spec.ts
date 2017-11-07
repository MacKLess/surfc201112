import { Surfc11Page } from './app.po';

describe('surfc11 App', () => {
  let page: Surfc11Page;

  beforeEach(() => {
    page = new Surfc11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

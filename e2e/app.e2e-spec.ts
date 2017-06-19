import { FluentAngularTestingPage } from './app.po';

describe('fluent-angular-testing App', () => {
  let page: FluentAngularTestingPage;

  beforeEach(() => {
    page = new FluentAngularTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

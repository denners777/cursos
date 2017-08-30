import { Angular4iniciandoPage } from './app.po';

describe('angular4iniciando App', () => {
  let page: Angular4iniciandoPage;

  beforeEach(() => {
    page = new Angular4iniciandoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

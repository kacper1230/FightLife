import { ApkaPage } from './app.po';

describe('apka App', () => {
  let page: ApkaPage;

  beforeEach(() => {
    page = new ApkaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

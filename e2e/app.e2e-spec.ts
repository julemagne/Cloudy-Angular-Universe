import { CloudyPage } from './app.po';

describe('cloudy App', () => {
  let page: CloudyPage;

  beforeEach(() => {
    page = new CloudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

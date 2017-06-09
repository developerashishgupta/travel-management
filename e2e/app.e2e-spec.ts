import { TravelManagementPage } from './app.po';

describe('travel-management App', function() {
  let page: TravelManagementPage;

  beforeEach(() => {
    page = new TravelManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

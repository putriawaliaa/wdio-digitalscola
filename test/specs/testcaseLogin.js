import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('SauceDemo Login application', () => {
    it('should login with valid credentials and validate user is on the dashboard', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.inventoryList).toBeExisting();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});
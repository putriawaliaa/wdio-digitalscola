import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('SauceDemo Add to Cart functionality', () => {
    it('should add an item to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.inventoryList).toBeExisting();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await InventoryPage.addItemToCart();

        await expect(InventoryPage.cartIcon).toBeExisting();
        await expect(InventoryPage.cartIcon).toHaveText('1');
    });
});

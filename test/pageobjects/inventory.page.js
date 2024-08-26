import Page from './page.js';

class InventoryPage extends Page {
    get inventoryList() { return $('.inventory_list') }
    get firstItemAddToCartButton() { return $('button[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get cartIcon() { return $('.shopping_cart_badge'); }

    async addItemToCart() {
        await this.firstItemAddToCartButton.click();
    }

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();

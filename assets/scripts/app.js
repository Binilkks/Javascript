
class Product {
    constructor(title, url, description, price) {
        this.title = title;
        this.imageUrl = url;
        this.description = description;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }
    addToCart() {
        console.log(this);
        console.log('Item added to Cart');
        console.log(this.product);
    }
    render() {
        const item = document.createElement('li');
        item.className = 'product-item';
        item.innerHTML = `
        <div>
         <img src="${this.product.imageUrl}" alt="${this.product.title} />
         <div className="product-item__content">
            <h2>${this.product.title}</h2>
            <h2>\$${this.product.price}</h2>
            <p>${this.product.description}</p>
            <button>Add to Cart </button>
         </div>
        </div>
        `;
        const cartButton = item.querySelector('button');
        cartButton.addEventListener('click', this.addToCart.bind(this));
        return item;
    }
}

class ShoppingCart {
    render() {
        const cart = document.createElement('section');
        cart.innerHTML = `
        <h2> Total: \$ ${0}</h2>
        <button> Buy Now </button>
        `;
        cart.className = 'cart';
        return cart;
    }
}

class ProductList {
    products = [
        new Product('A Pillow', 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
            'A soft pillow',
            19.99),
        new Product(
            'A Carpet',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
            'A carpet which you might like - or not.',
            89.99
        )
    ];
    render() {
        const list = document.createElement('ul');
        list.className = 'product-list'
        for (const product of this.products) {
            const productItem = new ProductItem(product);
            list.append(productItem.render());
        }
        return list;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart();
        const cartSection  = cart.render();
        const productList = new ProductList();
        const renderList = productList.render();
        renderHook.append(cartSection);
        renderHook.append(renderList);
    }
}

const shop = new Shop();
shop.render();


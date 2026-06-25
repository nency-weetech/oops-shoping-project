class Product {
  //it's called fields
  // title;
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    //its called property
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {

      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div> 
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      return prodEl;
      
  }

}
class ProductList {
  products= [
    new Product(
      "A pillow",
      "https://www.sleepsia.in/cdn/shop/files/Microfiber_Pillow_1.jpg?v=1762335192",
      "A soft pillow!",
      99.99
    ),
    new Product(
      "A Carpet",
      "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22866576/2025/3/12/f1f38c08-9c0a-4611-b1a5-7199a8e52c201741778724008-Storyhome-Blue--Yellow-Anti-skid-Floor-Carpet-57174177872334-1.jpg",
      "A carpet which you might like!",
      199.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
    const productItem = new ProductItem(prod)
    const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}


const productList = new ProductList();
productList.render(); 
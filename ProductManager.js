class ProductManager {
  static #products = [];
  create(data) {
    const product = {
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id + 1,
      title: data.title,    
      photo: data.photo,
      category: data.category,
      price: data.price,
      stock: data.stock
    };
    ProductManager.#products.push(product);
    console.log("Producto creado");
  }
  read(){
    return ProductManager.#products
  }
}

const gestorDeProductos = new ProductManager()
gestorDeProductos.create({
    title : "zapatilla" ,
    photo: "zapatilla.jpg",
      category: "calzado",
      price: 100,
      stock: 1000
    
}) // crear 4 productos mas

console.log(gestorDeProductos.read())
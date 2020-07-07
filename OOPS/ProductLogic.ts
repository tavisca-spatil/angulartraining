class Product{
    constructor(
        public ProductId: number,
        public ProductName: string,
        public ProductCategory: string,
        public Manufacturer: string,
        public Description: string,
        public Price: number
    )
    {}
}

class ProductLogic{
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>();
    };

    validateProduct(product: Product) : void {
        if (typeof product.ProductId !== 'number') {
            throw new Error(`ProductId must be an number`);
        }
        if (typeof product.ProductName !== 'string') {
            throw new Error(`ProductName must be an string`);
        }
        if (typeof product.ProductCategory !== 'string') {
            throw new Error(`ProductCategory must be an string`);
        }
        if (typeof product.Manufacturer !== 'string') {
            throw new Error(`Manufacturer must be an string`);
        }
        if (typeof product.Description !== 'string') {
            throw new Error(`Description must be an string`);
        }
        else if(product.Description.length > 100){
            throw new Error(`Description length must be less than or equal to 100`);
        }
        if (typeof product.Price !== 'number') {
            throw new Error(`Price must be an number.`);
        }
        else if(product.Price < 0){
            throw new Error(`Price must be an positive number.`);
        }
    }

    getProducts(): Array<Product>{
        this.products.push(new Product(101, 'PC', 'Electronics', 'Lenovo', 'ThinkPad E580 with core i7 processor', 98000));
        this.products.push(new Product(102, 'Laptop', 'Electronics', 'Dell', 'Inspiron With core i9 processor', 120000));
        this.products.push(new Product(103, 'TV', 'Electronics', 'LG', 'Think Q 55 inch Smart TV', 40000));
        this.products.push(new Product(104, 'Mixer Grinders', 'Appliances', 'Bajaj', 'Gx-1 with 3 Jars', 2000));
        this.products.push(new Product(105, 'Table Fan', 'Appliances', 'Crompton', 'Crompton Metal Sea Wind 48-Inch Ceiling Fan (Brown)', 1500));
        return this.products;
    }

    getProductsByCategory(category: string): Array<Product>{
        let categoryProducts = new Array<Product>();
        for (var i = 0; i < this.products.length - 1; i++) {
            if (this.products[i].ProductCategory === category) {
                categoryProducts.push(this.products[i]);
            }
        }
        return categoryProducts;
    }

    addUniqueProduct(prod: Product) : Array<Product>{
        
        this.validateProduct(prod);

        let found = false;
        for(var i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductId === prod.ProductId) {
                found = true;
                break;
            }
        }

        if(found){
            throw new Error(`ProductId must be unique. '${prod.ProductId}' already exists`);
        }
        else{
            this.products.push(prod);
            return this.products;
        }
    }

    deleteProductById(productId: number) : Array<Product>{
        for(var i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductId === productId) {
                this.products.splice(i, 1);
                return this.products;
            }
        }
    }
}

let productLogic = new ProductLogic();

//List all Products
productLogic.getProducts().forEach((p,i) => {
    console.log(`Product details: ${JSON.stringify(p)} \n`);
}); 

//List all products by (Category/Manufacturer)
productLogic.getProductsByCategory('Appliances').forEach((p,i) => {
    console.log(`Product details by Category: ${JSON.stringify(p)} \n`);
});

//Update the products (with all validations)
productLogic.addUniqueProduct(new Product(106, 'Dining Table', 'Furniture', 'Hariom Handicraft', 'Dining Table with 6 Chairs, 1 Table, 6 Seater Dining Set -Dining Room Furniture', 15000)).forEach((p,i) => {
    console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
}); 

//Delete the product by product Id
productLogic.deleteProductById(106).forEach((p,i) => {
    console.log(`Product details post delete: ${JSON.stringify(p)} \n`);
}); 

// Validation 
// 1) ProductId must be unique

// productLogic.addUniqueProduct(new Product(102, 'Dining Table', 'Furniture', 'Hariom Handicraft', 'Dining Table with 6 Chairs, 1 Table, 6 Seater Dining Set -Dining Room Furniture', 15000)).forEach((p,i) => {
//     console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
// }); 

// // 2) ProductName must be string
// productLogic.addUniqueProduct(new Product(107, 202, 'Furniture', 'Hariom Handicraft', 'Dining Table with 6 Chairs, 1 Table, 6 Seater Dining Set -Dining Room Furniture', 15000)).forEach((p,i) => {
//     console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
// }); 

// // 3) Category Name, Manufacturer must be string
// productLogic.addUniqueProduct(new Product(107, 'chair', 1001, 'Hariom Handicraft', 'Dining Table with 6 Chairs, 1 Table, 6 Seater Dining Set -Dining Room Furniture', 15000)).forEach((p,i) => {
//     console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
// }); 

// 4) Description should not be more than 100 characters
// productLogic.addUniqueProduct(new Product(107, 'Chair', 'Furniture', 'Hariom Handicraft', 
// 'first of all, just getting to the theater presents difficulties. leaving a home equipped with a tv and a video recorder is not an attractive idea on a humid, cold, or rainy night. even if the weather cooperates, there is still a thirty-minute drive to the theater down a congested highway, followed by the hassle of looking for a parking space. and then there are the lines. after hooking yourself to the end of a human chain, you worry about whether there will be enough tickets, whether you will get seats together, and whether many people will sneak into the line ahead of you.', 15000)).forEach((p,i) => {
//     console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
// }); 

// 5) Price should not be -ve
// productLogic.addUniqueProduct(new Product(107, 'Table', 'Furniture', 'Hariom Handicraft', 'Dining Table with 6 Chairs, 1 Table, 6 Seater Dining Set -Dining Room Furniture', -15000)).forEach((p,i) => {
//     console.log(`Product details post adding/updating: ${JSON.stringify(p)} \n`);
// }); 
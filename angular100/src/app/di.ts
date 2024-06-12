class ProductModel {
    sku: string;
    name: string;
    price: number;
  }
  
  interface CartItem {
    product: ProductModel;
    quantity: number;
  }

  interface ICartService {
    selectedProducts: CartItem[];
    calculateTotal(): number;
    addToCart(): void;
  }
  
  class CartService implement ICartService{
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
      return this.selectedProducts.reduce(
        (total, item) => item.product.price * item.quantity + total,
        0
      );
    }
    addToCart(): void {
      // logic here
    }
  }
  
  class ProductComponent {
    cartService: CartService;
  }

  const cartService = new CartService();

  const productComponent = new ProductComponent(cartService);
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        product: resolve(__dirname, "./product.html"),
        productdetail: resolve(__dirname, "./product-detail.html.html"),
        cart: resolve(__dirname, "./cart.html"),
        checkout: resolve(__dirname, "./checkout.html"),
      },
    },
  },
});

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index"),
        product: resolve(__dirname, "./product"),
        productdetail: resolve(__dirname, "./product-detail"),
        cart: resolve(__dirname, "./cart"),
        checkout: resolve(__dirname, "./checkout"),
      },
    },
  },
});

import React from "react";
import Container from "./Container";
import ProductCard from "./ProductCard";

import productImage1 from "@/assets/jbl-speaker-product.png";
import productImage2 from "@/assets/product-2.png";

const products = new Array(4).fill(0).map((_, i) => ({
  id: i + 1,
  name: `Club Ws 1200`,
  price: 1200,
  image: i % 2 === 0 ? productImage1 : productImage2,
  attributes: [
    {
      name: "Product",
      value: "Amplifier",
    },
    {
      name: "Size",
      value: "1.5kg",
    },
  ],
}));

export default function ProductGrid() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center  gap-y-5">
        {products.map((product) => (
          <ProductCard
            title={product.name}
            attributes={product.attributes}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
    </Container>
  );
}

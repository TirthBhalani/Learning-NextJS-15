

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";
export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback= "Loading product details">
        <Product/>

      </Suspense>
      
      <Suspense fallback= "Loading review details">
        <Reviews/>

      </Suspense>
      
    </div>
  );
}
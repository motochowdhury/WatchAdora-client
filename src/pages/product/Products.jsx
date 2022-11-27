import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../components/BookingModal";
import ProductsCard from "../../components/ProductsCard";

const Products = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState({});
  const { data } = useLoaderData();
  const products = data?.data;
  return (
    <div>
      <div className="max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-1 gap-4 mx-auto my-20">
        {products.map((product, idx) => (
          <ProductsCard
            key={idx}
            product={product}
            setIsOpen={setIsOpen}
            setBook={setBook}
          />
        ))}
      </div>
      <BookingModal isOpen={isOpen} setIsOpen={setIsOpen} book={book} />
    </div>
  );
};

export default Products;

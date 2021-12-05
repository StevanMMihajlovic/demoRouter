import { useParams } from "react-router";

const DetailProduct = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Details...</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default DetailProduct;

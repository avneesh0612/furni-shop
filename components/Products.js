import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-col w-full px-10">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-5xl text-[#244D4D] font-semibold">Products</h2>
        <div className="flex">
          <p>See All</p>
        </div>
      </div>

      <Product
        name="Hand Base Lamp"
        discountedPrice={35}
        price={55}
        image="https://res.cloudinary.com/didkcszrq/image/upload/v1638677397/Image_vvp5wm.png"
      />
    </div>
  );
};

export default Products;

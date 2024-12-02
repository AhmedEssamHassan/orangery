import { CiHeart } from "react-icons/ci";
import { GiFruitTree } from "react-icons/gi";
import { GiDrippingStar } from "react-icons/gi";

const ProductItem = ({ data }) => {
  const { name, price, img, desc } = data;
  return (
    <section className="flex gap-3 justify-between rounded-md my-4 p-3 hover:translate-y-1.5 transition-transform shadow-lg">
      <div className="product-info w-full flex flex-col grow justify-start items-stretch gap-2 pt-2">
        <h6 className="text-primary  font-bold line-clamp-2 text-start">
          {name}
        </h6>
        <p className="text-primary text-sm font-normal">{desc} </p>
        <span className=" text-primary font-semibold">{price}</span>
        <div className="flex flex-wrap gap-[5px]">
          <span className="w-[23px] h-[23px] rounded-full border border-primary flex justify-center items-center">
            <GiDrippingStar color="#7b646c" size={13} />
          </span>
          <span className="w-[23px] h-[23px] rounded-full border border-primary flex justify-center items-center">
            <GiFruitTree color="#7b646c" size={13} />
          </span>
        </div>
      </div>

      <div class="relative z-[6]">
        <img
          alt="product"
          width="100"
          height="100"
          className="object-cover max-h-[100px] max-w-[100px] h-[100px] w-[100px] rounded"
          loading="lazy"
          src={img}
        />
        <button className="absolute z-20 top-0 end-0 flex items-start justify-end  m-2 bg-white p-1 rounded-md gap-0.5 shadow-sm ">
          <CiHeart color="#7b646c" />
          <span className="text-xs text-primary">1</span>
        </button>
      </div>
    </section>
  );
};

export default ProductItem;

import Skeleton from "react-loading-skeleton";

const ProductSkeleton = ({ products }) => {
  console.log(products);
  return Array(products)
    .fill(0)
    .map((product, idx) => (
      <div key={idx} className="skeleton">
        <div className="top">
          <Skeleton height={200} style={{ width: "100%" }} />
        </div>
        <div className="bottom">
          <div className="title">
            <Skeleton width={90} heigh={25} />
          </div>
          <div className="subtitle">
            <Skeleton height={30} />
          </div>
          <div className="gift">
            <Skeleton width={70} height={15} />
          </div>
          <div className="gift">
            <Skeleton width={100} height={20} />
          </div>
          <div className="btns">
            <div className="add">
              <Skeleton width={200} height={40} />
            </div>
            <div className="delete">
              <Skeleton width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    ));
};

export default ProductSkeleton;

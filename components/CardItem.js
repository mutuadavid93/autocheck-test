export default function CardItem({ name, image }) {
  return (
    <div className="col-md-4 product-men mt-5">
      <div className="men-pro-item simpleCart_shelfItem">
        <div className="men-thumb-item text-center">
          <img src={image} alt="" className="fit-images" />
          {/* <span className="product-new-top">New</span> */}
        </div>
        <div className="item-info-product text-center border-top mt-4">
          <h4 className="pt-1">
            <a href="single.html">{name}</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

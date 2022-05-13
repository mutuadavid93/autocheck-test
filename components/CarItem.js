import Link from "next/link";

const formatCurrency = (amount, currency = "KSh") => {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency
  });
  return formatter.format(amount);
};

export default function CarItem({ car }) {
  const {
    id,
    title,
    imageUrl: image,
    marketplacePrice: newPrice,
    marketplaceOldPrice: oldPrice
  } = car;

  return (
    <div className="col-md-4 product-men mt-5">
      <div className="men-pro-item simpleCart_shelfItem">
        <Link href={`/car/${id}`}>
          <div className="men-thumb-item text-center">
            <img
              src={image}
              alt={title.toUpperCase() + " PICTURE"}
              className="fit-images"
            />
          </div>
        </Link>
        <div className="item-info-product text-center border-top mt-4">
          <h4 className="pt-1">
            <a href="single.html">{title}</a>
          </h4>
          <div className="info-product-price my-2">
            <span className="item_price">{formatCurrency(newPrice)}</span>
            <del>{formatCurrency(oldPrice)}</del>
          </div>
          <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            <Link href={`/car/${id}`} className="btn btn-info">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

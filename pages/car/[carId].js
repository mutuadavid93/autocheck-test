import { useState } from "react";

export default function CardDetails({ details }) {
  // const [inspectionItems, setInspectionItems] = useState([]);
  if (!details) return <p>Loading...</p>;

  const formatCurrency = (amount, currency = "KSh") => {
    var formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency
    });
    return formatter.format(amount);
  };

  const {
    carName,
    marketplacePrice: newPrice,
    marketplaceOldPrice: oldPrice,
    imageUrl,
    bodyType,
    transmission,
    fuelType,
    engineType,
    interiorColor,
    exteriorColor,
    websiteUrl,
    year,
    mileage,
    insured,
    state,
    country
  } = details;

  const currentPrice = formatCurrency(newPrice);
  const initialPrice = formatCurrency(oldPrice);

  return (
    <>
      <div className="page-head_agile_info_w3l page-head_agile_info_w3l-2"></div>

      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <div className="container">
            <ul className="w3_short">
              <li>
                <a href="index.html">Home</a>
                <i>|</i>
              </li>
              <li>{carName}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner-bootom-w3-agileits pt-5">
        <div className="container py-xl-4 py-lg-2">
          <div className="row">
            <div className="col-lg-5 col-md-8 single-right-left ">
              {/* Car Media Here */}
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={imageUrl}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
              <h3 className="mb-3">{carName}</h3>
              <p className="mb-3">
                <span className="item_price">{currentPrice}</span>
                <del className="mx-2 font-weight-light">{initialPrice}</del>
              </p>
              <div className="single-infoagile">
                <ul>
                  <li className="mb-3">Year: {year}</li>
                  <li className="mb-3">Mileage: {mileage}</li>
                  <li className="mb-3">Insured: {insured && "Yes"}</li>
                  <li className="mb-3">
                    Location: {state}, {country}
                  </li>
                </ul>
              </div>
              <div className="product-single-w3l">
                <ul className="mt-2">
                  <li className="mb-1">
                    {bodyType.name} | {transmission} | {fuelType}
                  </li>
                  <li className="mb-1">{engineType} Engine</li>
                  <li className="mb-1">
                    {exteriorColor} and {interiorColor} exterior and interior
                    colour respectively
                  </li>
                </ul>
                <p className="my-sm-4 my-3">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info"
                  >
                    Check it out
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Damaged Media */}
      <div className="faqs-w3l pb-sm-5 pb-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="w3-head mb-2">Damaged Media</h3>
          <div className="faq-w3agile">
            <ul className="faq pl-4">
              {/* The Damage */}
              {details.damageMedia.length &&
                details.damageMedia.map((dm) => {
                  return (
                    <li className="item2 mt-3 pl-2" key={dm.name}>
                      <a href="#" title="click here">
                        {dm.name}
                      </a>
                      <ul>
                        <li className="subitem1">
                          {/* The Inspection */}

                          <ul style={{ "listStyleType": "circle" }}>
                            {dm.inspectionItems.map((ins) => {
                              return (
                                <li className="item1 mt-3 pl-2" key={ins.name}>
                                  <a
                                    href="#"
                                    title="click here"
                                    style={{ "textTransform": "capitalize" }}
                                  >
                                    {ins.name} | {ins.condition}
                                  </a>
                                  <ul>
                                    <li className="subitem1">
                                      <p>{ins.comment}</p>

                                      <div className="damaged-media">
                                        {ins.medias.map((media, index) => {
                                          return (
                                            <img
                                              key={media.url + index}
                                              src={media.url}
                                              alt="..."
                                              className="rounded"
                                              width="200px"
                                            />
                                          );
                                        })}
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { carId } = params;

  const response = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/${carId}`
  );
  const details = await response.json();
  return {
    props: { details }
  };
}

export async function getStaticPaths() {
  return {
    // Only pre-load certain mostly visited pages
    paths: [{ params: { carId: "RmJJVxWAH" } }],
    fallback: true
  };
}

/* eslint-disable @next/next/no-img-element */

import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import DamagedMedia from "../../components/DamagedMedia";
const Carousel = dynamic(() => import("../../components/Carousel"), {
  ssr: false
});

export default function CardDetails({ details, carmedia }) {
  const [categoryName, setCetegoryName] = useState("");
  const [media, setMedia] = useState("");
  const [inspectionItems, setInspectionItems] = useState([]);
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);
  const medianame = useRef(null);

  useEffect(() => {
    if (media) {
      const item =
        inspectionItems && inspectionItems.find((insp) => insp.name === media);
      setResult(item);
    }
  }, [media, inspectionItems]);

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

  const handleCategoryChange = (event) => {
    setCetegoryName(event.target.value);
    // Update second dropdown
    const mediaNames = details.damageMedia.find(
      (m) => m.name === event.target.value
    );
    setShow(true); // show dropdown
    setInspectionItems(mediaNames.inspectionItems);
    setMedia(mediaNames.inspectionItems[0].name);
  };

  const handleInspectionChange = (event) => {
    setMedia(event.target.value);
    const item =
      inspectionItems &&
      inspectionItems.find((insp) => insp.name === event.target.value);
    setResult(item);
  };

  let damage = null;
  if (show) {
    damage = (
      <select
        name="medianame"
        id="medianame"
        className="medianame"
        onChange={handleInspectionChange}
        value={media}
        ref={medianame}
      >
        {inspectionItems.length &&
          inspectionItems.map((ins, index) => (
            <option value={ins.name} key={index}>
              {ins.name}
            </option>
          ))}
      </select>
    );
  }

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
                    {bodyType?.name} | {transmission} | {fuelType}
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
            {/* First Dropdown */}
            <select
              name="categoryname"
              id="categoryname"
              className="mr-3"
              onChange={handleCategoryChange}
              value={categoryName}
            >
              <option value="">Choose media category</option>
              {details?.damageMedia?.length &&
                details.damageMedia.map((category) => (
                  <option value={category.name} key={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
            {damage}
            {/* Initial Layout */}
            <DamagedMedia result={result} />

            <h3 className="w3-head my-2">Sample Vehicle Media</h3>

            <Carousel carmedia={carmedia} />
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

  // Fetch car media
  // TODO:: Swicth car id to a dynamic one.
  const carMedia = await fetch(
    `https://api-prod.autochek.africa/v1/inventory/car_media?carId=R1nVTV4Mj`
  );
  const carmedia = await carMedia.json();

  return {
    props: { details, carmedia }
  };
}

export async function getStaticPaths() {
  return {
    // Only pre-load certain mostly visited pages
    paths: [{ params: { carId: "RmJJVxWAH" } }],
    fallback: true
  };
}

import AllCarsList from "../components/AllCarsList";

export default function AllCars({ allCars }) {
  console.log("---- all cars ... ", allCars);
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
              <li>All Cars</li>
            </ul>
          </div>
        </div>
      </div>

      <AllCarsList allcars={allCars} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/car/search"
  );
  const payload = await response.json();
  return {
    props: {
      allCars: payload
    }
  };
}

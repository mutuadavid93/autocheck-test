import CarItem from "./CarItem";

export default function AllCarsList({ allcars }) {
  // console.log("--- ", allcars);
  return (
    <div className="ads-grid  py-sm-5 py-4">
      <div className="container py-xl-4 py-lg-2">
        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
          <span>T</span>v<span>&</span>
          <span>A</span>ppliances
        </h3>

        <div className="row">
          <div className="agileinfo-ads-display col-lg-12">
            <div className="wrapper">
              {/* <!-- first section --> */}
              <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                <h3 className="heading-tittle text-center font-italic">
                  Car Catalogue
                </h3>
                <div className="row">
                  {allcars.result.map((car) => (
                    <CarItem car={car} key={car.id} />
                  ))}
                </div>
              </div>
              {/* <!-- //first section --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

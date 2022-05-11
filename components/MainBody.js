import CardItem from "./CardItem";

export default function MainBody({ popularmakes }) {
  // console.log("---- ", popularmakes.makeList);
  return (
    <div className="ads-grid py-sm-5 py-4">
      <div className="container py-xl-4 py-lg-2">
        {/* <!-- tittle heading --> */}
        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
          <span>O</span>ur
          <span>N</span>ew
          <span>P</span>roducts
        </h3>
        {/* <!-- //tittle heading --> */}
        <div className="row">
          {/* <!-- product left --> */}
          <div className="agileinfo-ads-display col-lg-12">
            <div className="wrapper">
              {/* <!-- first section --> */}
              <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                <h3 className="heading-tittle text-center font-italic">
                  Popular Makes
                </h3>
                <div className="row">
                  {popularmakes.makeList.map((item) => (
                    <CardItem
                      key={item.id}
                      name={item.name}
                      image={item.imageUrl}
                    />
                  ))}
                </div>

                {/* <div className="d-inline-flex"> */}
                  <button className="button btn mt-5 auto-btn">
                    List All Cars
                  </button>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* <!-- //product left --> */}
        </div>
      </div>
    </div>
  );
}

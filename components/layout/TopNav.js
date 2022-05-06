export default function TopNav() {
  return (
    <div className="agile-main-top">
      <div className="container-fluid">
        <div className="row main-top-w3l py-2">
          <div className="col-lg-4 header-most-top">
            <p className="text-white text-lg-left text-center">
              Offer Zone Top Deals & Discounts
              <i className="fas fa-shopping-cart ml-1"></i>
            </p>
          </div>
          <div className="col-lg-8 header-right mt-lg-0 mt-2">
            {/* <!-- header lists --> */}
            <ul>
              <li className="text-center border-right text-white">
                <a
                  className="play-icon popup-with-zoom-anim text-white"
                  href="#small-dialog1"
                >
                  <i className="fas fa-map-marker mr-2"></i>Select Location
                </a>
              </li>
              <li className="text-center border-right text-white">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="text-white"
                >
                  <i className="fas fa-truck mr-2"></i>Track Order
                </a>
              </li>
              <li className="text-center border-right text-white">
                <i className="fas fa-phone mr-2"></i> 001 234 5678
              </li>
              <li className="text-center border-right text-white">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="text-white"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i> Log In{" "}
                </a>
              </li>
              <li className="text-center text-white">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  className="text-white"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>Register{" "}
                </a>
              </li>
            </ul>
            {/* <!-- //header lists --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

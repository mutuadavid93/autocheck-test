import { useRouter } from "next/router";

export default function SearchNav() {
  const router = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <div className="header-bot">
      <div className="container">
        <div className="row header-bot_inner_wthreeinfo_header_mid">
          {/* <!-- logo --> */}
          <div className="col-md-3 logo_agile">
            <h1 className="text-center">
              <a
                href="#"
                onClick={(event) => handleClick(event, "/")}
                className="font-weight-bold font-italic"
              >
                <img src="/images/logo2.png" alt=" " className="img-fluid" />
                Auto Check
              </a>
            </h1>
          </div>
          {/* <!-- //logo --> */}
          {/* <!-- header-bot --> */}
          <div className="col-md-9 header mt-4 mb-md-0 mb-4">
            <div className="row">
              {/* <!-- search --> */}
              <div className="col-10 agileits_search">
                <form className="form-inline" action="#" method="post">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    required
                  />
                  <button className="btn my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
              {/* <!-- //search --> */}
              {/* <!-- cart details --> */}
              <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                  <form action="#" method="post" className="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      className="btn w3view-cart"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      <i className="fas fa-cart-arrow-down"></i>
                    </button>
                  </form>
                </div>
              </div>
              {/* <!-- //cart details --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

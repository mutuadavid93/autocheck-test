export default function MainNav() {
  return (
    <div className="navbar-inner">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="agileits-navi_search">
            <form action="#" method="post">
              <select
                id="agileinfo-nav_search"
                name="agileinfo_search"
                className="border"
                required=""
              >
                <option value="">All Categories</option>
                <option value="Televisions">Televisions</option>
                <option value="Headphones">Headphones</option>
                <option value="Computers">Computers</option>
                <option value="Appliances">Appliances</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                <option value="iPad & Tablets">iPad & Tablets</option>
                <option value="Cameras & Camcorders">
                  Cameras & Camcorders
                </option>
                <option value="Home Audio & Theater">
                  Home Audio & Theater
                </option>
              </select>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center mr-xl-5">
              <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="index.html">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a className="nav-link" href="product.html">
                  New Arrivals
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/milehi.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo_transparent_white.png")}
            ></img>
            <h1 className="h1-seo">MILE HI BOOKING</h1>
            <h3>Professional live music booking services in the mile high city.</h3>
          </div>
          <h6 className="category category-absolute">
            <a style={{fontSize: "18px"}} href = "mailto: kevin@milehibooking.com">Contact us today</a>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;

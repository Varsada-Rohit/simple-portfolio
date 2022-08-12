import React from "react";
import Arrow from "../assets/Arrow";

export const LinkText = ({ name, url }) => (
  <a className="social-medial me-5" href={url} target={"_blank"}>
    {name}
    <Arrow
      color={"#fff"}
      width={11}
      height={13}
      style={{ marginBottom: 5, marginLeft: 8 }}
    />
  </a>
);

function Footer() {
  return (
    <div className="bg-black text-white p-2">
      <div className="container p-5 m-5 mobile-footer">
        <div className="footer-heading">
          Looking for some one to join an awesome venture
        </div>
        <div className="footer-sub-heading">
          Let’s Connect
          <Arrow
            color={"#fff"}
            width={20}
            height={22}
            className={"lets-connect-arrow"}
            style={{ marginBottom: 12, marginLeft: 15 }}
          />
        </div>
        <div className="d-flex">
          <LinkText
            name={"LinkedIn"}
            url={"https://www.linkedin.com/in/rohit-varsada-5848a31b4/"}
          />
          <LinkText
            name={"Instagram"}
            url="https://www.instagram.com/patel_.rohit/"
          />
          {/* <LinkText name={"Mail"} /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;

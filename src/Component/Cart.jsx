import React from "react";
import "../../public/css/style.css";

const Cart = ({ Cartdata }) => {
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card">
          <img
            src={Cartdata.urlToImage?Cartdata.urlToImage:`/Image/Noimage.webp`}
            className="card-img-top"
            height={200}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{Cartdata.title}</h5>
            <div className="cart-source">
              <p>{new Date(Cartdata.publishedAt).toLocaleDateString()}</p>
              <p>{Cartdata.source?.name}</p>
            </div>
            <p className="card-text">{Cartdata.description}</p>
            <a
              href={Cartdata?.url}
              target="_blank"
              rel="noreferrer"
              className="w-100 text-center btn btn-primary background"
            >
              Read Full Artical
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

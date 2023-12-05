import React from "react";
import AffiliateMainCard from "./Cards/AffiliateMainCard";
import AffiliateCard from "./Cards/AffiliateCard";
import useSettings from "../hooks/useSettings";

export default function AffiliateManagementDashboard() {
  const { themeMode } = useSettings();
  return (
    <>
      <div
        className={`ms-lg-5 CurrenciesContainer p-4 ${themeMode === "dark" && "bg-dark"
          }`}
      >
        <div className="head px-4">
          <h2 className="fs-3 my-1 mt-3 d-block text-uppercase">Affiliate management dshboard</h2>
          {/* <div className="d-flex justify-content-between filter">
            <p className="fs-6 d-block text-uppercase m-0">by fundamental</p>
            <ul className="list-unstyled list-style-2">
              <li>
                <a href="#!">
                  <i className="far fa-star"></i> WATCHLIST
                </a>
              </li>
              <li>
                <a href="#!">CATEGORIES</a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-list-ul"></i> FILTERS
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="CurrenciesContainer-Offset">
          <AffiliateCard />
        </div>
        <div className="head px-4 mt-5">
          <div className="d-flex justify-content-between filter">
            <h4 className="fs-6 d-block text-uppercase m-0">All Affiliates</h4>
            <ul  className={`list-unstyled list-style-3 p-1 ${themeMode === "dark" && "bg-dark"
              }`}>
              <li>
                <a href="#!"><i className="fas fa-bars"></i></a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-list-ul"></i>
                </a> 
              </li>
            </ul>
          </div>
        </div>
        <div className="CurrenciesContainer-Offset">
          <AffiliateMainCard texClass={"text-warning"} count={1}/>
          <AffiliateMainCard texClass={"text-primary"} count={2}/>
          <AffiliateMainCard texClass={"text-success"} count={3}/>
          <AffiliateMainCard texClass={"text-warning"} count={4}/>
          <AffiliateMainCard texClass={"text-primary"} count={5}/>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import {
  getSubscriptionData,
  updateSubscriptionData,
} from "../api/subscriptions";
import useSettings from "../hooks/useSettings";

const SubscriptionManagementDashboard = () => {
  const { themeMode } = useSettings();
  const [json, setJson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubscriptionData(json).then((res) => {
      console.log(res?.data);
      if (res?.data?.success) {
        getSubscriptionData().then((res) => {
          if (res?.data?.data) {
            setJson(JSON.stringify(res?.data?.data, null, 8));
          }
        });
      }
    });
  };

  useEffect(() => {
    getSubscriptionData().then((res) => {
      if (res?.data?.data) {
        setJson(JSON.stringify(res?.data?.data, null, 8));
      }
    });
  }, []);
  return (
    <div>
      <div
        className={`ms-lg-5 CurrenciesContainer p-4 ${
          themeMode === "dark" && "bg-dark"
        }`}
      >
        <div className="head px-4">
          <h2 className="fs-3 my-1 mt-3 d-block text-uppercase">
            Subscription management dshboard
          </h2>
        </div>
        <div className="CurrenciesContainer-Offset">
          {/* <AffiliateCard /> */}
        </div>
        <div className="head px-4 mt-5">
          <div className="d-flex justify-content-between filter">
            <h4 className="fs-6 d-block text-uppercase m-0">
              Update Subscription Data
            </h4>
          </div>
          {json && (
            <form className="my-5" onSubmit={handleSubmit}>
              <textarea
                value={json}
                cols={120}
                rows={40}
                onChange={(e) => setJson(e.target.value)}
              />
              <div className="d-flex justify-content-center m-5">
                <button type="submit" className="btn btn-dark btn-block btn-lg">
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="CurrenciesContainer-Offset"></div>
      </div>
    </div>
  );
};

export default SubscriptionManagementDashboard;

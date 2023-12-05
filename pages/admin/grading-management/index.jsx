import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { getCoins, searchCoins } from "../../../api/getCoins";
import CoinModal from "../../../components/GradingManagement/CoinModal";
import AdminSidebar from "../../../components/AdminSidebar";

const GradingManagementContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [coins, setCoins] = useState(false);
  const [limit, setLimit] = useState(25);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleGetCoins();
  }, [limit]);

  const handleGetCoins = async () => {
    try {
      let res = await searchCoins(limit, search);
      if (res?.data?.data?.length &&  res?.data?.data) {
        setCoins(false);
        setCoins(res?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleShowMore = () => {
    setLimit(limit + 25);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = async (e) => {
    setCoins([])
    e.preventDefault();
    setLimit(25);
    try {
      let searchResult = await searchCoins(limit, search);
      if (searchResult?.data) {
        setCoins(searchResult?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Head>
        <title>Grading Management</title>
      </Head>
        <CoinModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          selectedCoin={selectedCoin}
        />
        <div className="d-flex justify-content-center row mx-4">
          <div className="d-flex justify-content-end">
            <form onSubmit={handleSubmit}>
              <input
                className="m-4 border-none rounded-pill py-2 px-4"
                placeholder="Search currencies"
                value={search}
                onChange={handleSearch}
              />
              <button type="submit" className="btn btn-dark btn-sm">
                Search
              </button>
            </form>
          </div>
          {coins && coins.length ? (
            coins.map((coin, index) => {
              return (
                <div
                  key={index}
                  className="col-2 bg-white m-4 text-center cursor-pointer border shadow-lg"
                  onClick={() => {
                    setSelectedCoin(coin?.currency_id);
                    handleOpen();
                  }}
                >
                  <p className="py-2">{coin?.name}</p>
                  <div className="d-flex justify-content-center p-4 border-bottom border-top my-2">
                    <Image src={coin?.logo_url ? coin?.logo_url : "/coins.png"} alt="" width={120} height={120} />
                  </div>
                  <p>{coin?.currency}</p>
                </div>
              );
            })
          ) : (
            <div className="m-5 d-flex justify-content-center">
              <div className="spinner-border  text-white bg-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        {coins && coins.length && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-lg btn-block btn-dark"
              onClick={handleShowMore}
            >
              Load More
            </button>
          </div>
        )}
    </div>
  );
};

export default GradingManagementContainer;

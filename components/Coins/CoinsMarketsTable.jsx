import React from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import styles from "./CoinsMarketsTable.module.scss";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const MOCK_MARKETS_DATA = [
  {
    id: 1,
    name: "Binance",
    iconURL: "/images/logos/binance.svg",
    pairs: "BTC/USDT",
    price: "4367.82",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 2,
    name: "Coinbase Exchange",
    iconURL: "/images/logos/coinbase.png",
    pairs: "BTC/USDT",
    price: "4689.98",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 3,
    name: "Huobi Global",
    iconURL: "/images/logos/huobi.png",
    pairs: "BTC/USDT",
    price: "4364.42",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 4,
    name: "Binance",
    iconURL: "/images/logos/binance.svg",
    pairs: "BTC/USDT",
    price: "4367.82",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 5,
    name: "Coinbase Exchange",
    iconURL: "/images/logos/coinbase.png",
    pairs: "BTC/USDT",
    price: "4689.98",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 6,
    name: "Huobi Global",
    iconURL: "/images/logos/huobi.png",
    pairs: "BTC/USDT",
    price: "4364.42",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 7,
    name: "Binance",
    iconURL: "/images/logos/binance.svg",
    pairs: "BTC/USDT",
    price: "4367.82",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 8,
    name: "Coinbase Exchange",
    iconURL: "/images/logos/coinbase.png",
    pairs: "BTC/USDT",
    price: "4689.98",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 9,
    name: "Huobi Global",
    iconURL: "/images/logos/huobi.png",
    pairs: "BTC/USDT",
    price: "4364.42",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 10,
    name: "Binance",
    iconURL: "/images/logos/binance.svg",
    pairs: "BTC/USDT",
    price: "4367.82",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 11,
    name: "Coinbase Exchange",
    iconURL: "/images/logos/coinbase.png",
    pairs: "BTC/USDT",
    price: "4689.98",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
  {
    id: 12,
    name: "Huobi Global",
    iconURL: "/images/logos/huobi.png",
    pairs: "BTC/USDT",
    price: "4364.42",
    plus2Depth: "29674740.56",
    minus2Depth: "15016925.83",
    volume: "1827541809",
    volumePercentage: "10.00",
    liquidity: "875",
    lastTraded: "Recently",
    score: "active",
  },
];

const CoinsMarketsTable = () => {
  const renderRow = (row) => {
    return (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row">
          <Image src={row.iconURL} width="25" height="25" />
          <span className="ms-2">{row.name}</span>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.pairs}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.price}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.plus2Depth}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.minus2Depth}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.volume}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.volumePercentage}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.liquidity}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.lastTraded}
        </TableCell>
        <TableCell>
          <div
            className={row.score === "active" ? styles.activeScore : ""}
          ></div>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># </TableCell>
            <TableCell>
              <Typography variant="body2">Exchange</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Pairs</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Price</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">+2% Depth</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">-2% Depth</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Volume</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Volume %</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Liquidity</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Last Traded</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2">Trust Score</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MOCK_MARKETS_DATA.map((rowData) => renderRow(rowData))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinsMarketsTable;

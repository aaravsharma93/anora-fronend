import React, { useCallback, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import CoinsAnalysis from "./CoinsAnalysis";
import CoinsMarketsTable from "./CoinsMarketsTable";
import CoinsOverviewChart from "./CoinsOverviewChart";
import CoinsPricePrediction from "./CoinsPricePrediction";
import CoinsRatings from "./CoinsRatings";
import CoinsTrending from "./CoinsTrending";
import styles from "./CoinPageTabs.module.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CoinPageTabs = () => {
  const [boundingRect, setBoundingRect] = useState({ width: 0, height: 0 });
  const graphRef = useCallback((node) => {
    if (node !== null) {
      setBoundingRect(node.getBoundingClientRect());
    }
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-5">
      <Box sx={{ width: "100%" }} ref={graphRef}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Markets" {...a11yProps(1)} />
            <Tab label="Analysis section" {...a11yProps(2)} />
            <Tab label="Price Prediction" {...a11yProps(3)} />
            <Tab label="Trending" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CoinsOverviewChart width={boundingRect.width} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CoinsMarketsTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CoinsAnalysis />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CoinsPricePrediction width={boundingRect.width} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CoinsTrending />
        </TabPanel>
      </Box>
    </div>
  );
};

export default CoinPageTabs;
import React from "react";
import styles from "./CoinsAnalysis.module.scss";
import { Col, Row } from "react-bootstrap";
import CoinsRatings from "./CoinsRatings";
import GradesSummaryCard from "../News/GradesSummaryCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import useSettings from "../../hooks/useSettings";

const MOCK_NEWS_SUMMARIES = [
  {
    id: 1,
    title: "Which networks is this token on?",
    content: "Many or different pegged tokens such as wbtc",
    imageURL: "/images/analysis/network.png",
  },
  {
    id: 2,
    title: "What  ecosystem is the coin?",
    content: "DeFi-Currency",
    imageURL: "/images/analysis/ecosystem.png",
  },
  {
    id: 3,
    title: "What is the main website url link?",
    content: "https://bitcoin.org/en",
    imageURL: "/images/analysis/website-url.png",
  },
  {
    id: 4,
    title: "Other comments about social media following or marketing?",
    content: "Many or different pegged tokens such as wbtc",
    imageURL: "/images/analysis/social-media.png",
  },
];

const useStyles = makeStyles((theme) => {
  return {
    newsContainer: {
      background: (props) =>
        props.themeMode === "light" ? "transparent" : "rgba(255,255,255,0.04)",
      padding: theme.spacing(1),
    },
  };
});

const CoinsAnalysis = () => {
  const { themeMode } = useSettings();
  const classes = useStyles({ themeMode });

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column">
        <Typography variant="h5">General and grades </Typography>
        <Box className={classes.newsContainer} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {MOCK_NEWS_SUMMARIES.map((summary) => (
              <Grid item xs={6} key={summary.id}>
                <GradesSummaryCard
                  title={summary.title}
                  content={summary.content}
                  imageURL={summary.imageURL}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <CoinsRatings />
      </Box>
    </Box>
  );
};

export default CoinsAnalysis;

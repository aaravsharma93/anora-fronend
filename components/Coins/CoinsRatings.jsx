import React from "react";
import Image from "next/image";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import styles from "./CoinsRatings.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import useSettings from "../../hooks/useSettings";

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      background: (props) =>
        props.themeMode === "light" ? "#F6F8FD" : "rgba(255,255,255,0.04)",
      borderRadius: "10px",
      alignSelf: "stretch",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2, 1),
    },
    overalCircular: {
      maxWidth: "180px",
      background:
        "linear-gradient(180deg,rgba(45, 239, 162, 0.33) 0%,rgba(10, 10, 10, 0) 100%)",
      borderRadius: "50%",
    },
  };
});

const CoinsRatings = () => {
  const { themeMode } = useSettings();
  const classes = useStyles({ themeMode });

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} className="d-flex flex-column">
        <Box className={classes.cardContainer}>
          <Typography variant="h5">overall grade</Typography>
          <Box className={classes.overalCircular} sx={{ mt: 2 }}>
            <CircularProgressbarWithChildren
              value={100}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3} className="d-flex flex-column">
        <Box className={classes.cardContainer}>
          <Typography variant="overline" textAlign="left" width="100%">
            Product Notes
          </Typography>
          <Typography variant="body2">
            Revolutionary tokenomics revolved around the halving events, making
            it the scarcest, most transferable store of value ever created
          </Typography>
          <Button className="bg-dark mx-auto mt-auto" variant="dark">
            See General
          </Button>
        </Box>
        <Box className={classes.cardContainer} sx={{ mt: 2 }}>
          <Typography variant="overline">4. Marketing</Typography>
          <div className={styles.itemCircular}>
            <CircularProgressbarWithChildren
              value={90}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
                trailColor: "transparent",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </div>
          <Button className="bg-dark mx-auto mt-3" variant="dark">
            See Note
          </Button>
        </Box>
      </Grid>
      <Grid item xs={3} className="d-flex flex-column">
        <Box className={classes.cardContainer}>
          <Typography variant="overline">2. Tokenomics</Typography>
          <div className={styles.itemCircular}>
            <CircularProgressbarWithChildren
              value={90}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
                trailColor: "transparent",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </div>
          <Button className="bg-dark mx-auto mt-3" variant="dark">
            See Note
          </Button>
        </Box>
        <Box className={classes.cardContainer} sx={{ mt: 2 }}>
          <Typography variant="overline">5. Security</Typography>
          <div className={styles.itemCircular}>
            <CircularProgressbarWithChildren
              value={90}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
                trailColor: "transparent",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </div>
          <Button className="bg-dark mx-auto mt-3" variant="dark">
            See Note
          </Button>
        </Box>
      </Grid>
      <Grid item xs={3} className="d-flex flex-column">
        <Box className={classes.cardContainer} sx={{ mt: 2 }}>
          <Typography variant="overline">3. Team</Typography>
          <div className={styles.itemCircular}>
            <CircularProgressbarWithChildren
              value={90}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
                trailColor: "transparent",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </div>
          <Button className="bg-dark mx-auto mt-3" variant="dark">
            See Note
          </Button>
        </Box>
        <Box className={classes.cardContainer} sx={{ mt: 2 }}>
          <Typography variant="overline">6. Liquidity</Typography>
          <div className={styles.itemCircular}>
            <CircularProgressbarWithChildren
              value={90}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: "#2DEFA2",
                trailColor: "transparent",
              })}
            >
              <div className="text-light fs-1 fw-bold">A</div>
              <Box display="flex">
                <span className="text-success">100</span>
                <Typography>/100</Typography>
              </Box>
            </CircularProgressbarWithChildren>
          </div>
          <Button className="bg-dark mx-auto mt-3" variant="dark">
            See Note
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoinsRatings;

import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";
import { ArrowRightAltSharp } from "@material-ui/icons";

import useSettings from "../../hooks/useSettings";


export default function NewsCard() {
  const { themeMode } = useSettings();

  return (
    <Card className={` middleCard  ${themeMode === "dark" && "bg-dark"}`}>
      <CardContent style={{ display: "flex", flexDirection: "column" }}>
      <div><Typography style={styles.cardHeader}>News</Typography></div>
      <br/>
        <div >
          <arguments style={styles.cardText}>
            {" "}
            Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
          </arguments>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: 7, fontSize: 13, color: "#989797" }}
          >
            2 hours ago .by{" "}
            <a href="/" style={{ curser: "pointer", color: "blue" }}>
              Dave Johnson
            </a>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

const styles = {
  cardStyle: {
    width: "464hv",
    height: "150hv",
    borderRadius: 25,
    Padding: "24px, 0px, 24px, 24px",
    textAlign: "left",
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 7,
    textAlign: "center",
    fontSize: 13,
    borderRadius: 5,
    color: "black",
    backgroundColor: "#F7931A",
    width: "20hv",
    position: "absolute",
    paddingRight:5,
    paddingLeft:5,
    marginTop: 5,
    
    
  },
  cardText: {
    fontSize: 18,
    paddingRight: 10,
  
  },
};

import * as React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import {Button} from "@material-ui/core";
import {ArrowRightAltSharp} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from '../../../hooks/useSettings';
SalesCard.propTypes = {
    imageUrl: PropTypes.string,
};

export default function SalesCard({imageUrl}) {
    const classes = useStyles();
    const {themeMode} = useSettings();
    return (
        <Card style={styles.cardStyle} className={themeMode==='dark'? classes.darkTheme:classes.themeBack}>
            <Typography style={styles.cardHeader}>Market Update</Typography>
            <Image width="500%" height="214px" src={imageUrl}/>

            <div style={{display: "flex", flexDirection: "row"}}>
                <CardContent style={{textAlign: "left",color:themeMode==='dark'?'#fff':'#000'}}>
                    <h1 style={styles.cardText}>
                        Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
                    </h1>

                    <Typography paragraph>
                        CEO Arthit Nanthawittaya said the acquisition was based on the
                        growth of businesses in the digital asset space over the last two
                        years and the expected value in the long term.
                    </Typography>

                    <Typography paragraph>
                        According to a Tuesday announcement, Siam Commercial Bank’s SCB...{" "}
                    </Typography>

                    <div
                        style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{marginTop: 15, fontSize: 13, color: "#989797"}}
                            >
                                2 hours ago .by{" "}
                                <a href="/" style={{curser: "pointer", color: "#448cfd", textDecoration: "none"}}>
                                    Dave Johnson
                                </a>
                            </Typography>
                        </div>
                        <div>
                            <Button size="small" style={{fontSize: 10, color: "#448CFD"}}>
                                Read more <ArrowRightAltSharp/>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}

const styles = {
    cardStyle: {
        width: "100%",
        maxHeight: "600px",
        borderRadius: 25,
        Padding: "24px, 0px, 24px, 24px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
        lineHeight: "28px",
        textAlign: "left",
        marginBottom: 15,
    },
    cardHeader: {
        textTransform: "uppercase",
        padding: "1px",
        margin: "18px 10px 7px 18px",
        textAlign: "center",
        fontSize: 13,
        borderRadius: 8,
        color: "#fff",
        background: "linear-gradient(129.75deg, #2BF2A3 -21.67%, #59C168 111.27%), #C4C4C4",
        width: "8%",
        position: "absolute",
        zIndex: "1",
    },
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 10,
    },
};

const useStyles = makeStyles((theme) => ({
        themeBack:{
            background:'#fff'},
        darkTheme:{
            background:'#000'
        }
    }
))
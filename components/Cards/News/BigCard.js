import * as React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {ArrowRightAltSharp} from "@material-ui/icons";
import Image from "next/image";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from "../../../hooks/useSettings";
BigCard.propTypes = {
    imageUrl: PropTypes.string,
};

export default function BigCard({imageUrl}) {
    const classes = useStyles();
    const {themeMode} = useSettings();

    return (
        <Card style={styles.cardStyle} className={themeMode==='dark'? classes.darkTheme:classes.themeBack} >
            <Typography style={styles.cardHeader}>News</Typography>
            <Image src={imageUrl} width="750px" height="357px"/>

            <div className='d-flex justify-content-center align-content-center flex-column align-items-center' >
                <CardContent style={{alignSelf: "center", width:'90%',color:themeMode==='dark'?'#fff':'#000'}}>
                    <h1 style={styles.cardText}>
                        {" "}
                        Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
                    </h1>

                    <Typography paragraph style={{color:themeMode==='dark'?'#fff':'#000'}}>
                        CEO Arthit Nanthawittaya said the acquisition was based on the
                        growth of businesses in the digital asset space over the last two
                        years and the expected value in the long term.
                    </Typography>
                    <Typography paragraph>
                        CEO Arthit Nanthawittaya said the acquisition was based on the
                        growth of businesses in the digital asset space over the last two
                        years and the expected value in the long term. Thailand’s oldest
                        bank plans to become the majority shareholder of one the largest
                        crypto exchanges in the country
                    </Typography>
                    <Typography paragraph>
                        According to a Tuesday announcement, Siam Commercial Bank’s SCB...{" "}
                    </Typography>

                    <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{marginTop: 15, fontSize: 13, color: "#989797"}}
                            >
                                2 hours ago .by{" "}
                                <a href="/" style={{curser: "pointer", color: "#448CFD", textDecoration: "none"}}>
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
        height: "690px",
        borderRadius: '35px',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
        lineHeight: "28px",
        textAlign: "left",
        marginBottom: '15px',
    },
    cardHeader: {
        textTransform: "uppercase",
        padding: "1px",
        marginLeft: "18px",
        marginBottom: '7px',
        textAlign: "center",
        fontSize: '13px',
        borderRadius: '8px',
        color: "#fff",
        background: "linear-gradient(135deg, #F7931A 0%, #F3BA2F 100%), #C4C4C4",
        width: "5%",
        position: "absolute",
        marginTop: '18px',
        zIndex: "1",
    },
    cardText: {
        fontSize: '20px',
        fontWeight: "bold",
        paddingRight: '10px',
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
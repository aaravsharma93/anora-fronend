import * as React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Button, CardActions} from "@material-ui/core";
import {ArrowRightAltSharp} from "@material-ui/icons";
import Image from "next/image";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from "../../../hooks/useSettings";
LargeAdCard.propTypes = {
    imageUrl: PropTypes.string
}

export default function LargeAdCard({imageUrl}) {
    const classes = useStyles();
    const {themeMode} = useSettings();

    return (
        <Card style={styles.cardStyle} className={themeMode==='dark'? classes.darkTheme:classes.themeBack}>
            <Typography style={styles.cardHeader}>Market Update</Typography>
            <Image src={imageUrl} width="355px" height="214px"/>
            <CardContent style={{width:'90%',alignSelf:'center',color:themeMode==='dark'?'#fff':'#000'}} >
                <arguments style={styles.cardText}>
                    Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
                </arguments>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                        marginTop: 15,
                        fontSize: 13,
                        color: "#989797",
                        lineHeight: "92%",
                    }}
                >
                    2 hours ago .by{" "}
                    <a href="/" style={{curser: "pointer", color: "#448CFD", textDecoration: "none"}}>
                        Dave Johnson
                    </a>
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" style={styles.cardAction}>
                    Read more <ArrowRightAltSharp/>
                </Button>
            </CardActions>
        </Card>
    );
}

const styles = {
    cardStyle: {
        width: "100%",
        Height: "450px",
        borderRadius: 25,
        Padding: "24px, 0px, 24px, 24px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
        lineHeight: "28px",
        textAlign: "left",
        marginBottom: 15, display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        position: "relative"
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
        width: "35%",
        position: "absolute",
        zIndex: "1",
        top:0,
        left:0

    },
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 10,
    },
    cardAction: {fontSize: 10, color: "#448CFD", marginLeft: "5px"}
};
const useStyles = makeStyles((theme) => ({
        themeBack:{
            background:'#fff'},
        darkTheme:{
            background:'#000'
        }
    }
))
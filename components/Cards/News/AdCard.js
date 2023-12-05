import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Button, CardActions} from "@material-ui/core";
import {ArrowRightAltSharp} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from "../../../hooks/useSettings";
export default function NewsCard() {
    const classes = useStyles();
    const {themeMode} = useSettings();
    return (
        <Card style={styles.cardStyle} className={themeMode==='dark'? classes.darkTheme:classes.themeBack}>
            <CardContent style={{width:'90%',alignSelf:'center',color:themeMode==='dark'?'#fff':'#000'}}>
                <Typography style={styles.cardHeader}>market News</Typography>

                <arguments style={styles.cardText}>
                    {" "}
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
        height: "260px",
        borderRadius: 25,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
        lineHeight: "28px",
        marginBottom: 15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',

    },
    cardHeader: {
        textTransform: "upperCase",
        marginBottom: 7,
        padding: "2px",
        textAlign: "center",
        fontSize: 11,
        borderRadius: 8,
        color: "#fff",
        width: "35%",
        background: "linear-gradient(131.77deg, #B264E1 -13.52%, #3A85FC 131.6%), #C4C4C4",
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

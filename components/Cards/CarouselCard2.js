import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from '../../hooks/useSettings';
export default function NewsCard() {
    const classes = useStyles();
    const {themeMode} = useSettings();
    return (
        <Card style={styles.cardStyle} className={themeMode==='dark'? classes.darkTheme:classes.themeBack}>
            <CardContent style={{display: "flex", flexDirection: "row",color:themeMode==='dark'?'#fff':'#000' }}>
                <Image height="100%" width="170%" src="/unsplash_8zBi9ktYaX8.png"/>
                <div style={{marginLeft: 10}}>
                    <arguments style={styles.cardText}>
                        {" "}
                        Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
                    </arguments>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{marginTop: 7, fontSize: 13, color: "#989797"}}
                    >
                        2 hours ago .by{" "}
                        <a href="/" style={{curser: "pointer", color: "blue"}}>
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
        width: "95%",
        height: "150px",
        borderRadius: 25,
        Padding: "24px, 0px, 24px, 24px",
        textAlign: "left",
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2.1%',
        '@media(min-width:900)': {
            width: "464px",
            marginLeft: '0%',

        }
    },
    cardHeader: {
        marginBottom: 7,
        textAlign: "center",
        fontSize: 11,
        borderRadius: 5,
        color: "white",
        backgroundColor: "#B264E1",
        width: "40%",
    },
    cardText: {
        fontSize: 16,
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
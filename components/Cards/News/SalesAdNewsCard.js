import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button, CardActions} from '@material-ui/core';
import {ArrowRightAltSharp} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from '../../../hooks/useSettings';

export default function NewsCard() {
    const classes = useStyles();
    const {themeMode} = useSettings();
    return (
        <Card style={styles.cardStyle} className={themeMode === 'dark' ? classes.darkTheme : classes.themeBack}>
            <CardContent style={{color: themeMode === 'dark' ? '#fff' : '#000'}}>
                <Typography style={styles.cardHeader}>
                    News
                </Typography>

                <arguments style={styles.cardText}> Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub
                </arguments>
                <div
                    style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{marginTop: 15, fontSize: 12, color: "#989797"}}
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
        </Card>
    );
}

const styles = {
    cardStyle: {
        width: "100%",
        height: "140px",
        borderRadius: 25,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
        lineHeight: "28px",
        textAlign: 'left',
        marginBottom: 15,
        paddingBottom: '30px !important'


    },
    cardHeader: {
        marginBottom: 7,
        textAlign: "center",
        fontSize: 11,
        borderRadius: 5,
        color: "white",
        padding: "2px",
        background: "linear-gradient(135deg, #F7931A 0%, #F3BA2F 100%), #C4C4C4",
        width: "10%"
    },
    cardText: {
        fontSize: '14px',
        fontWeight: "bold",
        paddingRight: 10,

    }
}


const useStyles = makeStyles((theme) => ({
        themeBack: {
            background: '#fff'
        },
        darkTheme: {
            background: '#000'
        }
    }
))

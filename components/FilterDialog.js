import React from 'react';
import {Avatar, Button, Chip, Dialog, Grid, IconButton, makeStyles, Slide, Typography} from "@material-ui/core";
import {Cached, Close, DeleteOutlined, KeyboardArrowDown} from "@material-ui/icons";
import classNames from "classnames";
import useSettings from "../hooks/useSettings";

const useStyles = makeStyles(() => ({
    header: {
        fontWeight: "bold",
        fontSize: 20
    },
    headerPoint: {
        color: "#2CF0A1"
    },
    headerBeta: {
        fontSize: 10,
        color: "#fff",
        backgroundColor: "#3A85FC",
        padding: "4px 10px",
        borderRadius: "10px"
    },
    description: {
        color: "#7F8084",
        fontSize: 14
    },
    chip: {
        width: "100%",
    },
    chipLightMode: {
        backgroundColor: "#F6F8FD"
    },
    price: {
        borderRadius: "5px"
    },
    priceLightMode: {
        border: "1px solid #C6C6C7",
    },
    priceDarkMode: {
        border: "1px solid #292A2A"
    },
    ticketDarkMode: {
        backgroundColor: "#292A2A",
        color: "#C4C4C4"
    },
    ticketLightMode: {
        backgroundColor: "#E6ECF9",
    },
    priceItem: {
        fontSize: "15px",
        padding: "2px 10px",
        margin: "2px 7px 2px 7px",
        borderRadius: "10px"
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 14
    },
    action: {
        backgroundColor: "#4682F9",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#4682F9"
        }
    },
    th: {
        fontWeight: 500
    },
    box: {
        borderRadius: "5px",
        padding: "5px",
        width: "239px"
    },
    textField: {
        width: "55px !important",
        height: "40px"
    },
    darkMode: {
        backgroundColor: "#000000", color: "#fff"
    },
    darkModeColor: {
        color: "#C4C4C4"
    }
}));

export default function FilterDialog(props) {
    const {open, onClose, ...dialogProps} = props;
    const classes = useStyles({});
    const {themeMode} = useSettings();
    return <Dialog
        open={open}
        TransitionComponent={Slide}
        fullWidth
        maxWidth="md"
        disableBackdropClick
        disableEscapeKeyDown
        scroll="body"
        {...dialogProps}
    >
        <Grid container alignItems="center"
              className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid item xs>
                <Typography className={classes.header}>Choose up to <span
                    className={classes.headerPoint}>8/12</span> metrics <span className={classes.headerBeta}>Beta</span></Typography>
                <Typography className={classes.description}>Add, delete, and sort metrics by dragging to the previewed
                    table</Typography>
            </Grid>
            <IconButton>
                <Close className={themeMode === "dark" && classes.darkMode} onClick={() => onClose()}/>
            </IconButton>
        </Grid>
        <Grid container alignItems="center"
              className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid item xs>
                <Button size="small" variant="contained" color="default" endIcon={<KeyboardArrowDown/>}>Custom</Button>
            </Grid>
            <IconButton size="small" className="me-2">
                <DeleteOutlined className={themeMode === "dark" && classes.darkMode}/>
            </IconButton>
            <Button size="small" variant="outlined" color="inherit" endIcon={<Cached/>}>Restart</Button>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid
                className={classNames(themeMode !== "dark" && classes.chipLightMode, classes.chip, "p-2 p-2-all")}>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>1</Avatar>}
                      className="m-1" label="24%" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>2</Avatar>}
                      className="m-1" label="7d%" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>3</Avatar>}
                      className="m-1" label="Market Cap" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>4</Avatar>}
                      className="m-1" label="Volume(24h)" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>5</Avatar>}
                      className="m-1" label="Circulating Supply" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>6</Avatar>}
                      className="m-1" label="7d Chart" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>7</Avatar>}
                      className="m-1" label="7d%" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
                <Chip avatar={<Avatar style={{
                    backgroundColor: themeMode === "dark" ? "#292A2A" : "#fff",
                    color: themeMode === "dark" && "#C4C4C4"
                }}>8</Avatar>}
                      className="m-1" label="7d%" style={{
                    backgroundColor: themeMode === "dark" && "#0A0A0A",
                    color: themeMode === "dark" && "#C4C4C4",
                }}
                      onDelete={console.log}/>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid className={classNames(themeMode !== "dark" && classes.chipLightMode, classes.chip, "p-2 p-2-all")}>
                <table className={classNames("table table-borderless", themeMode === "dark" && "table-dark")}>
                    <tr>
                        <td className={classes.th}>#</td>
                        <td className={classes.th}>Name</td>
                        <td className={classes.th}>Price</td>
                        <td className={classes.th}>24%</td>
                        <td className={classes.th}>7d%</td>
                        <td className={classes.th}>Market Cap</td>
                        <td className={classes.th}>Volume (24h)</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Binance</td>
                        <td>$66,592,58</td>
                        <td className='text-success'>1.99%</td>
                        <td className='text-danger'>-5.57%</td>
                        <td>$1,256,042,695</td>
                        <td>$36,891,025,515 <br/> 553,948 BTC</td>
                    </tr>
                </table>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography
                        className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>PRICE</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Price
                    in BTC</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Price
                    in ETC</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>ATH</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>ATL</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>24h
                    high</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>24h
                    low</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid
                container
                className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                alignItems="center">
                <Grid item xs={4}>
                    <Typography className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>PRICE
                        CHANGE</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>1h%</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>24h%</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>30d%</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>60d%</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>90d%</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>YTD
                    %</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>1h%
                    in BTC</Typography>
                {
                    themeMode !== "dark" &&
                    <Grid container>
                        <Grid item xs={6}>
                            <Grid className={classes.box}>
                                <input className={classes.textField} placeholder="%"/>
                                <select className={classes.textField}>
                                    <option>Day</option>
                                </select>
                                <select className={classes.textField}>
                                    <option>BTC</option>
                                </select>
                                <button className={classes.textField}
                                        style={{backgroundColor: "#4682F9", color: "#fff", border: "none"}}>Add
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>MARKET
                        CAP</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Market
                    Cap</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Fully
                    Diluted MCap</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography
                        className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>VOLUME</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Volume(24h)</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Volume(7d)</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Volume(30d)</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Volume
                    / Mcap</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography
                        className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>SUPPLY</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Circulating
                    Supply</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Total
                    Supply</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Max
                    Supply</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography
                        className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>CHARTS</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>24
                    Chart</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>7d
                    Chart</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>30d
                    Chart</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>60d
                    Chart</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>90d
                    Chart</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2 p-2-all")}>
            <Grid container
                  className={classNames(classes.price, "p-2 p-2-all", themeMode === "dark" ? classes.priceDarkMode : classes.priceLightMode)}
                  alignItems="center">
                <Grid item xs>
                    <Typography
                        className={classNames(classes.itemName, themeMode === "dark" && classes.darkModeColor)}>OTHERS</Typography>
                </Grid>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Audited</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Dominance
                    %</Typography>
                <Typography
                    className={classNames(classes.priceItem, themeMode === "dark" ? classes.ticketDarkMode : classes.ticketLightMode)}>Total
                    Value Locked</Typography>
            </Grid>
        </Grid>
        <Grid container className={classNames(themeMode === "dark" && classes.darkMode, "p-2")}
              justifyContent="flex-end">
            <Button onClick={() => onClose()} variant="outlined" color="inherit"
                    className="me-2">Cancel</Button>
            <Button onClick={() => onClose()} variant="contained" className={classes.action}>Apply Changes</Button>
        </Grid>
    </Dialog>
}
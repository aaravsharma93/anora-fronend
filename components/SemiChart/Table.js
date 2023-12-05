import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table ,IconButton} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useSettings from "../../hooks/useSettings";
import CoinsOverviewChart from '../../components/Coins/CoinsOverviewChart'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    icons:{
        width:'35px',
        height:'35px',

    },
});

function createData( number, name, price, fat, carbs, market, volume, last) {
    return { number, name, fat, price, carbs, market, volume, last };
}
const rows = [
    createData( 1, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 2, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 3, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 4, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 5, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 6, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 7, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
    createData( 8, "Bitcoin BTC", "$66,592.58", "1.99%", "-5.57%", "$1,256,613,042,695", "$36,891,025,515", 54),
];


export default function BasicTable(props) {
    const classes = useStyles();
    const [id,setId]=React.useState();
    const {themeMode} = useSettings();
    console.log('Vishal',props.data)
    return (
        <TableContainer  className={`${themeMode === "dark" ? "bg-dark" : "bg-white"}`}  component={Paper} >
            <Table className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`}>
                <TableHead>
                    <TableRow>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`}>#</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="left">Name</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="center">Price</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">24%</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">7d%</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">Market Cap</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">volume(24th)</TableCell>
                        <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">Last 7Days</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row,index) => (
                        <TableRow key={row.number}>

                            <TableCell width={100} className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">

                                <div className='col-12  flex-row d-flex justify-content-between align-items-center'>
                                    <div className={classes.icons}>
                                        <img src={row.logo_url} style={{width:'35px'}}/>
                                    </div>
                                    {row.currency}
                                    <p className='mt-3 text-center p-1' style={{color:'#000',width:'42px',height:'23',background:'#D8DAE1',borderRadius:'5px'}}>Buy</p>
                                </div>
                            </TableCell>
                            <TableCell width={160} className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">{row.price}</TableCell>
                            <TableCell width={100} align="right"style={{color: "#00cc00"}}>{row["1d"].volume_change_pct}</TableCell>
                            <TableCell width={100} align="right"style={{color: "#ff1500"}}>{row["7d"].market_cap_change_pct}</TableCell>
                            <TableCell width={170} className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">
                                {row.market_cap}</TableCell>
                            <TableCell className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">{row["7d"].volume_change_pct}</TableCell>
                            <TableCell width={180} className={`${themeMode === "dark" ? "text-light bg-dark" : "text-dark bg-light"}`} align="right">
                                <div className="col-4 offset-5">
                                    <CoinsOverviewChart width={250}  />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

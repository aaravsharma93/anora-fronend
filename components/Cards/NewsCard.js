import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import {  ArrowRightAltSharp} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from "../../hooks/useSettings";
export default function NewsCard() {
    const classes = useStyles();
    const {themeMode} = useSettings();

    return (
    <Card style={styles.cardStyle} className={themeMode==='dark'?classes.darkTheme:classes.themeBacklight}>
        <CardContent className={themeMode==='dark'?classes.darkcolor:classes.lightColor}>
         <Typography style={styles.cardHeader}>
           market News
        </Typography>
         
          <arguments style={styles.cardText}> Siam Commercial Bank purchases 51% stake in crypto exchange Bitkub</arguments>
          <Typography variant="body2" color="text.secondary" style={{marginTop:15, fontSize:13 , color:"#989797", lineHeight:"92%"}}>
          2 hours ago .by <a href='/' style={{curser:"pointer" , color:"blue",}}>Dave Johnson</a>
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary" style={{fontSize:10}}>
          Read more <ArrowRightAltSharp/>
        </Button>
      </CardActions>
    </Card>
  );
}

const styles= {
  cardStyle:{
    width:"324px",
    height:"234px",
    borderRadius:25,
    Padding:"24px, 0px, 24px, 24px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px  7px 29px 0px",
    lineHeight:"28px",
    textAlign:'left',
    marginBottom:15
    
  },
  cardHeader:{
    marginBottom:7,
    textAlign:"center",
     fontSize:11 ,
     borderRadius:5, 
     color:"white",
      backgroundColor:"#B264E1",
       width:"40%",
  },
  cardText:{
    fontSize:18,
    paddingRight:10
    
  }
}

const useStyles = makeStyles((theme) => ({
        themeBacklight:{
            background:'#fff !important'
        },
        darkTheme:{
            background:'#000 !important'
        },
        darkcolor:{
            color:'#fff !important'
        },
        lightColor:{
            color:'#000 !important'
        }

    }
))

 

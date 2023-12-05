import { Container } from "react-bootstrap";
import { Card, Typography, Button, ListItem, List, TextField, InputAdornment } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";
import { useEffect, useState } from "react";
import { getSubscriptions } from "../api/subscription";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SubscribeNow from "../components/SubscribeNow";

const useStyles = makeStyles((theme) => ({
    h1: {
        textAlign: "center",
        fontSize: "22px",
        textTransform: "uppercase",
        fontFamily: "Gotham",
        fontWeight: "bold"
    },
    hInfo: {
        maxWidth: "70%",
        fontFamily: "Gotham",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "18px",
        textAlign: "center",
        letterSpacing: "0.5em",
        textTransform: "uppercase",
    },
    h5: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "27px",
        textAlign: "center"

    }
}))
export default function Plans() {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)

    const handleAccordion = (panel) => {
        setOpen(open == panel ? false : panel)
    }
    useEffect(() => {
        getSubscriptions()
            .then(res => {
                setData(res.data?.data)
            })
            .catch(err => {
                console.error("Error in fetching Subscription plans");
            })
    }, [])
    return (
        <>
            <Container>
                <Card>
                    <div className="row p-4">
                        <Typography variant="h1" className={`${classes.h1} mb-4`}>
                            Plans and Pricing
                        </Typography>
                        <Box justifyContent="center" display="flex" className="mb-4">
                            <Typography variant="h6" className={classes.hInfo}>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
                                incidunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                        <Typography varaint="h5" className={`${classes.h5} mt-4 mb-3`}>
                            Save up to 15% with yearly
                        </Typography>
                    </div>
                    <div className="row p-4">
                        {
                            data?.map((item, index) => (
                                <div className="col-12 col-sm-4 p-2" key={index}>
                                    <Card className="p-4">
                                        <div className="text-center">
                                            <Typography variant="h3" sx={{ fontSize: "18px" }}>{item.tier}</Typography>
                                            <Typography variant="h2" className="text-center text-uppercase" sx={{ fontSize: "36px" }}>
                                                {item.plans.length == 0 ? 'Free' : '$' + item.plans[0]?.price}
                                                {
                                                    item.plans.length > 0 &&
                                                    <span style={{ fontSize: "24px", marginLeft: "-8px", fontWeight: "normal", textTransform: "lowercase" }}>{'/' + item.plans[0]?.duration}</span>
                                                }
                                            </Typography>
                                            <Button fullWidth variant="contained" color="primary" className="btn-primary">Subscribe</Button>
                                        </div>
                                        <List>
                                            {
                                                item?.features.map((feature, ind) => (
                                                    <ListItem sx={{ paddingLeft: 0 }} key={ind}>
                                                        <div>
                                                            <CheckCircleIcon color="warning" />  {` ${feature.title}`}
                                                            {
                                                                feature.subtitle &&
                                                                <List>
                                                                    {feature.subtitle.map((subitem, subindex) => (
                                                                        <ListItem sx={{ pl: 4 }} key={subindex}>
                                                                            <RadioButtonUncheckedIcon sx={{ fontSize: "12px", mr: 2 }} /> {subitem}
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            }
                                                        </div>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row mt-4 p-4">
                        <Typography varaint="h1" className={classes.h1}>
                            Frequently Asked Questions
                        </Typography>
                        <div className="col-12 col-md-6 p-2">
                            <Accordion
                                expanded={open == 'acc1'}
                                sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                onChange={() => handleAccordion('acc1')}
                            >
                                <AccordionSummary
                                    expandIcon={open == 'acc1' ? <RemoveIcon /> : <AddIcon />}
                                >
                                    Question
                                </AccordionSummary>
                                <AccordionDetails>
                                    Answer
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={open == 'acc2'}
                                sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                onChange={() => handleAccordion('acc2')}
                            >
                                <AccordionSummary
                                    expandIcon={open == 'acc2' ? <RemoveIcon /> : <AddIcon />}
                                >
                                    Question
                                </AccordionSummary>
                                <AccordionDetails>
                                    Answer
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-6 p-2">
                            <Accordion
                                expanded={open == 'acc1'}
                                sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                onChange={() => handleAccordion('acc1')}
                            >
                                <AccordionSummary
                                    expandIcon={open == 'acc1' ? <RemoveIcon /> : <AddIcon />}
                                >
                                    Question
                                </AccordionSummary>
                                <AccordionDetails>
                                    Answer
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={open == 'acc2'}
                                sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                onChange={() => handleAccordion('acc2')}
                            >
                                <AccordionSummary
                                    expandIcon={open == 'acc2' ? <RemoveIcon /> : <AddIcon />}
                                >
                                    Question
                                </AccordionSummary>
                                <AccordionDetails>
                                    Answer
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="row mt-4 p-4">
                        <SubscribeNow/>
                    </div>
                </Card>
            </Container>
        </>
    )
}
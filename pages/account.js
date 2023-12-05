import { AccountCircle } from "@mui/icons-material";
import { Container, Card, Avatar, Button, TextField, InputAdornment, SvgIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import { Row } from "react-bootstrap";
import PaymentCards from "../public/payment-cards.svg"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { UIContext } from "../contexts/UIContext";
import { fetchProfile } from "../api/user";

const useStyles = makeStyles((theme) => ({
    inner: {
        boxShadow: "0px 4.07981px 87.716px rgba(108, 118, 179, 0.15)",
        width: "100%",
        padding: 40
    },
    innerCard: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "20px 80px 20px 80px",
    },
    basic: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    card2: {
        marginTop: "60px",
    },
    card3: {
        marginTop: "60px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    card4: {
        marginTop: "60px"
    }
}))

export default function Account() {
    const classes = useStyles()
    const [user, setUser] = React.useState(null)
    let [newUser, setNewUser] = React.useState({})
    const { setLoading } = React.useContext(UIContext)

    React.useEffect(() => {
        fetchProfile()
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log("Error in fetching user profile!")
            })
    }, [])
    return (
        <>
            <Container>
                <Card className={classes.inner}>
                    <Card className={`${classes.basic} ${classes.innerCard}`}>
                        <Avatar sx={{ margin: 1, height: 100, width: 100 }} />
                        <h6>{user?.username}</h6>
                        <Button sx={{ margin: 1 }} variant="outlined" onClick={() => setLoading(true)}>Change Profile Picture</Button>
                    </Card>
                    <Card className={`${classes.card2} ${classes.innerCard}`}>
                        <div className="row mb-2">
                            <div className="col-12 col-md-2">
                                Display name
                            </div>
                            <div className="col-12 col-md-10">
                                <TextField
                                    value={user?.firstname + ' ' + user?.lastname}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-2">
                                Email Address
                            </div>
                            <div className="col-12 col-md-10">
                                <TextField
                                    value={user?.email}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>
                                    }}
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className={`${classes.card3} ${classes.innerCard}`}>
                        <h6>Password Change</h6>
                        <Button variant="outlined">Change Password</Button>
                    </Card>
                    <Card className={`${classes.card4} ${classes.innerCard}`}>
                        <Row>
                            <div className="col-12 col-md-2">
                                <h6>Billing</h6>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="row">
                                    <div className="col-3">
                                        <h6>Tier2</h6>
                                        <p> Monthly Plan</p>
                                    </div>
                                    <div className="col-9">

                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12 col-md-2">
                                <h6>Payment Method</h6>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="row">
                                    <RadioGroup row aria-label="paymentMethod" name="row-radio-buttons-group">
                                        <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
                                        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                                    </RadioGroup>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-10">
                                        <TextField
                                            InputProps={{
                                                startAdornment: <InputAdornment>
                                                    <img src={PaymentCards.src} width="100%" />
                                                </InputAdornment>
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Card>
            </Container>
        </>
    )
}
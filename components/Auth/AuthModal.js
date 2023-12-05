import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, Typography, FormControlLabel, Checkbox, CircularProgress } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import { TextField, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CachedIcon from '@material-ui/icons/Cached';
import useSettings from "../../hooks/useSettings";
import { useFormik } from 'formik';
import { loginUser, signupUser } from '../../api/user';
import { useRouter } from 'next/router';
import { AuthContext } from "../../contexts/AuthContext";
import toast from 'react-hot-toast';

const textColor = '#70737A'

export default function AuthModal(props) {
    const { themeMode } = useSettings();

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [passwordShow, setPasswordShow] = React.useState(true)
    const [passwordShowConfirm, setPasswordShowConfirm] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [title, setTitle] = React.useState('Log In')
    const [page, setPage] = React.useState(1);
    const { auth, setAuth } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            switch (page) {
                case 0:
                    handleLogin(values)
                    break;
                case 1:
                    handleRegister(values)
                    break;
                default:
                    break;
            }
        },
        initialErrors: {
            email: '',
            password: ''
        }
    })

    const handleLogin = (values) => {
        setLoading(true)
        loginUser(values.email, values.password)
            .then((res) => {
                setOpen(false)
                setAuth(res?.data?.token)
                localStorage.setItem("anoraAuth", res?.data?.token)
                if (typeof window !== undefined)
                    window.location.href = '/account';
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                err.response && formik.setErrors({ email: err.response?.data?.message })
            })
            .finally(() => {
                setLoading(false)
            });
    }
    const handleRegister = (values) => {
        setLoading(true)
        if (values.password !== values.confirmPassword) {
            formik.setErrors({ password: "Password and Confirm Password do not match" })
            setLoading(false)
            return;
        }
        signupUser(values.email, values.password)
            .then((res) => {
                loginUser(values.email, values.password)
                    .then((res) => {
                        setOpen(false)
                        setAuth(res?.data?.token)
                        localStorage.setItem("anoraAuth", res?.data?.token)
                        if (typeof window !== undefined)
                            window.location.href = '/account';
                    })
                    .catch((err) => {
                        console.log(JSON.stringify(err));
                    });
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                err.response && setError(err.response?.data?.message)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    React.useEffect(() => {
        if (props.page === 'login') {
            setPage(0);
            setTitle('Log In ')

        } else if (props.page === 'register') {
            setPage(1);
            setTitle('Create an account ')

        }
        props.page ?
            setOpen(true) : <></>
        console.log(page)

    }, [props.change]);

    return (
        <React.Fragment >
            <Dialog
                maxWidth='md'
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <form onSubmit={formik.handleSubmit}>
                    <div
                        style={{
                            background: themeMode === 'dark' ? '#000' : '#fff',
                        }}
                        className={classes.box}>
                        <DialogTitle id="max-width-dialog-title" className={classes.Title}>
                            <h4 style={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>{title}</h4></DialogTitle>

                        <Typography variant='h5'>
                            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Typography>
                        {page == 3 ? <></> : <>
                            <div className="col-12 ml-n2  d-flex justify-content-center">
                                <Fab size="medium" className={classes.social}>
                                    <img src='../google.png' />
                                </Fab>
                                <Fab size="medium" className={classes.social}>
                                    <img src='../f.png' />
                                </Fab>
                            </div>
                            <Typography variant="h6" className={classes.des}>or use your email account</Typography>

                        </>}
                        {page == 0 ? <>

                            <DialogContent className={classes.contentForm}>
                                <TextField
                                    name="email"
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    autoComplete="off"
                                    error={formik.errors.email !== ''}
                                    helperText={formik.errors.email}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Your Email"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <MailOutlineIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {
                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1

                                        }
                                    }}
                                    variant="outlined"
                                />
                                {/*Password*/}
                                <TextField
                                    name="password"
                                    values={formik.values?.password}
                                    onChange={formik.handleChange}
                                    type={passwordShow ? "password" : 'text'}
                                    error={error}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Your Password"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">

                                                    <LockOpenIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => {
                                                        setPasswordShow(!passwordShow)
                                                    }}>
                                                        {passwordShow ? <VisibilityOff className={classes.TextIcon} /> :
                                                            <Visibility className={classes.TextIcon} />}

                                                    </IconButton>

                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {

                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1
                                        }
                                    }}
                                    variant="outlined"

                                />

                                <Typography variant='h6' className="text-center py-2">
                                    <u className={classes.forget} onClick={() => {
                                        setTitle('Forget Password');
                                        setPage(2)
                                    }}>Forget Password</u>
                                </Typography>
                                <Button variant="contained" color="primary" type="submit" className={classes.SubmitBtn}>
                                    {loading ? <CircularProgress className={classes.submitLoader} /> : <>Log In</>}
                                </Button>
                                <div className={classes.width}>
                                    <Typography variant='h6' className={classes.des}>
                                        New to Fundamental Secrets?<span onClick={() => {
                                            setPage(1);
                                            formik.setErrors({})
                                            setTitle('Create an account')
                                        }} style={{ color: '#4682F9', cursor: 'pointer' }}> Create an account</span>
                                    </Typography>
                                </div>
                            </DialogContent>
                        </> : <></>}
                        {page == 1 ? <>
                            <DialogContent className={classes.contentForm}>
                                <TextField
                                    name="email"
                                    values={formik.values?.email}
                                    onChange={formik.handleChange}
                                    error={formik.errors.email}
                                    helperText={formik.errors.email}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    style={{ color: 'red !important' }}
                                    fullWidth='medium'
                                    placeholder="Enter Your Email"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <MailOutlineIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {
                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1

                                        }
                                    }}
                                    variant="outlined"
                                />
                                {/*Password*/}
                                <TextField
                                    name="password"
                                    values={formik.values?.password}
                                    onChange={formik.handleChange}
                                    type={passwordShow ? "password" : 'text'}
                                    error={formik.errors.password}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Your Password"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">

                                                    <LockOpenIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => {
                                                        setPasswordShow(!passwordShow)
                                                    }}>
                                                        {passwordShow ? <VisibilityOff className={classes.TextIcon} /> :
                                                            <Visibility className={classes.TextIcon} />}

                                                    </IconButton>

                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {

                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1
                                        }
                                    }}
                                    variant="outlined"

                                />
                                {/*Confirm-Password*/}
                                <TextField
                                    name="confirmPassword"
                                    values={formik.values?.confirmPassword}
                                    onChange={formik.handleChange}
                                    type={passwordShowConfirm ? "password" : 'text'}
                                    error={formik.errors.password}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Your Password"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">

                                                    <CachedIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => {
                                                        setPasswordShowConfirm(!passwordShowConfirm)
                                                    }}>
                                                        {passwordShowConfirm ?
                                                            <VisibilityOff className={classes.TextIcon} /> :
                                                            <Visibility className={classes.TextIcon} />}

                                                    </IconButton>

                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {

                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1
                                        }
                                    }}
                                    variant="outlined"

                                />
                                <Typography variant='h6' className="text-center">
                                    <FormControlLabel className={classes.des1}
                                        control={<Checkbox name="checkedC" checked color='primary' />}
                                        label="Get a dialy dose of Fundamental Secrets, right to your inbox!" />
                                </Typography>
                                <Button variant="contained" color="primary" type="submit" className={classes.SubmitBtn}>
                                    {loading ? <CircularProgress className={classes.submitLoader} /> : <>Create Account</>}
                                </Button>
                                <div className={classes.width}>
                                    <Typography variant='h6' className={classes.des}>
                                        Already have an account?<span onClick={() => {
                                            setPage(0)
                                            formik.setErrors({})
                                            setTitle('Log In')
                                        }} style={{ color: '#4682F9', cursor: 'pointer' }}> Log In</span>
                                    </Typography>

                                </div>
                            </DialogContent>
                        </> : <></>}
                        {page == 2 ? <>
                            <DialogContent className={classes.contentForm}>
                                {/*Email*/}
                                <TextField
                                    autoComplete="off"
                                    error={error}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Your Email"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <MailOutlineIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {
                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1

                                        }
                                    }}
                                    variant="outlined"
                                />

                                <Button variant="contained" color="primary" className={classes.SubmitBtn} onClick={() => {
                                    setPage(3)
                                    setTitle('Reset Password')
                                }}>
                                    Forget Password
                                </Button>
                                <div className={classes.width}>
                                    <Typography variant='h6' className={classes.des}>
                                        Already have an account?<span onClick={() => {
                                            setPage(0)
                                            setTitle('Log In')
                                        }} style={{ color: '#4682F9', cursor: 'pointer' }}> Log In</span>
                                    </Typography>

                                </div>
                            </DialogContent>
                        </> : <></>}
                        {page == 3 ? <>
                            <DialogContent className={classes.contentForm}>
                                {/*Password*/}
                                <TextField
                                    type={passwordShow ? "password" : 'text'}
                                    error={error}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter New Password"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">

                                                    <LockOpenIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => {
                                                        setPasswordShow(!passwordShow)
                                                    }}>
                                                        {passwordShow ? <VisibilityOff className={classes.TextIcon} /> :
                                                            <Visibility className={classes.TextIcon} />}

                                                    </IconButton>

                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {

                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1
                                        }
                                    }}
                                    variant="outlined"

                                />
                                {/*Confirm-Password*/}
                                <TextField
                                    type={passwordShowConfirm ? "password" : 'text'}
                                    error={error}
                                    className={themeMode === 'dark' ? classes.TextInput : classes.TextInputLight}
                                    fullWidth='medium'
                                    placeholder="Enter Confirmed Password"
                                    InputProps={{
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">

                                                    <CachedIcon className={classes.TextIcon} />
                                                </InputAdornment>
                                            </>
                                        ),
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => {
                                                        setPasswordShowConfirm(!passwordShowConfirm)
                                                    }}>
                                                        {passwordShowConfirm ?
                                                            <VisibilityOff className={classes.TextIcon} /> :
                                                            <Visibility className={classes.TextIcon} />}

                                                    </IconButton>

                                                </InputAdornment>
                                            </>
                                        ),
                                        classes: {

                                            notchedOutline: error ? classes.notchedOutline : classes.notchedOutline1
                                        }
                                    }}
                                    variant="outlined"

                                />

                                <Button variant="contained" color="primary" className={classes.SubmitBtn}>
                                    Reset Password
                                </Button>
                                <div className={classes.width}>
                                    <Typography variant='h6' className={classes.des}>
                                        Already have an account?<span onClick={() => {
                                            setPage(0)
                                            setTitle('Log In')
                                        }} style={{ color: '#4682F9', cursor: 'pointer' }}> Log In</span>
                                    </Typography>

                                </div>
                            </DialogContent>
                        </> : <></>}

                    </div>
                </form>
            </Dialog>
        </React.Fragment >
    );
}

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    Title: {
        fontSize: '22px',
        textAlign: 'center',
        fontWeight: '900 !important',
        color: '#fff',
        paddingBottom: '15px',
        marginLeft: '10px',
        paddingTop: '40px'

    },
    social: {
        marginLeft: '20px',
        background: 'rgba(0, 0, 0, 30%)',
        boxShadow: '-5px 5px 20px -8px rgb(70, 130, 249) ',
        position: 'relative',

        [theme.breakpoints.up('md')]: {
            background: 'rgba(0, 0, 0, 30%)',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 30%)',

            },
        },
    },
    des: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#70737A',
        paddingTop: '21px',
        paddingBottom: '10px'

    },
    des1: {
        textAlign: 'center',
        fontSize: '10px !important',
        color: '#70737A',
        paddingBottom: '10px',

    },
    contentForm: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "red !important",
    },
    notchedOutline1: {
        borderWidth: "1px",
        borderColor: "#70737A !important",
    },
    TextInput: {
        "& .MuiInputBase-root": {
            height: 50,
            width: '100%',
            alignSelf: 'center',
            color: '#fff',
            [theme.breakpoints.up('md')]: {
                width: '80%',
            },
        },
        marginTop: '25px',
    },
    TextInputLight: {
        "& .MuiInputBase-root": {
            height: 50,
            width: '100%',
            alignSelf: 'center',
            color: '#000',
            [theme.breakpoints.up('md')]: {
                width: '80%',
            },
        },
        marginTop: '25px',
    },
    TextIcon: {
        color: '#3C3D42'
    },
    forget: {
        fontSize: '16px',
        color: textColor,
        cursor: 'pointer',
    },
    SubmitBtn: {
        width: '100%',
        height: '45px',
        background: '#4682F9',
        boxShadow: '0px 1px 1px 1px rgb(70, 130, 249)',
        borderRadius: '10px',
        marginTop: '20px',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: '#4682F9',

        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
        },
    },
    submitLoader: {
        color: "white"
    },
    width: {
        width: '100%',
        textAlign: 'right'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        // background: themeMode === 'dark'?'#000':'#fff',
        minWidth: '300px',
        minHeight: '400px',
        paddingBottom: '20px',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            minWidth: '570px',
        },
    }

}));

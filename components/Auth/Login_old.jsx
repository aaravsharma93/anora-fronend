import React from 'react';
import {
  Facebook,
  Google,
  Inbox,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import {
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
import { useFormik } from 'formik';
import { loginUser } from '../../api/user';
import { useRouter } from 'next/router';

export default function Register() {
  const { loginOpen, setLoginOpen } = useContext(AuthContext);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      loginUser(values.email, values.password)
        .then((res) => {
          localStorage.setItem("anoraAuth", res?.data?.token)
          router.push('/account');
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    },
  });
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
        <Container style={{ width: 600 }}>
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <div
                className='col-12'
                style={{ padding: 40, paddingLeft: 80, paddingRight: 80 }}
              >
                <h3 className='text-center mb-4'>Log In</h3>
                <div className='text-center mb-4'>
                  <Google />
                  <Facebook />
                </div>
                <div className='text-center'>
                  <h6>or use your email account</h6>
                </div>
                <div className='form-group mt-4 mb-4'>
                  <TextField
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className='form-group mt-2 mb-4'>
                  <TextField
                    fullWidth
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LockIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className='text-center'>
                    <Link href='/forgot-password'>Forgot password?</Link>
                  </div>
                </div>
                <div className='form-group'>
                  <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='secondary'
                  >
                    Create an Account
                  </Button>
                </div>
              </div>
            </Row>
          </form>
        </Container>
      </Dialog>
    </>
  );
}

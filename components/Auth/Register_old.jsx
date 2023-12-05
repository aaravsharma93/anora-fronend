import React from 'react';
import {
  Facebook,
  Google,
  Inbox,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import {
  Checkbox,
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
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useFormik } from 'formik';
import { signupUser } from '../../api/user';

export default function Register() {
  const { signUpOpen, setSignOpen } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      signupUser(formik.values.email, formik.values.password)
        .then((res) => {
          console.log('success');
          alert(JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log('error', err);
          alert(JSON.stringify(err));
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

  return (
    <>
      <Dialog open={signUpOpen} onClose={() => setSignOpen(false)}>
        <Container style={{ width: 600 }}>
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <div
                className='col-12'
                style={{ padding: 40, paddingLeft: 80, paddingRight: 80 }}
              >
                <h3 className='text-center mb-4'>Create an Account</h3>
                <div className='text-center mb-4'>
                  <Google />
                  <Facebook />
                </div>
                <div className='text-center'>
                  <h6>or use your email for registration</h6>
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
                    name='password'
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
                </div>
                <div className='form-group mt-2 mb-4'>
                  <TextField
                    name='confirmPassword'
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AutorenewIcon />
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
                  <span style={{ fontSize: 12 }}>
                    <label>
                      <Checkbox />
                      Get a daily dose of Fundamental Secrets, right to your
                      inbox
                    </label>
                  </span>
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

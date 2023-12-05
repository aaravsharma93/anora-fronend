import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Select } from 'react-bootstrap';
import { Box, Typography } from '@material-ui/core';
import axios from 'axios';
import AdminSidebar from '../../../../components/AdminSidebar';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

export default function CreateUser() {
  const router = useRouter();
  const [userId, setuserId] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUSerInfo = async (id) => {
      const userInfo = await axios.get('/admin/user/' + id);
      setUserData(userInfo.data[0]);
    };

    if (router.query.id) {
      setuserId(router.query.id);
      getUSerInfo(router.query.id);
    }
  }, [router.query.id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userData.firstname ? userData.firstname : '',
      lastname: userData.lastname ? userData.lastname : '',
      email: userData.email ? userData.email : '',
      username: userData.username ? userData.username : '',
      password: '',
      role: userData.role ? userData.role : '',
    },
    // validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const body = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        username: values.username,
        password: values.password,
        role: values.role,
      };

      const bodyUpdate = {
        id: router.query.id,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        username: values.username,
        role: values.role,
      };

      let submittedData;
      if (router.query.id) {
        submittedData = await axios.put('/admin/user', bodyUpdate);
      } else {
        submittedData = await axios.post('/admin/user', body);
      }
      if (submittedData.status == 200) {
        alert(
          userId == ''
            ? 'User Created Successfully'
            : 'User Updated Successfully'
        );
        window.location.reload();
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <AdminSidebar />
      <Container className='mt-3'>
        <Box className='admn_pg_ttl'>
          <Typography component='h3'>
            {userId == '' ? 'Create User' : 'Update User'}
          </Typography>
        </Box>
        <Box className='cstm_form'>
          <Form className='def_form'>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId='formFirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter First Name'
                    {...formik.getFieldProps('firstname')}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId='formLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Last Name'
                    {...formik.getFieldProps('lastname')}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Email'
                    {...formik.getFieldProps('email')}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId='formUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Username'
                    {...formik.getFieldProps('username')}
                  />
                </Form.Group>
              </Col>
              {userId == '' && (
                <Col xs={12} md={6}>
                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      {...formik.getFieldProps('password')}
                    />
                  </Form.Group>
                </Col>
              )}
              <Col xs={12} md={6}>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Role</Form.Label>
                  <select {...formik.getFieldProps('role')}>
                    <option value='Admin'>Admin</option>
                    <option value='User'>User</option>
                    <option value='Affiliate Manager'>Affiliate Manager</option>
                  </select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Button variant='primary' onClick={() => formik.handleSubmit()}>
                  {userId == '' ? 'Submit' : 'Update'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Box>
      </Container>
    </>
  );
}

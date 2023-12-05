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
      const userInfo = await axios.get('/admin/smart_money_management/' + id);
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
      public_address: userData.public_address ? userData.public_address : '',
      name: userData.name ? userData.name : '',
    },
    // validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const body = {
        public_address: values.public_address,
        name: values.name,
      };

      const bodyUpdate = {
        id: userId,
        public_address: values.public_address,
        name: values.name,
      };

      let submittedData;
      if (router.query.id) {
        submittedData = await axios.put(
          '/admin/smart_money_management',
          bodyUpdate
        );
      } else {
        submittedData = await axios.post('/admin/smart_money_management', body);
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
                <Form.Group controlId='public_address'>
                  <Form.Label>Public Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Public Address'
                    {...formik.getFieldProps('public_address')}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Name'
                    {...formik.getFieldProps('name')}
                  />
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

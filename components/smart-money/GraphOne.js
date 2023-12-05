import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GraphOne(props) {
  const series = [
    {
      name: 'xx',
      data: props.data,
    },
  ];
  const options = {
    pie: {
      donut: {
        size: '90%',
      },
    },
  };
  return (
    <>
      <Box className='grph_box'>
        <Row>
          <Col xs={12}>
            <Box className='tb_lft_prt cstmflx'>
              <Typography component='h3'>balance distribution (USD)</Typography>
              <Box className='tb_rgt_prt'>
                <Button variant='primary'>
                  <UpdateIcon />
                  14 ago
                </Button>
              </Box>
            </Box>
          </Col>
          <Col xs={12}>
            {/* {typeof window !== 'undefined' && (
              <Chart
                type='donut'
                series={series}
                options={options}
                height={350}
              />
            )} */}
          </Col>
        </Row>
      </Box>
    </>
  );
}

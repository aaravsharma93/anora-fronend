import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, ProgressBar } from 'react-bootstrap';
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import useSettings from '../../hooks/useSettings';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/MoreVert';
import uniqueId from '../../utils/uniqueId';

function createData(
  name,
  totalbalance,
  tokenbalance,
  change1dthree,
  change1dfour,
  action
) {
  return {
    name,
    totalbalance,
    tokenbalance,
    change1dthree,
    change1dfour,
    action,
  };
}

function RowN(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{row.name}</TableCell>
        <TableCell align='right'>{row.totalbalance}</TableCell>
        <TableCell align='right'>{row.tokenbalance}</TableCell>
        <TableCell align='right'>{row.change1dthree}</TableCell>
        <TableCell align='right'>{row.change1dfour}</TableCell>

        <TableCell align='right'>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

RowN.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.number.isRequired,
    tokenbalance: PropTypes.number.isRequired,
    totalbalance: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,

    action: PropTypes.number.isRequired,
    change1dthree: PropTypes.number.isRequired,
    change1dfour: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
  createData(
    'ChainLink Token',
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ],
    [
      '$15,099, 567',
      <ProgressBar key={uniqueId('five')} now={60} className='cstm_prgrss' />,
    ]
  ),
];
export default function TableFive() {
  const { themeMode } = useSettings();
  const isDark = themeMode === 'dark';
  return (
    <>
      <Row>
        <Col xs={12} lg={6}>
          <Box className='tb_lft_prt'>
            <Typography component='h3'>smart money leaderboard</Typography>
          </Box>
        </Col>
        <Col xs={12} lg={6}>
          <Box className='tb_rgt_prt'>
            <Button variant='primary'>
              <UpdateIcon />
              14 ago
            </Button>
            <Button variant='primary'>
              <Image
                src={`${
                  themeMode === 'dark'
                    ? '/images/img/filter_ic.svg'
                    : '/images/img/filter_ic_dark.svg'
                }`}
                width='14'
                height='15'
                alt='Fundamental Secrets'
              />
              FILTERS
            </Button>
          </Box>
        </Col>
        <Col xs={12} className='mt-4'>
          <Box className='main_tbl_bx'>
            <TableContainer component={Paper} className='tblbg'>
              <Table aria-label='collapsible table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Total Balance</TableCell>
                    <TableCell align='right'>Token Balance</TableCell>
                    <TableCell align='right'>Change (1d)</TableCell>
                    <TableCell align='right'>Change (1d)</TableCell>

                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <RowN key={i} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Col>
      </Row>
    </>
  );
}

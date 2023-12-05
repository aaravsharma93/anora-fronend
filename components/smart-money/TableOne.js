import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
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
  TableSortLabel,
  Paper,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import UpdateIcon from '@mui/icons-material/Update';
import useSettings from '../../hooks/useSettings';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/MoreVert';
import uniqueId from '../../utils/uniqueId';
import { getAddressName } from '../../utils/common';

function createData(
  dex,
  time,
  taker,
  takeramount,
  takertoken,
  maker,
  makeramount,
  makertoken,
  action
) {
  return {
    dex,
    time,
    taker,
    takeramount,
    takertoken,
    maker,
    makeramount,
    makertoken,
    action,
  };
}

function RowN(props) {
  const { row, address } = props;
  const [open, setOpen] = React.useState(false);
  const now = new Date();
  const time = now.getTime();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component='th' scope='row'>
          {row.dex}
        </TableCell>
        <TableCell align='right'>
          {row.timeValue}
          <ProgressBar now={time} className='cstm_prgrss' />
        </TableCell>
        <TableCell>{row.name1 ? row.name1 : '...'}</TableCell>
        <TableCell align='right'>{row.buyAmount}</TableCell>
        <TableCell>{row.buyCurrency}</TableCell>
        <TableCell>{row.makerName ? row.makerName : '...'}</TableCell>
        <TableCell align='right'>{row.sellAmount}</TableCell>
        <TableCell>{row.sellCurrey}</TableCell>

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
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

RowN.propTypes = {
  row: PropTypes.shape({
    time: PropTypes.number.isRequired,
    takeramount: PropTypes.number.isRequired,
    taker: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    dex: PropTypes.string.isRequired,
    action: PropTypes.number.isRequired,
    takertoken: PropTypes.number.isRequired,
    makeramount: PropTypes.number.isRequired,
    maker: PropTypes.string.isRequired,
    makertoken: PropTypes.string.isRequired,
  }).isRequired,
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'dex',
    numeric: false,
    disablePadding: false,
    label: 'Dex',
  },
  {
    id: 'timeValue',
    numeric: true,
    disablePadding: true,

    label: 'Time',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: true,
    label: 'Taker',
  },
  {
    id: 'buyAmount',
    numeric: true,
    disablePadding: true,
    label: 'Taker Amount',
  },
  {
    id: 'buyCurrency',
    numeric: true,
    disablePadding: true,
    label: 'Taker Token',
  },
  {
    id: 'makerAddress',
    numeric: true,
    disablePadding: true,
    label: 'Marker',
  },
  {
    id: 'sellAmount',
    numeric: true,
    disablePadding: true,
    align: 'right',
    label: 'Marker Amount',
  },
  {
    id: 'sellCurrey',
    numeric: true,
    align: 'right',
    disablePadding: true,
    label: 'Marker Tooken',
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell, i) => (
          <TableCell
            key={i}
            align={headCell.align ? headCell.align : ''}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TableOne() {
  const { themeMode } = useSettings();
  const isDark = themeMode === 'dark';
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('dex');
  const [selected, setSelected] = useState([]);
  const [dexData, setDexData] = useState([]);
  const now = new Date();
  const time = now.getTime();
  const endpoint = 'https://graphql.bitquery.io';
  const address = '0x5aa3393e361c2eb342408559309b3e873cd876d6';
  const QUERY =
    `{
    ethereum(network: ethereum) {
      dexTrades(
        taker: {in: ["` +
    address +
    `","` +
    address +
    `"]}
        options: {offset: 0, limit: 25}
      ) {
        exchange {
          name
          address {
            annotation
          }
        }
        smartContract {
          contractType
          protocolType
          address {
            annotation
          }
          currency {
            name
          }
        }
        buyCurrency {
          name
        }
        sellCurrency {
          name
        }
        sellAmount
        buyAmount
        date {
          date
        }
        timeInterval {
          minute
        }
        maker {
          address
          annotation
        }
      }
    }
  }`;

  useEffect(() => {
    const getData = async () => {
      const addressName = await getAddressName(address);
      const response = await axios({
        url: endpoint,
        method: 'POST',
        data: {
          query: QUERY,
        },
      });
      let a = [];
      response.data.data.ethereum.dexTrades.map(async (row) => {
        const modifiedData = {
          dex: row.smartContract.protocolType,
          name1: addressName,
          timeValue:
            time - new Date(row.timeInterval.minute).getTime() < 1000 * 60 * 60
              ? Math.floor(
                  (time - new Date(row.timeInterval.minute).getTime()) /
                    (1000 * 60)
                ) + ' minutes ago'
              : Math.floor(
                  (time - new Date(row.timeInterval.minute).getTime()) /
                    (1000 * 60 * 60)
                ) + ' hours ago',
          address: address,
          buyAmount: row.buyAmount,
          buyCurrency: row.buyCurrency.name,
          makerAddress: row.maker.address,
          makerName: await getAddressName(row.maker.address),
          sellAmount: row.sellAmount,
          sellCurrey: row.sellCurrency.name,
        };
        a.push(modifiedData);
        if (response.data.data.ethereum.dexTrades.length == a.length) {
          setDexData(a);
        }
      });
    };
    getData();
  }, []);

  const handleRequestSort = (event, property) => {
    console.log(property);
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <>
      <Row>
        <Col xs={12} lg={7}>
          <Box className='tb_lft_prt'>
            <Typography component='h3'>
              top transactions
              <span>(last 24 hours)</span>
            </Typography>
          </Box>
        </Col>
        <Col xs={12} lg={5}>
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
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={null}
                  onRequestSort={handleRequestSort}
                  rowCount={dexData.length}
                />
                <TableBody>
                  {stableSort(dexData, getComparator(order, orderBy)).map(
                    (row, i) => (
                      <RowN row={row} address={address} key={uniqueId('dex')} />
                    )
                  )}
                  {/* {stableSort(rows, getComparator(order, orderBy)).map(
                    (row, i) => (
                      <RowN row={row} address={address} />
                    )
                  )} */}
                  {/* {dexData &&
                    dexData.map((row) => <RowN row={row} address={address} />)} */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Col>
      </Row>
    </>
  );
}

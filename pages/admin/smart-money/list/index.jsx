import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import uniqueId from '../../../../utils/uniqueId';
import AdminSidebar from '../../../../components/AdminSidebar';
import axios from 'axios';

const columns = [
  { id: 'public_address', label: 'Public Address', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
export default function UserList() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [userData, setUserData] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const url = process.env.NEXT_PUBLIC_API_URL;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //////
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async () => {
    const deleteData = await axios.delete(
      '/admin/smart_money_management?id=' + deleteId
    );
    if (deleteData.status == 200) {
      alert('User Deleted Successfully');
      handleClose();
      window.location.reload();
    }
  };

  useEffect(() => {
    const getData = async () => {
      const smartMoneyList = await axios.get('/admin/smart_money_management');
      console.log(smartMoneyList);
      setUserData(smartMoneyList.data);
    };
    getData();
  }, []);
  return (
    <>
      <AdminSidebar />
      <Container className='mt-3'>
        <Box className='admn_pg_ttl'>
          <Typography component='h3'>User List</Typography>
          <Box className='adminttl_action'>
            <a href='/admin/smart-money/create' className='btn btn-primary'>
              Create User
            </a>
            {/* <button className='btn btn-primary'>Create User</button> */}
          </Box>
        </Box>
        <Box className='main_dt_table'>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.key}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData &&
                    userData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role='checkbox'
                            tabIndex={-1}
                            key={row.key}
                          >
                            {columns.map((column, index) => {
                              const value = row[column.id];
                              return (
                                <>
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                    {index == 2 && (
                                      <>
                                        <IconButton
                                          key={uniqueId('user')}
                                          aria-label='delete'
                                          onClick={() => {
                                            setDeleteId(row._id);
                                            handleClickOpen();
                                          }}
                                        >
                                          <DeleteIcon />
                                        </IconButton>

                                        <IconButton
                                          key={uniqueId('user')}
                                          href={
                                            '/admin/smart-money/create?id=' +
                                            row._id
                                          }
                                        >
                                          <EditIcon />
                                        </IconButton>
                                      </>
                                    )}
                                  </TableCell>
                                </>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component='div'
              count={userData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Container>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Delete Modal
            </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className='delete_modal'
      >
        <DialogContent>
          <DeleteSweepIcon />
          <Typography>Are you sure want to delete this item!</Typography>
          <Button
            onClick={deleteUser}
            color='secondary'
            variant='contained'
            autoFocus
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

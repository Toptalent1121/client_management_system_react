import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.uint * 3
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'John',
  birthday: '19801111',
  gender: 'Male',
  job: 'developer'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'Anna',
  birthday: '19801112',
  gender: 'Female',
  job: 'Designer'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: 'Mike',
  birthday: '19801113',
  gender: 'Male',
  job: 'engineer'
}];

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(customer => {
                return (
                  <Customer 
                    key = {customer.id} 
                    id = {customer.id}
                    image = {customer.image}
                    name = {customer.name}
                    birthday = {customer.birthday}
                    gender = {customer.gender}
                    job = {customer.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {method: 'DELETE'});
        this.props.stateRefresh();
    }
    
    render() {
        return (
            <>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Delete</Button>
                <Dialog open={this.state.open} onClose ={this.handleClose}>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            The selected customer will be removed.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.deleteCustomer(this.props.id)}>Delete</Button>
                        <Button variant="outlined" color="secondary" onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default CustomerDelete;
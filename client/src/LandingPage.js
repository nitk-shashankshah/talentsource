import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import NewPosting from './NewPosting';
import SimpleModal from './SimpleModal';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            openDialog:false
        }
    }


    handleOpenDialog=()=>{
        this.setState({openDialog:true});
    }

    handleCloseDialog=()=>{
        this.setState({openDialog:false});
    }

    render(){
        const { openDialog } = this.state;
        return(
            <div>
                <Button variant="outlined" onClick={this.handleOpenDialog}>
                    Post an Assignment
                </Button>

                {/* <Dialog
                    open={openDialog}
                    onClose={this.handleCloseDialog}
                    style={{width:"50rem"}}
                >
                    <DialogContent>
                        <NewPosting />
                    </DialogContent>
                </Dialog> */}

                <SimpleModal openModal={openDialog} />
            </div>
        );
    }
}

export default LandingPage;
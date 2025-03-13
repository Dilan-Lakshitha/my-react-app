import { useState } from 'react';
import './App.css';
import DialogBox from './DialogBox';
import SuccessBox from './paymentSuccess'

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [dialogSucess, setDialogSucess] = useState("");
  const [closedDialogType, setClosedDialogType] = useState("");

  const openDialog = (type) => {
    setDialogType(type);
    setIsDialogOpen(true);
  };
  const openSucessDialog = (type) => {
    setDialogSucess(type);
    setIsSuccessOpen(true);
  }
  const handleSucessCloseDialog = (closedType) => {
    setIsSuccessOpen(false);
    setDialogSucess(closedType);
  };

  const handleCloseDialog = (closedType) => {
    setIsDialogOpen(false);
    setClosedDialogType(closedType);
  };


  return (
    <div className="App">
      <button className='open-btn' onClick={() => openDialog("Deactivate")}>
        Open Deactivate Dialog
      </button>

      <button className='succesopen-btn' onClick={() => openSucessDialog("Confirm")}>
        Open Success Deactivate Dialog
      </button>

      <SuccessBox isOpen={isSuccessOpen} onClose={() => handleSucessCloseDialog(dialogSucess)} type={dialogSucess}>
        <h2>{dialogSucess} Dialog</h2>
        <p>
          Are you sure you want to {dialogSucess.toLowerCase()} this account?  This action cannot be undone.
        </p>
      </SuccessBox>

      <DialogBox isOpen={isDialogOpen} onClose={() => handleCloseDialog(dialogType)} type={dialogType}>
        <h2>{dialogType} Dialog</h2>
        <p>
          Are you sure you want to {dialogType.toLowerCase()} your account? All of your data will be permanently removed. This action cannot be undone.
        </p>
      </DialogBox>

    </div>
  );
}

export default App;

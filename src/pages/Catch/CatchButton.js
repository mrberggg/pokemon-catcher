import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

function CatchButton({ selectedPokemon, save }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const nameRef = useRef(null);

  function handleClickOpen() {
    setDialogIsOpen(true);
  }
  function handleClickClose() {
    setDialogIsOpen(false);
  }
  function handleClickSubmit() {
    save({ ...selectedPokemon, displayName: nameRef.current.value });
    setDialogIsOpen(false);
  }
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Catch Pokemon
      </Button>
      <Dialog open={dialogIsOpen} onClose={handleClickClose}>
        <DialogTitle id="form-dialog-title">Name the pokemon</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type: {selectedPokemon.types.map((t) => t.type.name).join(', ')}
          </DialogContentText>
          <TextField autoFocus label="Name" fullWidth inputRef={nameRef} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickSubmit} color="primary">
            Submit Name
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CatchButton;

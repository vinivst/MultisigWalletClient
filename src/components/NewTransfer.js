import React, { useState } from 'react';
import '../css/NewTransfer.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (event, field) => {
    const value = event.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (transfer && transfer.amount && transfer.to) {
      createTransfer(transfer);
    } else {
      alert('You must define the amount and address to transfer!');
    }
  };

  return (
    <Form inline onSubmit={(event) => submit(event)}>
      <br />
      <h2>Create Transfer</h2>
      <div className="row">
        <div className="col">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="amount" className="mr-sm-2">
              Amount
            </Label>
            <Input
              type="text"
              id="amount"
              placeholder="amount in Wei"
              onChange={(event) => updateTransfer(event, 'amount')}
            />
          </FormGroup>
        </div>
        <div className="col">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="to" className="mr-sm-2">
              To
            </Label>
            <Input
              type="text"
              id="to"
              placeholder="address"
              onChange={(event) => updateTransfer(event, 'to')}
            />
          </FormGroup>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Button>Submit</Button>
        </div>
      </div>
    </Form>
  );
}

export default NewTransfer;

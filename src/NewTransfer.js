import React, { useState } from 'react';

function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (event, field) => {
    const value = event.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    createTransfer(transfer);
  };

  return (
    <div>
      <h2>Create Transfer</h2>
      <form onSubmit={(event) => submit(event)}>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          onChange={(event) => updateTransfer(event, 'amount')}
        />
        <label htmlFor="to">To</label>
        <input
          id="to"
          type="text"
          onChange={(event) => updateTransfer(event, 'to')}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewTransfer;

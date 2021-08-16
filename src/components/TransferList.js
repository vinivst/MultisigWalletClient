import React from 'react';
import { Table, Button } from 'reactstrap';

function TransferList({ transfers, approveTransfer, alreadyApproved }) {
  return (
    <div>
      <br />
      <h2>Transfers</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals} {'    '}
                <Button
                  color="primary"
                  onClick={() => approveTransfer(transfer.id)}
                >
                  Approve
                </Button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TransferList;

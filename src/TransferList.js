import React from 'react';

function TransferList({ transfers, approveTransfer, alreadyApproved }) {
  return (
    <div>
      <h2>Transfers</h2>
      <table>
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
                {transfer.approvals}
                <button
                  onClick={() => approveTransfer(transfer.id)}
                  //disabled={transfer.alreadyApproved}
                >
                  Approve
                </button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferList;

import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../css/Header.css';

function Header({ approvers, quorum }) {
  return (
    <header>
      <ListGroup>
        <ListGroupItem color="info" className="title">
          Approvers:
        </ListGroupItem>
        {approvers.map((approver) => {
          return (
            <ListGroupItem key={approver} color="success">
              {approver}
            </ListGroupItem>
          );
        })}
        <ListGroupItem color="info" className="title">
          Quorum: {quorum}
        </ListGroupItem>
      </ListGroup>
    </header>
  );
}

export default Header;

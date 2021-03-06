import React, { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils';
import Header from './components/Header';
import NewTransfer from './components/NewTransfer';
import TransferList from './components/TransferList';
import { Container, Row } from 'reactstrap';
import './css/App.css';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      // transfers = transfers.map(async (transfer) => {
      //   const value = wallet.methods.approvals(accounts[0], transfer.id).call();
      //   return { ...transfer, alreadyApproved: value };
      // });
      // console.log(transfers);

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);

  const createTransfer = async (transfer) => {
    await wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({ from: accounts[0] });
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  };

  const approveTransfer = async (transferId) => {
    await wallet.methods
      .approveTransfer(transferId)
      .send({ from: accounts[0] });
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  };

  if (
    typeof web3 === 'undefined' ||
    typeof accounts === 'undefined' ||
    typeof wallet === 'undefined' ||
    approvers.length === 0 ||
    typeof quorum === 'undefined'
  ) {
    return (
      <div>Loading...You must have Metamask and switch to Rinkeby network</div>
    );
  }

  return (
    <Container className="App">
      <div>
        <Row>
          <h1 className="title">Multisig Dapp</h1>
        </Row>
        <Row>
          <Header approvers={approvers} quorum={quorum} />
        </Row>
        <Row>
          <NewTransfer createTransfer={createTransfer} />
        </Row>
        <TransferList transfers={transfers} approveTransfer={approveTransfer} />
      </div>
    </Container>
  );
}

export default App;

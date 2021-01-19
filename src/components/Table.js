import React, {useState} from "react";

function Table({ plates = [], money, handleAddMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const [walletAdd, setWalletAdd] = useState(0)

  function onChangeMoney(evt) {
    setWalletAdd(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    handleAddMoney(walletAdd)
    setWalletAdd(0)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={onChangeMoney} value={walletAdd}></input>
        <button type="submit">Add some $$$</button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;

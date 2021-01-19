import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushisArr, setSushisArr] = useState([])
  const [money, setMoney] = useState(50)
  console.log(sushisArr)

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then((sushisData) => {
      const updatedSushis = sushisData.map((sushi) => {
        return {...sushi, eaten: false}
      })
      setSushisArr(updatedSushis)
    })
  }, [])

  const handleSushiEaten = (sushiObjFromSushi) => {
    if (sushiObjFromSushi.price <= money) {
      const updatedEatenArr = sushisArr.map((sushi) => {
        if (sushi.id === sushiObjFromSushi.id) {
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      })
      setSushisArr(updatedEatenArr)
      setMoney(money - sushiObjFromSushi.price)
    } else {
      alert("ADD MORE MONEY!!")
    }
  }

  function handleAddMoney(amtMoney) {
    let intMoney = parseInt(amtMoney)
    setMoney(intMoney + money)
  }

  const eatenSushis = sushisArr.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushisArr} handleSushiEaten={handleSushiEaten}/>
      <Table money={money} plates={eatenSushis} handleAddMoney={handleAddMoney}/>
    </div>
  );
}

export default App;

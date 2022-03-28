import React, {useState} from 'react'
import "./budgetBalance.css"

const BudgetBalance = (props) => {
  const [input, setInput] = useState(false)

  const handleInput = (e) =>{
    setInput(e.target.value)
  }

  
  return (
    <div className="budgetBalance">
      <div className="balance">
        {props.balance}
      </div>
      <div className="balance-button">
        <input onChange={handleInput}/>
        <button onClick={() => props.setBalance(input)}>Update Balance</button>
      </div>
    </div>
  )
}

export default BudgetBalance
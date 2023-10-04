import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Lexend;
  width: 100%;
`;

const BalanceBox = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const AddTransactions = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  border-radius: 12px;
  margin: 20px;
  & input {
    outline: none;
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;
const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.toggleAddTxn();
  };

  return (
    <AddTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransactions onClick={addTransaction}>
        Add Transaction
      </AddTransactions>
    </AddTransactionContainer>
  );
};

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 135px;
  font-size: 14px;

  & span {
    font-weight: bold;
    font-size: 18px;
    color: ${(props) => (props.isIncome ? "green" : "crimson")};
  }
`;

const OverviewCompomnent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance : ₹{props.income - props.expense}
        <AddTransactions onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "Add"}
        </AddTransactions>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          toggleAddTxn={toggleAddTxn}
          addTransaction={props.addTransaction}
        />
      )}

      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>₹ {props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>₹ {props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewCompomnent;
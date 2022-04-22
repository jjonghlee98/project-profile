// import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Jonghwan",
      date: new Date(2022, 4, 22),
      amount: 32.99,
    },
    {
      id: "e2",
      title: "Junghwan",
      date: new Date(2022, 4, 23),
      amount: 52.99,
    },
    {
      id: "e3",
      title: "Hee",
      date: new Date(2022, 4, 24),
      amount: 15.99,
    },
    {
      id: "e4",
      title: "Hae",
      date: new Date(2022, 4, 25),
      amount: 99.99,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;

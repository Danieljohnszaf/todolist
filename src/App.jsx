const todoList = [
  {
    name: "Wash Dishes",
  },
  {
    name: "Clean Backyard",
  },
  {
    name: "Learn Javascript",
  },
];

function App() {
  return (
    <>
      <ul>
        { todoList.map((todoEntry) => {
          return <li> { todoEntry.name } </li>
        }
          
        ) }
      </ul>
    </>
  );
}

export default App;

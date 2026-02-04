import "./App.css";

function App() {
  const numArray = [1, 2, 3, 4, 5, 4, 3];
  const studentList = [
    {id: 1, name: "Jef", age: 20},
    {id: 2, name: "Jan", age: 25},
    {id: 3, name: "Joris", age: 18},
    {id: 4, name: "Andie", age: 30},
    {id: 5, name: "Senne", age: 35},
  ];
  return (
    <>
      <h1>Labo 1: Lijsten</h1>
      <br />
      <h2>Getallenlijst</h2>
      <ul>
        {numArray.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <br />
      <h2>Studentenlijst</h2>
      <ol>
        {studentList.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ol>
      <br />
      <h2>Studentenlijst met J</h2>
      {studentList
        .filter((e) => e.name.toUpperCase().startsWith("J"))
        .map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      <br />
      <h2>Select</h2>
      <br />
      <select name="names" id="student-names">
        {studentList.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <br />
      <h2>Table</h2>
      <br />

      <table>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Leeftijd</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

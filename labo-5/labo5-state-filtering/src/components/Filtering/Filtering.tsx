import {useState} from "react";

interface IStudents {
  name: string;
  age: number;
  year: number;
}

const STUDENTS: IStudents[] = [
  {name: "Daan", age: 20, year: 2},
  {name: "Sophie", age: 22, year: 4},
  {name: "Milan", age: 19, year: 1},
  {name: "Tess", age: 21, year: 3},
  {name: "Sem", age: 23, year: 5},
  {name: "Emma", age: 20, year: 2},
  {name: "Levi", age: 24, year: 4},
  {name: "Julia", age: 19, year: 1},
  {name: "Luuk", age: 22, year: 3},
  {name: "Mila", age: 21, year: 2},
];

const Filtering = () => {
  const [sortField, setSortField] = useState<keyof IStudents | null>(null);
  const [searchText, setSearchText] = useState("");
  let arr = [...STUDENTS];

  if (searchText !== "") {
    arr = arr.filter((student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  if (sortField !== null) {
    if (sortField === "name") {
      arr.sort((a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
    } else {
      arr.sort((a, b) => {
        return a[sortField] - b[sortField];
      });
    }
  }

  return (
    <>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          id="search"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th
              style={{
                cursor: "pointer",
                color: sortField === "name" ? "red" : "",
              }}
              onClick={() =>
                setSortField((prev) => {
                  return prev === "name" ? null : "name";
                })
              }
            >
              Name
            </th>
            <th
              style={{
                cursor: "pointer",
                color: sortField === "age" ? "red" : "",
              }}
              onClick={() =>
                setSortField((prev) => {
                  return prev === "age" ? null : "age";
                })
              }
            >
              Age
            </th>
            <th
              style={{
                cursor: "pointer",
                color: sortField === "year" ? "red" : "",
              }}
              onClick={() =>
                setSortField((prev) => {
                  return prev === "year" ? null : "year";
                })
              }
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Filtering;

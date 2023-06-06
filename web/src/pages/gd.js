import * as React from "react";
import Navbar from "../components/navbar";
import { useTable } from "react-table";

function Home() {
  const data = [
    {
      name: "Ayaan",
      age: 26,
    },
    {
      name: "Ahana",
      age: 22,
    },
    {
      name: "Peter",
      age: 40,
    },
    {
      name: "Virat",
      age: 30,
    },
    {
      name: "Rohit",
      age: 32,
    },
    {
      name: "Dhoni",
      age: 37,
    },
  ];
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Navbar />
      {/* <div className="users">
        {data.map((user) => (
          <div className="user">
            {user.id} {user.name}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;

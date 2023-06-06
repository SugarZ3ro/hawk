import * as React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useTable } from "react-table";
import "./Home.css";
import Modal from "../components/Modal";
import "../components/Modal.css";
import Heading from "../components/Heading";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const data = React.useMemo(
    () => [
      {
        name: "Ayaan",
        age: 26,
        link: "ok",
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
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "age",
      },
      {
        Header: "Location",
        accessor: "nam",
      },
      {
        Header: "Threat detected",
        accessor: "nasm",
      },
      {
        Header: "Threat level",
        accessor: "name",
      },
      {
        Header: "View ",
        accessor: "link",
        Cell: (props) => (
          <div>
            <button onClick={() => setOpenModal(true)} className="modalButton">
              Preview
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          //   <a href="https://youtu.be/DLzxrzFCyOs"> view image </a>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <Navbar />

      <Heading />
      {/* <div className="users">
            {data.map((user) => (
              <div className="user">
                {user.id} {user.name}
              </div>
            ))}
          </div> */}
      
      <table style={{marginTop: "500px"}} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
export default Home;

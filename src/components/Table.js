// import React from 'react';
import satData from "./satData";
import "./styling.css"

// function Operational(props) {
//   const isOperational = props.isOperational;
//   if (isOperational.value === true) {
//     return <td>Active</td>
//   } else {
//   return <td>Inactive</td>
//    }
// }


const Table = ({ data, index, sat }) => {
    return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
      <tr key={sat.id}>
        <td>{data[index].name}</td>
        <td>{data[index].type}</td>
        <td>{data[index].lauchDate}</td>
        <td>{data[index].operational ? "Active" : "Inactive"}</td>
     </tr>
        </tbody>
      </table>
  );
  console.log({data})
};

export default Table;
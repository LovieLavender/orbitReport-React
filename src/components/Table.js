// import React from 'react';
import satData from "./satData";
import "./styling.css"

function Operational(props) {
  const isOperational = props.isOperational;
  if (isOperational.value === true) {
    return <td>Active</td>
  } else {
  return <td>Inactive</td>
   }
}


const Table = ({ sat }) => {
  sat.map(id, data =>
    <div key={data.id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.lauchDate}</td>
      <Operational />
      console.log({sat})
    </div>
    )
    
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
        <tr>
          <Table />
        </tr>
        </tbody>
      </table>
  );
};

export default Table;
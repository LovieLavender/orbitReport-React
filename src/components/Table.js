
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


const Table = ({ sat }) => {
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
          { sat.map((data, id) => {
            return (
              <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
           </tr>
            );
          })

          }
     
        </tbody>
      </table>
  );
  
};

export default Table;
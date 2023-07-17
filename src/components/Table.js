const Table = ({ sat }) => {
  {sat.map((id, data) => {
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
        <tr data-key = {data.id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <script>
            if (isOperational === True) {
          <td>True</td>
            } else if {
              <td>False</td>
            }
           </script> 
        </tr>
        </tbody>
      </table>
  );
 })}
};

export default Table;
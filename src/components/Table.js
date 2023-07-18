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
          <div>
        
        const tableData = {sat.map((id, data) => {
          return (
        <tr key = {tableData.id}>
          <td>{tableData.name}</td>
          <td>{tableData.type}</td>
          <td>{tableData.launchDate}</td>
          <div>
            function Status() {
              <div>
                {sat.map((props) => {
                  return props.operational === true ? (
                    <td key = {props.operational}>True
                    </td>
                  ) : False;
      
                  })}
            }
              </div>  
              
          
        </tr>
          )
        })}
        </div>
        </tbody>
      </table>
  );
 
};

export default Table;
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-white mb-5">Dashboard</h1>
      <table className="table table-dark table-hover text-white">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Vasant</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Pavan</td>
            <td>Pune</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Aditya</td>
            <td>Banglore</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

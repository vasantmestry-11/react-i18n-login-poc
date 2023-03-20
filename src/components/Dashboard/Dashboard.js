import { useTranslation } from "react-i18next";
import "./Dashboard.css";
const Dashboard = () => {
  const { t } = useTranslation();

  const columns = [
    { id: "id", label: t("id") },
    { id: "name", label: t("name") },
    { id: "location", label: t("location") },
  ];

  const row = [
    { id: 1, name: "Vasant", location: "Mumbai" },
    { id: 2, name: "Pavan", location: "Pune" },
    { id: 3, name: "Aditya", location: "Banglore" },
  ];

  return (
    <div className="container">
      <h1 className="text-white mb-5">Dashboard</h1>
      <table className="table table-dark table-hover text-white">
        <thead>
          <tr>
            {columns.map(({ id, label }) => (
              <th key={id}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {row.map(({ id, name, location }) => (
            <tr>
              <th key={id} scope="row">
                {id}
              </th>
              <td>{name}</td>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

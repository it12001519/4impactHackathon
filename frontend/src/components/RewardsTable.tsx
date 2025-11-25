import { Table } from "react-bootstrap";

function Rewards() {
  return (
    <>
      <div className="draggable" style={{ padding: "20px 20px 10px 20px" }}>
        <Table hover borderless striped className="text-center">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th className="d-none d-xl-table-cell">Points</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
            <tr>
              <td>Martha Agila</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
            <tr>
              <td>Martha Agila</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Passed HR Interview</td>
            </tr>
            <tr>
              <td>Mark Santos</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
            <tr>
              <td>Mark Santos</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Passed HR Interview</td>
            </tr>
            <tr>
              <td>Mark Santos</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">
                Passed Technical Interview
              </td>
            </tr>
            <tr>
              <td>Mark Santos</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">
                Passed Client Interview
              </td>
            </tr>
            <tr>
              <td>Troy Smith</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">50 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Rewards;

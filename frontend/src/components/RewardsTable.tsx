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
                <span className="badge bg-success">100 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
            <tr>
              <td>Martha Agila</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">100 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
            <tr>
              <td>Martha Agila</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">100 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Passed HR Interview</td>
            </tr>
            <tr>
              <td>Mark Santos</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">100 Pts</span>
              </td>
              <td className="d-none d-xl-table-cell">Submitted CV</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <br />
      <br />
      <h4 style={{ textAlign: "center" }}>FAQ: How to earn points</h4>
      <div className="draggable" style={{ padding: "20px 20px 10px 20px" }}>
        <Table hover borderless striped className="text-center">
          <thead>
            <tr>
              <th>Milestone Breakdown</th>
              <th className="d-none d-xl-table-cell">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Candidate referred shortlisted for initial interview</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">100 Pts</span>
              </td>
            </tr>
            <tr>
              <td>Candidate referred clears technical interview/exam</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">100 Pts</span>
              </td>
            </tr>
            <tr>
              <td>Candidate referred endorsed for final interview/client</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">300 Pts</span>
              </td>
            </tr>
            <tr>
              <td>Candidate referred, hired!</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">1000 Pts</span>
              </td>
            </tr>
            <tr>
              <td>Priority role bonus (hard-to-fill)</td>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">500 Pts</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <h4 style={{ textAlign: "center" }}>FAQ: How to spend points</h4>
      <div className="draggable" style={{ padding: "20px 20px 10px 20px" }}>
        <Table hover borderless striped className="text-center">
          <thead>
            <tr>
              <th>Points Earned</th>
              <th className="d-none d-xl-table-cell">PH Reward Example</th>
              <th className="d-none d-xl-table-cell">AU Reward Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">1500 Pts</span>
              </td>
              <td>₱5000 worth of Sodexo, Lazada, Shopee, etc.</td>
              <td>
                $150 AUD worth of eGift cards (Coles, Woolworths, JB Hi-Fi),
                Uber Eats credit
              </td>
            </tr>
            <tr>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">2500 Pts</span>
              </td>
              <td>₱10000 worth of SM GCs, Premium experiences or tech gear</td>
              <td>
                $300 AUD worth of eGift cards (Coles, Woolworths, JB Hi-Fi),
                Uber Eats credit
              </td>
            </tr>
            <tr>
              <td className="d-none d-xl-table-cell">
                <span className="badge bg-success">3500 Pts</span>
              </td>
              <td>
                ₱15000 worth of SM GCs or premium item (smartwatch, tablet, etc)
              </td>
              <td>$500 AUD tech gear (smartwatch, headphones, tablet)</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Rewards;

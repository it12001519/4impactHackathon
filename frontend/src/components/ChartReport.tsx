import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AgCharts } from "ag-charts-react";

export default function ChartReport() {
  const [barChartOptions, setBarChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", referredCandidates: 21 },
      { month: "Mar", referredCandidates: 6 },
      { month: "May", referredCandidates: 2 },
      { month: "Jul", referredCandidates: 8 },
      { month: "Sep", referredCandidates: 10 },
      { month: "Nov", referredCandidates: 13 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "referredCandidates",
        fill: "rgb(13 202 240)",
      },
    ],
  });

  const [pieChartOptions, setPieChartOptions] = useState({
    data: [
      { asset: "In-progess", amount: 8 },
      { asset: "Completed", amount: 3 },
      { asset: "On-hold", amount: 5 },
      { asset: "Failed", amount: 6 },
    ],
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
        fills: [
          "rgb(13 202 240)",
          "rgb(25 135 84)",
          "rgb(255 193 7)",
          "#ff4f4fff",
        ],
      },
    ],
  });
  return (
    <>
      <Row className="box-shadow">
        <Col md={6}>
          <Card.Title>Referred Candidates / Month</Card.Title>
          <AgCharts options={barChartOptions} />
        </Col>
        <Col md={6}>
          <Card.Title>Monthly Status</Card.Title>
          <AgCharts options={pieChartOptions} />
        </Col>
      </Row>
    </>
  );
}

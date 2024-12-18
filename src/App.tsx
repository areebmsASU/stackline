import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LineChart } from "@mui/x-charts/LineChart";

import NavBar from "./components/Navbar";
import ProductData from "./components/ProductData";

import data from "./data.json";

function App() {
  return (
    <Container fluid style={{ width: "100%" }}>
      <NavBar />
      <Row className="justify-content-center" style={{ marginTop: 100 }}>
        <ProductData />
        <Col className="mx-1" xs={8}>
          <Row style={{ backgroundColor: "white" }}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
              grid={{ vertical: true, horizontal: true }}
            />
          </Row>
          <Row>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

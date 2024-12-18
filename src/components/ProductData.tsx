import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export default function ProductData() {
  return (
    <Col className="mx-1" xs={3} style={{ backgroundColor: "white" }}>
      <Row>
        <Col className="text-center">
          <Image
            style={{ width: "70%", padding: 10 }}
            src={
              "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg"
            }
            fluid
          />
          <div>
            <h2 className="text-center">Shark Ninja</h2>
            <p className="text-center">
              Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System
            </p>
            <hr />
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New Name
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New hello
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New
            </Badge>
            <Badge bg="secondary" style={{ marginLeft: "5px" }}>
              New
            </Badge>
            <hr />
          </div>
        </Col>
      </Row>
    </Col>
  );
}

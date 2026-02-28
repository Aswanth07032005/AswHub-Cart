import { useSelector } from "react-redux";
import "./UserList.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserList() {
  const { users } = useSelector((state) => state.userState);

  return (
    <Container fluid className="userlist-container min-vh-100">
      <h2 className="userlist-title text-dark">Users</h2>

      <Row className="userlist-wrapper">
        {users.map((item) => (
          <Col xs={12} key={item.id}>
            <div className="user-card">
              <div className="user-left">
                <img
                  src={item.avatar || "https://via.placeholder.com/100"}
                  alt={item.name}
                  className="user-image"
                />
              </div>

              <Col className="user-right">
                <div className="user-info">
                  <h3 className="user-name">{item.name}</h3>
                  <p className="user-email">{item.email}</p>
                  <p className="user-phone">{item.phone}</p>
                </div>

                <div className="user-actions">
                 <Link to={`/user-View/${item.id}`}>
                  <Button  variant="primary">View</Button>
                 </Link>
              
                </div>
              </Col>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserList;
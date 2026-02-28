import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import "./UserView.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userUpdateRole, userUpdateStatus } from "../redux/userSlice";

function UsersView() {
  const { users } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleStatusChange = (value) => {
    console.log(value);

    const id = value.id;
    dispatch(userUpdateStatus(id));
    toast.success(
      `${value.name} Status ${value.status ? "Deactivated successfully" : "Activated successfully"}`,
    );
  };

  const handelRoleChange = (item, role) => {
    let id = item.id;
    dispatch(userUpdateRole({ id, role }));

    toast.success(
      `${item.name}’s role has been successfully changed to ${role}`,
    );
  };

  const findUsers = users.find((item) => item.id === Number(id));

  return (
    <Container className="profile-container">
      

        
      <Row className="profile-card">
       
        <Col md={4} className="profile-left bg-danger">
           
          <Image
            src={findUsers.avatar|| "https://via.placeholder.com/100" }
            alt={findUsers.name}
            className="profile-image"
          />
          <h2 className="profile-name">{findUsers.name}</h2>
        </Col>

        <Col md={8} className="profile-right">
          <h3 className="section-title">Personal Information</h3>

          <div className="info-row">
            <span>Email</span>
            <p>{findUsers.email}</p>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <p>{findUsers.phone || "Not Provided"}</p>
          </div>

          <div className="info-row">
            <span>Address</span>
            <p>{findUsers.address || "Not Provided"}</p>
          </div>

          <div className="info-row">
            <span>Date of Birth</span>
            <p>{findUsers.dob || "Not Provided"}</p>
          </div>

          <div className="info-row">
            <span>City</span>
            <p>{findUsers?.city || "Not Provided"}</p>
          </div>

          <div className="info-row">
            <span>Status</span>
            <Form.Check
              onChange={() => handleStatusChange(findUsers)}
              checked={findUsers?.status}
              type="switch"
              id={`status-${findUsers.id}`}
              label={findUsers.status ? "Active" : "Inactive"}
              className={findUsers.status ? "switch-active" : "switch-inactive"}
            />
          </div>

          <div className="info-row">
            <span>Role</span>
             <Form.Select className="form-select-user"
                      defaultValue={findUsers.role}
                      onChange={(event) =>
                        handelRoleChange(findUsers, event.target.value)
                      }
                    >
                      <option className="text-center td-align" value="admin">
                        Admin
                      </option>
                      <option className="text-center td-align" value="seller">
                        Seller
                      </option>
                      <option className="text-center td-align" value="user">
                        User
                      </option>
                    </Form.Select>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UsersView;

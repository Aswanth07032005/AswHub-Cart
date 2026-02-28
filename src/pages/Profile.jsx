import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./Profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

    const {user,users} = useSelector((state)=>(state.userState))
    
    const findLoginUser = users.find((item)=>(item.email === user.email))

    console.log(findLoginUser);
    
   

  return (
    <Container className="profile-page">
      <Row className="profile-card">
        {/* LEFT SIDE */}
        <Col md={4} className="profile-left bg-danger">
          <Image
            src={findLoginUser.avatar}
            alt={findLoginUser.name}
            className="profile-avatar"
          />
          <h2 className="profile-name">{findLoginUser.name}</h2>
          <p className="profile-role">{findLoginUser.role}</p>

        
        </Col>

       
        <Col md={8} className="profile-right">
          <h3 className="section-title">Profile</h3>
          <div className="info-row">
            <span>Email</span>
            <p>{findLoginUser.email}</p>
          </div>
          <div className="info-row">
            <span>Phone</span>
            <p>{findLoginUser?.phone ?? "Not Provide"}</p>
          </div>
          <div className="info-row">
            <span>Address</span>
            <p>{findLoginUser?.address ?? "Not Provide"}</p>
          </div>
          <div className="info-row">
            <span>Last Updated</span>
            <p>{findLoginUser?.lastUpdated}</p>
          </div>
            <div className="info-row">
            <span>Password</span>
            <p>{findLoginUser.password}</p>
          </div>
        

          <div className="profile-actions">
           <Link to={`/edit-prifile/${findLoginUser.id}`}>
            <Button  variant="danger" className="me-2">
              Edit Profile
            </Button>
           </Link>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
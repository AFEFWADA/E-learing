import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import SidebarUser from "./Sidebar";

const GraduateProfile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    github: "",
  });

  

  const handleCVUpload = (e) => {
    console.log("CV uploaded:", e.target.files[0]);
  };

 



  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <SidebarUser />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="mb-4">Graduate Profile</h2>

          {/* Personal Information */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">Personal Information</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={personalInfo.fullName}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={personalInfo.phone}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      value={personalInfo.location}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          location: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control
                      type="url"
                      value={personalInfo.linkedIn}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          linkedIn: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Profile</Form.Label>
                    <Form.Control
                      type="url"
                      value={personalInfo.github}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          github: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* CV Upload */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">CV Upload</h4>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Upload your CV (PDF format)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handleCVUpload}
                />
              </Form.Group>
            </Card.Body>
          </Card>



          <div className="d-flex justify-content-end">
            <Button variant="dark" size="lg">
              Save Profile
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GraduateProfile;

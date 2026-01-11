import React from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import '../pages/Home.css'

const Menubar = () => {
  return (
    <div>
        <div className="navigationBar">
                <Navbar expand="lg" className="bg-body-tertiary navbarMain">
                  <Container fluid className="navbarContent">
                    <Navbar.Brand href="#" className="navtitle">
                      ES Paws
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='navbarToggle' />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="me-auto my-2 my-lg-0 navlinks"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                      >
                        <Nav.Link href="/" className="navlink">
                          Home
                        </Nav.Link>
                        <Nav.Link href="/" className="navlink">
                          About
                        </Nav.Link>
                        <Nav.Link href="/" className="navlink">
                          Pets
                        </Nav.Link>
                        <Nav.Link href="/" className="navlink">
                          Blog
                        </Nav.Link>
                        <Nav.Link href="/" className="navlink">
                          FAQs
                        </Nav.Link>
                        <Nav.Link href="/" className="navlink">
                          Contact
                        </Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                        {/* <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link> */}
                      </Nav>
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                          style={{ fontFamily: "Outfit" }}
                        />
                        <Button variant="outline-danger">
                          <FaSearch />
                        </Button>
                      </Form>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
    </div>
  )
}

export default Menubar
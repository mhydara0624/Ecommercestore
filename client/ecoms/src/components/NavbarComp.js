import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Navbars() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Rare Electronics</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navbars

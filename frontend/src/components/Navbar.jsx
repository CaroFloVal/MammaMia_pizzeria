import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 


const NavbarPizza = () => {
    const total = 25000;
    const token = false;
  
    return (
      <>
        <Navbar style={{ width: '100%' }} className="barra d-flex" bg="dark" variant="dark">
          <Container className="d-flex">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto d-flex">
              <Nav.Link href="#home">🍕 Home</Nav.Link>
              {token ? (
                <>
                  <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                  <Nav.Link href="#logout">🔒 Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#login">🔐 Login</Nav.Link>
                  <Nav.Link href="#register">🔐 Register</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Nav.Link className="ml-auto" href="#cart">
                🛒 Total: ${total.toLocaleString()}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default NavbarPizza;

// const NavbarPizza = () => {
//     const total = 25000;
//     const token = false;
//     return (
//     <>
//     <Navbar style={{ width: '100%'}}  className="barra d-flex" bg="dark" data-bs-theme="dark"  >
//       <Container className='d-flex'>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto d-flex">
//           <Nav.Link href="#home">🍕Home</Nav.Link>

//         if token === false? {
//             return  <Nav.Link href="#features">🔓Profile</Nav.Link>
//                     <Nav.Link href="#pricing">🔒 Logout</Nav.Link>
//         } ;
//         {
//           <Nav.Link href="#pricing">🔐 Login</Nav.Link>
//           <Nav.Link href="#pricing">🔐 Register</Nav.Link>
//             };
        
//           <Nav.Link className="ml-auto" href="#pricing">🛒 Total: $0.00</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//     <br />
    
//   </>
//   );
// };


// export default NavbarPizza;

// const NavbarTotal = () => {
//     const total = 25000;
//     const token = false;
//     return (
//     ...
//     );
//     };

// export NavbarTotal

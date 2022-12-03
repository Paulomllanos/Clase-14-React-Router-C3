import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark'>
      <Navbar.Brand>
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/products'>
            Products
          </Nav.Link>
          <NavDropdown title='Admin'>
            <NavDropdown.Item as={NavLink} to='/admin/users'>Usuarios</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to='/login'>Iniciar Sesion</Nav.Link>
          <Nav.Link as={NavLink} to='/register'>Registrarse</Nav.Link>
          <Nav.Link as={NavLink} to='/account'>Mi Cuenta</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </>
    
  )
}

export default Navigation;
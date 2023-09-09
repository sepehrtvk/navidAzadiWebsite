import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MainNavigation() {
  return (
    <header>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-between'
            id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='#home' className=' ms-3'>
                صفحه اصلی
              </Nav.Link>
              <Nav.Link href='#plans' className=' ms-3'>
                پلن ها
              </Nav.Link>
              <Nav.Link href='#trainers' className=' ms-3'>
                شاگردان
              </Nav.Link>
              <Nav.Link href='#aboutMe' className=' ms-3'>
                درباره من
              </Nav.Link>
            </Nav>
            <div className='d-flex align-items-center'>
              <button className='btn btn-primary ms-4'>ورود / ثبت نام</button>
              <div className=' border-end pe-4'>
                <p className='mb-1'>پشتیبانی:</p>
                <span className=''>09120532121</span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavigation;

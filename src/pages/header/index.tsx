import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css'

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link href="/" as="/">
        <Navbar.Brand href="#">さけ.io</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Myページ</Nav.Link>
          <NavDropdown title="レシピ" id="collasible-nav-dropdown">
            <Link href="/recipe" as="/recipe">
              <NavDropdown.Item href="#action/3.1">
                酒豪のレシピ
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Item href="#action/3.2">レシピを投稿</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              投稿したレシピを削除
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">設定</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            テーマを変える
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

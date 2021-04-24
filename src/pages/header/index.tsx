import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">さけ.io</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Myページ</Nav.Link>
          <NavDropdown title="レシピ" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              みんなのレシピを探す
            </NavDropdown.Item>
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

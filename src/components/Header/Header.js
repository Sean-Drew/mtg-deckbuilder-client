import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#my-play-decks">My Decks</Nav.Link>
    <Nav.Link href="#decks/create">Create New Deck</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <div className="top-nav-wrapper">
    <Navbar className="top-nav-bar" expand="md">
      <Navbar.Brand href="#">
        mtg-deckbuilder-client
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.userName}</span>}
          {/* { alwaysOptions } */}
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header

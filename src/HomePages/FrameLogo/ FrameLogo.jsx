import React from 'react'
import style from './FrameLogo.module.css'

import Nav from 'react-bootstrap/Nav';

import img1 from '../../assets/Frame (1).png'
import img2 from '../../assets/Frame (3).png'
import img3 from '../../assets/Frame (4).png'
import img4 from '../../assets/Frame (5).png'
import img5 from '../../assets/Frame (6).png'
import img6 from '../../assets/Frame.png'



function Frame() {
  return (
    <Nav className= {style.nav_logo}>
      <Nav.Item>
        <Nav.Link className={style.logo} href=""><img src={img6} alt="Image 5" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={style.logo}  href=""><img src={img1} alt="Image 1" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={style.logo}  href=""><img src={img2} alt="Image 2" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={style.logo}  href=""><img src={img3} alt="Image 3" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={style.logo}  href=""><img src={img4} alt="Image 4" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={style.logo}  href=""><img src={img5} alt="Image 5" /></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Frame

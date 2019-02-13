import React from "react"
import logo from "../../static/logo.png"

function Image(){
    return <div >
      <a href="https://hackclub.com/"><img style={{position: `absolute`, top: `10px`, left: 0, border: 0, width: `230px`, zIndex: 999}} src="https://cdn.jsdelivr.net/gh/hackclub/meta@fc4c0d220426eb53a176e656ae7700d9dcd0b2c5/logos/banner_orpheus_hand.svg" alt="Hack Club"/></a>
      <a href="https://docs.google.com/forms/d/13u5CvxGbdoKRnrjp16H5MDlfXjnRJm6hy81H6VX-9x0">
    <img src={logo} alt="Kid typing behind laptop,
     with Hack Club, JV and a get a reminder sticker.
     click for link that sends you to join"/></a>

        <div>
          {/* © {new Date().getFullYear()}, */}
           Built with
          {` `}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>{` `}and ❤️
        </div>
        </div>
}

export default Image

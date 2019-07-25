import React from "react"
import logo from "../../static/logo.png"
import Banner from '@hackclub/banner'
function Image(){
    return <div >
      <Banner />
      <a href="https://docs.google.com/forms/d/13u5CvxGbdoKRnrjp16H5MDlfXjnRJm6hy81H6VX-9x0">
    <img src={logo}  alt="Kid typing behind laptop,
     with Hack Club, JV and a get a reminder sticker.
     click for link that sends you to join"/></a>

          {/* © {new Date().getFullYear()}, */}
           Built with
          {` `}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>{` `}and ❤️
        </div>
}

export default Image

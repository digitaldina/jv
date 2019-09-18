import React from "react"
import logo from "../../static/logo.svg"
import Banner from '@hackclub/banner'
function Image(){
    return <div >
        <p style={{fontFamily: 'Segoe UI', color: "#18303B",fontSize: '16px',textAlign: 'center'}}>Interested in attending the Hack Club Trip to Ryerson in Downtown Toronto for a cybersecurity event? <a href="https://drive.google.com/file/d/0B1AzkdN64xEDOFdPekJJX2lkWW9ET2tISUpobnlfSTBqazE0/view?usp=sharing" style={{color: "#9586EA"}}>Click here for forms</a> (please hand in your forms to Mr. Peters by Friday  Sept. 20th)<br/><a href="https://dmz.ryerson.ca/canhack" style={{color: "#9586EA"}}>Click here for details about the event</a></p>
        <a href="https://docs.google.com/forms/d/13u5CvxGbdoKRnrjp16H5MDlfXjnRJm6hy81H6VX-9x0">
        <img src={logo} style={{padding: '1', margin: '0'}}  alt="Kid typing behind laptop,
         with Hack Club, JV and a get a reminder sticker.
         click for link that sends you to join"/></a>
        <p style={{fontFamily: 'Segoe UI', color: "#18303B"}}>Got a suggestion for a workshop you want to see at JV's Hack Club? <a href="https://docs.google.com/forms/d/18KIrhHSD9QemtvMccrNzO16kk3DvdRLOVQQn53-6Vy4" style={{color: "#9586EA"}}>Let us know here!</a></p>
    </div>
}

export default Image

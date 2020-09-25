import React from 'react';
import Common from './Common';
const img_home = "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"



function About() {
  return (
    <>
      <Common 
      name="Welcome to "
      imgsrc={img_home}
      visit="/contact"
      btname="Contact Now"
      line="By taking your business online, we help you to innovate & grow "
      para="Take your business online with us. We have good plans & strategies which helps business 
      to reach to lot of people"
      />
    </>
  );
}

export default About;

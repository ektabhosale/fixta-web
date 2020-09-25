import React from 'react';
import Common from "./Common"
const img_home = "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"


function Home() {
  return (
    <>
       <Common 
      name="Grow your business with "
      imgsrc={img_home}
      visit="/services"
      btname="Get Started"
      line="We are the team of talented developers making Software Systems"
      />
    </>
  );
}

export default Home;

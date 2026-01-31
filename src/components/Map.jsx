import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.836673196187!2d76.642586!3d10.823808099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fd51d8e1faf%3A0x4e3d7915b3621961!2sNSS%20College%20of%20Engineering%2C%20Palakkad!5e0!3m2!1sen!2sin!4v1769875050302!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-md map"
      ></iframe>
    </div>
  );
}

export default Map;
 
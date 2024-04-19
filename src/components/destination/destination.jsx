import React from "react";
import "./destination.css";
import Destinationdata from "../destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <Destinationdata
      clsName="first-des"
        heading="Taal Valcano, Bantangas"
        text="Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25–30 km (16–19 mi) caldera formed by explosive eruptions between 140,000 and 5,380 BP, Each of these eruptions created extensive ignimbrite deposits reaching as far away as present-day Manila."
        img1="/assets/1.jpg"
        img2="/assets/2.jpg" 
         />
         <Destinationdata
         clsName="first-des-reverse"
        heading="Mt.Daguldul Bantagos"
        text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total. Of course there is the peak, which, although not really spectacular in terms of views, has a refreshing feel. Finally, there are excellent sidetrip choices such as the unique Naambon Falls and the acclaimed Laiya beach."
        img1="/assets/3.jpg"
        img2="/assets/4.jpg" 
         />
    </div>
  );
};

export default Destination;

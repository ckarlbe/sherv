import React from "react"
import Card from "../../components/card"
import SlalomImage from "../../images/slalom.png"
import FreestyleImage from "../../images/freestyle.png"
import FreerideImage from "../../images/freeride.png"
import FoilImage from "../../images/foil.png"
import WaveImage from "../../images/waves.png"

export default () => {
  return (
    <div>
      <h1>Sails</h1>
      <ul>
        <li>
          <Card target={"/sails/slalom"} text={"Slalom"} imgSource={SlalomImage} />
        </li>
        <li>
          <Card target={"/sails/freestyle"} text={"Freestyle"} imgSource={FreestyleImage} />
        </li>
        <li>
          <Card target={"/sails/wave"} text={"Freestyle"} imgSource={WaveImage} />
        </li>
        <li>
          <Card target={"/sails/freeride"} text={"Freeride"} imgSource={FreerideImage} />
        </li>
        <li>
          <Card target={"/sails/foil"} text={"Foil"} imgSource={FoilImage} />
        </li>
      </ul>
    </div>
  )
}

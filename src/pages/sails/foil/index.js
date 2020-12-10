import React from "react"
import Card from "../../../components/card"
import VFRImage from "../../../images/vfr.png"
import WickedImage from "../../../images/wicked.png"

export default () => {
  return (
    <>
      <h1>Foil sails</h1>
      <ul>
        <li>
          <Card target={"/sails/foil/vfr"} text={"V-FR"} imgSource={VFRImage} />
        </li>
        <li>
          <Card target={"/sails/foil/wicked"} text={"Wicked"} imgSource={WickedImage} />
        </li>
      </ul>
    </>
  )
}

import React from "react"
import Card from "../../../components/card"
import WickedImage from "../../../images/wicked.png"
import VenomImage from "../../../images/venom.png"

export default () => {
  return (
    <>
      <h1>Slalom sails</h1>
      <ul>
        <li>
          <Card
            target={"/sails/slalom/venom"}
            text={"Venom"}
            imgSource={VenomImage}
          />
        </li>
        <li>
          <Card
            target={"/sails/slalom/wicked"}
            text={"Wicked"}
            imgSource={WickedImage}
          />
        </li>
      </ul>
    </>
  )
}

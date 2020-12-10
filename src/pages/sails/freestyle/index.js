import React from "react"
import Card from "../../../components/card"
import JesterImage from "../../../images/jester.png"

export default () => {
  return (
    <>
      <h1>Freestyle sails</h1>
      <ul>
        <li>
          <Card
            target={"/sails/freestyle/jester"}
            text={"Jester"}
            imgSource={JesterImage}
          />
        </li>
      </ul>
    </>
  )
}

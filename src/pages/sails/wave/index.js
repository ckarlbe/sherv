import React from "react"
import Card from "../../../components/card"

export default () => {
  return (
    <>
      <h1>Wave sails</h1>
      <ul>
        <li>
          <Card target={"/sails/wave/alchemy"} text={"Alchemy"} imgSource={""} />
        </li>
        <li>
          <Card target={"/sails/wave/catalyst"} text={"Catalyst"} imgSource={""} />
        </li>
        <li>
          <Card target={"/sails/wave/dragon"} text={"Dragon"} imgSource={""} />
        </li>
        <li>
          <Card target={"/sails/wave/dualist"} text={"Dualist"} imgSource={""} />
        </li>
      </ul>
    </>
  )
}

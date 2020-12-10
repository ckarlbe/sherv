import React from "react"
import { Link } from "gatsby"

export default ({target, text, imgSource}) => {
    console.log(imgSource)
    return (
        <Link to={target}>
            <img src={imgSource} />
            {text}
        </Link>
    )
}
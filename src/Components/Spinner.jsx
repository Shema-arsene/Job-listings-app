import React from "react"
import FadeLoader from "react-spinners/FadeLoader"

const override = {
  display: "block",
  margin: "100px auto",
}

const Spinner = ({ loading }) => {
  return (
    <FadeLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      // aria-label="Loading Spinner"
      // data-testid="loader"
    />
  )
}

export default Spinner
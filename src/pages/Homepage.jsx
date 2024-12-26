import React from "react"

import Hero from "../Components/Hero"
import HomeCards from "../Components/HomeCards"
import JobsListings from "../Components/JobListings"
import ViewAllJobs from "../Components/ViewAllJobs"

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default Homepage

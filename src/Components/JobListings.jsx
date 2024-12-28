import React from "react"
import { useState, useEffect } from "react"
import JobListing from "./JobListing"
import Spinner from "./Spinner"

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const [activeTab, setActiveTab] = useState("All")

  const tabs = ["All", "Full-Time", "Part-Time", "Remote", "Internship"]
  const filteredJobs =
    activeTab === "All" ? jobs : jobs.filter((card) => card.type === activeTab)

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="flex justify-center space-x-4 mb-7">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded ${
              activeTab === tab
                ? "bg-indigo-500 border border-indigo-500 text-white"
                : "border border-indigo-500 bg-blue-50 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default JobListings

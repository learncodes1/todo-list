import { Button } from "@nextui-org/react"
import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Button color="primary" className="mr-3 shadow-2xl shadow-white"> <Link to="/create">Create Task</Link> </Button>
      <Button color="default" className="shadow-2xl shadow-white"><Link to="/tasklist"> Show the Task</Link> </Button>
    </div>
  )
}

export default Home
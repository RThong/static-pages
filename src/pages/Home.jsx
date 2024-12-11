import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Link to="/detail">去详情页</Link>
    </div>
  )
}

export default Home 
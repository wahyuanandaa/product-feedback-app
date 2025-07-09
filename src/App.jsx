import React from "react"
import Home from "./components/pages/Home"
import RoadmapPage from "./components/pages/RoadmapPage"
import DataState from "./context/data/DataState"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <Router>
      <main className="main-app">
        <DataState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmappage" element={<RoadmapPage />} />
          </Routes>
        </DataState>
      </main>
    </Router>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import Sidebar from "./components/Sidebar"
import CameraFeed from "./components/CameraFeed"
import Developers from "./pages/developers"
import Project from "./pages/Project"

const App = () => {
  return (
    <div className="d-flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* PAGE CONTENT */}
      <div
        className="flex-grow-1 p-4"
        style={{
          background: "#F8F9FC",
          minHeight: "100vh",
        }}
      >
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* CAMERA FEED */}
          <Route path="/camera" element={<CameraFeed />} />

          {/* DEVELOPERS */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/project" element={<Project />} />

          {/* ABOUT */}
          <Route path="/about" element={<Project />} />
        </Routes>
      </div>
    </div>
  )
}
export default App

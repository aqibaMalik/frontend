import { Routes, Route } from "react-router-dom"
import { Home as Main } from "./pages/Home"
import InforCard from "./components/InfoCard"
import Sidebar from "./components/Sidebar"

const Camera = () => <h1>Camera</h1>
const Developers = () => <InforCard type="developers" />
const Project = () => <InforCard type="project" />
const About = () => <InforCard type="about" />

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
          <Route path="/" element={<Main />} />

          {/* CAMERA FEED */}
          <Route path="/camera" element={<Camera />} />

          {/* DEVELOPERS */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/project" element={<Project />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}
export default App

import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  Camera,
  Users,
  FolderKanban,
  Info,
  LogOut,
} from "lucide-react"

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between vh-100 bg-white border-end px-4 py-4 shadow-sm"
      style={{ width: "280px" }}
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="d-flex align-items-center gap-3 mb-5">
          <div
            className="d-flex align-items-center justify-content-center rounded-4 bg-primary text-white fw-bold"
            style={{
              width: "58px",
              height: "58px",
              fontSize: "24px",
            }}
          >
            🤟
          </div>

          <div>
            <h3 className="fw-bold text-dark m-0">Ansign</h3>

            <span className="text-secondary small">AI Sign Translator</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="d-flex flex-column gap-3">
          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-primary text-white" : "btn-light text-black"} rounded-4 d-flex align-items-center gap-3 px-4 py-3 fw-semibold shadow-sm text-start`
            }
          >
            <LayoutDashboard size={22} />
            Home
          </NavLink>

          {/* CAMERA FEED */}
          <NavLink
            to="/camera"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-primary text-white" : "btn-light text-black"} rounded-4 d-flex align-items-center gap-3 px-4 py-3 fw-semibold shadow-sm text-start`
            }
          >
            <Camera size={22} />
            Camera Feed
          </NavLink>

          {/* DEVELOPERS */}
          <NavLink
            to="/developers"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-primary text-white" : "btn-light text-black"} rounded-4 d-flex align-items-center gap-3 px-4 py-3 fw-semibold shadow-sm text-start`
            }
          >
            <Users size={22} />
            Developers
          </NavLink>

          {/* PROJECT */}
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-primary text-white" : "btn-light text-black"} rounded-4 d-flex align-items-center gap-3 px-4 py-3 fw-semibold shadow-sm text-start`
            }
          >
            <FolderKanban size={22} />
            Project
          </NavLink>

          {/* ABOUT */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `btn ${isActive ? "btn-primary text-white" : "btn-light text-black"} rounded-4 d-flex align-items-center gap-3 px-4 py-3 fw-semibold shadow-sm text-start`
            }
          >
            <Info size={22} />
            About
          </NavLink>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div>
        <div className="bg-light rounded-4 p-4 border">
          <div
            className="bg-primary-subtle text-primary rounded-4 d-flex align-items-center justify-content-center mb-4"
            style={{
              width: "70px",
              height: "70px",
              fontSize: "30px",
            }}
          >
            ✨
          </div>

          <h5 className="fw-bold text-dark mb-2">Real-time AI Translation</h5>

          <p className="text-secondary small mb-4 lh-base">
            Breaking communication barriers through intelligent sign language
            recognition.
          </p>

          <button className="btn btn-primary w-100 rounded-4 py-3 fw-semibold">
            Start Translating
          </button>
        </div>

        {/* LOGOUT */}
        <button className="btn btn-light border w-100 rounded-4 d-flex align-items-center justify-content-center gap-2 py-3 mt-4 fw-semibold">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar

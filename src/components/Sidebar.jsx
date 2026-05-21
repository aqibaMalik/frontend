import { House, Camera, History, Settings, Info } from "lucide-react"
import { LayoutDashboard, Sparkles, LogOut } from "lucide-react"
export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between bg-white border-end vh-100 p-4 shadow-sm"
      style={{ width: "260px" }}
    >
      {/* LOGO */}
      <div>
        <div className="d-flex align-items-center gap-2 mb-5">
          <div
            className="bg-primary text-white d-flex align-items-center justify-content-center rounded-3"
            style={{ width: "50px", height: "50px" }}
          >
            🤟
          </div>

          <h2 className="fw-bold text-dark m-0">ansign</h2>
        </div>

        {/* NAVIGATION */}
        <div className="d-flex flex-column gap-3">
          {/* HOME */}
          <button className="btn btn-primary rounded-4 d-flex align-items-center gap-3 py-3 px-4 text-start fw-semibold">
            <House size={22} />
            Home
          </button>

          {/* CAMERA FEED */}
          <button className="btn btn-light rounded-4 d-flex align-items-center gap-3 py-3 px-4 text-dark fw-semibold border">
            <Camera size={22} />
            Camera Feed
          </button>

          {/* HISTORY */}
          <button className="btn btn-light rounded-4 d-flex align-items-center gap-3 py-3 px-4 text-dark fw-semibold border">
            <History size={22} />
            History
          </button>

          {/* SETTINGS */}
          <button className="btn btn-light rounded-4 d-flex align-items-center gap-3 py-3 px-4 text-dark fw-semibold border">
            <Settings size={22} />
            Settings
          </button>

          {/* ABOUT */}
          <button className="btn btn-light rounded-4 d-flex align-items-center gap-3 py-3 px-4 text-dark fw-semibold border">
            <Info size={22} />
            About
          </button>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="bg-light rounded-4 p-4 text-center border">
        <div
          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: "60px", height: "60px" }}
        >
          💜
        </div>

        <h5 className="fw-bold text-dark">Break Barriers</h5>

        <p className="text-secondary small mb-0">
          Building communication through sign language AI.
        </p>
      </div>
    </div>
  )
}

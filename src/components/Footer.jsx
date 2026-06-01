import React from "react"

export default function Footer() {
  return (
    <div className="row g-4 mt-3">
      <div className="col-md-4">
        <div className="card d-flex border-0 d-flex grow flex-row justify-content-between align-items-center shadow-sm rounded-4 p-4 h-100 ">
          <div
            style={{ width: "50px", height: "100px" }}
            className="bg-primary-subtle me-3 text-primary rounded-4 h-25"
          >
            ⚡
          </div>
          <div>
            <h3 className="fs-3 fw-bold text-dark mb-3">
              Real-time Recognition
            </h3>

            <p className="fs-6 text-secondary mb-0 lh-lg">
              Instantly detect and recognize signs using your webcam.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
          <div className="bg-success-subtle text-success rounded-4 d-inline-flex align-items-center justify-content-center mb-4">
            🎯
          </div>

          <h3 className="fs-3 fw-bold text-dark mb-3">High Accuracy</h3>

          <p className="fs-6 text-secondary mb-0 lh-lg">
            AI models trained for precise and reliable predictions.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
          <div className="bg-info-subtle text-info rounded-4 d-inline-flex align-items-center justify-content-center mb-4">
            🔒
          </div>

          <h3 className="fs-3 fw-bold text-dark mb-3">Private & Secure</h3>

          <p className="fs-6 text-secondary mb-0 lh-lg">
            Your webcam data stays private and securely processed.
          </p>
        </div>
      </div>
    </div>
  )
}

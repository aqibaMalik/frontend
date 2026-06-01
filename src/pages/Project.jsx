import { Info, Sparkles } from "lucide-react"

const Project = () => {
  return (
    <div
      className="card border-0 shadow-lg rounded-5 overflow-hidden position-relative"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)",
      }}
    >
      <div
        className="position-absolute top-0 end-0"
        style={{
          width: "180px",
          height: "180px",
          background: "rgba(108, 76, 241, 0.12)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="card-body p-5 position-relative">
        {/* HEADER */}
        <div className="d-flex align-items-center gap-4 mb-5">
          <div
            className="d-flex align-items-center justify-content-center rounded-5 bg-primary-subtle text-primary shadow-sm"
            style={{
              width: "90px",
              height: "90px",
            }}
          >
            <Info size={42} />
          </div>

          <div>
            <h1 className="fw-bold text-dark mb-2 display-6">
              About The Project
            </h1>

            <p className="text-secondary fs-5 mb-0">
              An AI-powered sign language translation platform.
            </p>
          </div>
        </div>

        {/* PROJECT CONTENT */}
        <div className="bg-white border rounded-5 p-5 shadow-sm">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="bg-primary-subtle text-primary rounded-4 d-flex align-items-center justify-content-center"
              style={{
                width: "70px",
                height: "70px",
              }}
            >
              <Sparkles size={34} />
            </div>

            <div>
              <h3 className="fw-bold text-dark mb-1">Ansign Project</h3>

              <span className="text-secondary">
                AI Sign Language Translator
              </span>
            </div>
          </div>

          <p className="fs-5 text-secondary lh-lg mb-4">
            Ansign is a real-time AI-powered sign language translation system
            that converts hand gestures into understandable text using computer
            vision and machine learning.
          </p>

          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="bg-light rounded-4 p-4 text-center">
                <h2 className="fw-bold text-primary">React</h2>

                <span className="text-secondary small">Frontend</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-light rounded-4 p-4 text-center">
                <h2 className="fw-bold text-success">Python</h2>

                <span className="text-secondary small">Backend</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-light rounded-4 p-4 text-center">
                <h2 className="fw-bold text-danger">AI</h2>

                <span className="text-secondary small">ML Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

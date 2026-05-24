// InfoCard.jsx

import React from "react"
import { Users, Info, Sparkles, Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const InfoCard = ({ type }) => {
  const isDevelopers = type === "developers"

  return (
    <div
      className="card border-0 shadow-lg rounded-5 overflow-hidden position-relative"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f5ff 100%)",
      }}
    >
      {/* TOP GLOW */}
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
          {/* ICON */}
          <div
            className="d-flex align-items-center justify-content-center rounded-5 bg-primary-subtle text-primary shadow-sm"
            style={{
              width: "90px",
              height: "90px",
            }}
          >
            {isDevelopers ? <Users size={42} /> : <Info size={42} />}
          </div>

          {/* TITLE */}
          <div>
            <h1 className="fw-bold text-dark mb-2 display-6">
              {isDevelopers ? "Meet Our Developers" : "About The Project"}
            </h1>

            <p className="text-secondary fs-5 mb-0">
              {isDevelopers
                ? "The creative minds behind Ansign."
                : "An AI-powered sign language translation platform."}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        {isDevelopers ? (
          <div className="row g-4">
            {/* DEV CARD */}
            <Developer
              initial="A"
              name="Aqib Ahmad Malik"
              rollNo="220407"
              color="primary"
              githubUrl="https://github.com/aqibaMalik"
            />
            <Developer
              initial="FW"
              name="Firdous Ahmad Wani"
              rollNo="220475"
              color="success"
              githubUrl="https://github.com/Firdous"
            />
            <Developer
              initial="FL"
              name="Faheem Shakeel Lone "
              rollNo="220426"
              color="info"
            />
            <Developer
              initial="I"
              name="Insha Iqhlaq "
              rollNo="220463"
              color="warning"
            />

            {/* DEV CARD */}
            <div className="col-md-6">
              <div className="bg-white border rounded-5 p-4 shadow-sm h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "24px",
                    }}
                  >
                    P
                  </div>

                  <div>
                    <h4 className="fw-bold text-dark mb-1">Python Team</h4>

                    <span className="text-success fw-semibold">
                      Backend & AI
                    </span>
                  </div>
                </div>

                <p className="text-secondary lh-lg">
                  Developed gesture recognition, machine learning prediction,
                  and real-time sign detection system.
                </p>

                <div className="d-flex gap-3 mt-4">
                  <button className="btn btn-light border rounded-4">
                    {/* < size={18} /> */}
                  </button>

                  <button className="btn btn-light border rounded-4">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
              that converts hand gestures into understandable text using
              computer vision and machine learning.
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
        )}
      </div>
    </div>
  )
}

export default InfoCard

const Developer = ({ name, rollNo, initial, color, githubUrl }) => {
  return (
    <div className="col-md-6">
      <div className="bg-white border rounded-5 p-4 shadow-sm h-100">
        <div className="d-flex align-items-center gap-3 mb-4">
          {/* PROFILE */}
          <div
            className={`rounded-circle bg-${color} text-white d-flex align-items-center justify-content-center fw-bold`}
            style={{
              width: "70px",
              height: "70px",
              fontSize: "24px",
            }}
          >
            {initial}
          </div>

          <div>
            <h4 className="fw-bold text-dark mb-1">{name}</h4>

            <span className={`text-${color} fw-semibold`}>
              Roll No. {rollNo}
            </span>
          </div>
        </div>

        <p className="text-secondary lh-lg">
          Built the responsive UI using React, Bootstrap, and integrated webcam
          interaction for real-time translation.
        </p>

        <div className="d-flex gap-3 mt-4">
          <a href={githubUrl}>
            <button className="btn btn-light border rounded-4">
              <FaGithub size={18} />
            </button>
          </a>

          <button className="btn btn-light border rounded-4">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

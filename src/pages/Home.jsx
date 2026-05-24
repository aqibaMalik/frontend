import { useState, useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { io } from "socket.io-client"
import CameraFeed from "../components/CameraFeed"
import Controls from "../components/Controls"
import {
  PredictionBox as Prediction,
  PredictionBox,
} from "../components/PredictionBox" // New import

// Connect to Python Backend (Flask-SocketIO / FastAPI)
const socket = io("http://localhost:5000")

export default function Home() {
  const webcamRef = useRef(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [prediction, setPrediction] = useState("Waiting for sign...")

  useEffect(() => {
    let intervalId

    if (isStreaming) {
      intervalId = setInterval(() => {
        if (webcamRef.current) {
          const imageSrc = webcamRef.current.getScreenshot()

          if (imageSrc) {
            // Always increase timestamp
            socket.emit("video_frame", {
              image: imageSrc,
              timestamp: Date.now(),
            })
          }
        }
      }, 250)
    }

    return () => clearInterval(intervalId)
  }, [isStreaming])

  // Handle incoming backend predictions
  useEffect(() => {
    socket.on("prediction_response", (data) => {
      setPrediction(data.label)
    })

    return () => {
      socket.off("prediction_response")
    }
  }, [])

  // Frame streaming interval loop
  // useEffect(() => {
  //   let intervalId
  //   if (isStreaming) {
  //     intervalId = setInterval(() => {
  //       if (webcamRef.current) {
  //         const imageSrc = webcamRef.current.getScreenshot()
  //         if (imageSrc) {
  //           socket.emit("video_frame", { image: imageSrc })
  //         }
  //       }
  //     }, 100) // 10 Frames per second
  //   }
  //   return () => clearInterval(intervalId)
  // }, [isStreaming])

  const toggleStreaming = () => {
    setIsStreaming(!isStreaming)
    if (isStreaming) {
      setPrediction("Waiting for sign...")
    }
  }

  return (
    <>
      <Hero
        webcamRef={webcamRef}
        isStreaming={isStreaming}
        toggleStreaming={toggleStreaming}
      />
      {/* <Container classNameName="py-5">
        <Row classNameName="justify-content-center text-center mb-4">
          <Col lg={25}>
            <h1 classNameName="display-4 fw-bold text-black">
              See the Gesture.
              <span classNameName="text-primary">Get the Meaning.</span>
            </h1>
            <p classNameName="text-muted d-flex flex-column fs-5 px-4">
              Real-time Sign Language Recognition that converts gestures into
              words instantly.
              <span>Bringing communication, creating understanding.</span>
            </p>
          </Col>
        </Row>

        <Row classNameName="justify-content-center g-4">
          {/* Left Side: Camera & Buttons */}
      {/* <Col lg={6} md={8}>
            <CameraFeed webcamRef={webcamRef} />
            <Controls
              isStreaming={isStreaming}
              onToggleStream={toggleStreaming}
            />
          </Col>

          { Right Side: Replaced with the Prediction Component }
          <Col lg={4} md={8}>
            <Prediction prediction={prediction} />
          </Col>
        </Row>
      </Container> } */}
    </>
  )
}

const Hero = ({ webcamRef, isStreaming, toggleStreaming }) => {
  return (
    <>
      <div className="bg-light">
        <div className="container-fluid min-vh-100 py-5 px-4">
          <section className="text-center mb-5">
            <div className="badge rounded-pill bg-primary-subtle text-primary px-4 py-2 fw-semibold fs-6 mb-4">
              AI-Powered Sign Language Translator
            </div>

            <h1 className="display-2 fw-bold text-dark lh-1 mb-4">
              See the Gesture.
              <span className="text-primary">Get the Meaning.</span>
            </h1>

            <p className="fs-4 text-secondary fw-normal mx-auto mb-5">
              Real-time sign language recognition that converts gestures into
              words instantly.
            </p>
          </section>

          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="fs-3 fw-bold text-dark m-0">
                    Live Webcam Feed
                  </h2>

                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold">
                    ● Live
                  </span>
                </div>

                <div className="bg-secondary-subtle rounded-4 overflow-hidden position-relative">
                  <CameraFeed webcamRef={webcamRef} />
                </div>

                <div className="mt-4">
                  <span className="small text-success fw-medium">
                    Camera is active and analysis is running...
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h2 class="fs-3 fw-bold text-dark mb-4">Translation Output</h2>

                <div
                  className="bg-primary-subtle d-flex justify-content-center flex-column  rounded-4 text-center py-5 mb-4  "
                  style={{ minHeight: "700px" }}
                >
                  <h1 class="display-1 fw-bolder text-primary mb-3">
                    <PredictionBox />
                  </h1>
                  <span className="badge d-in bg-white text-primary px-4 py-2 rounded-pill fw-semibold">
                    Greeting
                  </span>
                </div>
                <Controls
                  isStreaming={isStreaming}
                  onToggleStream={toggleStreaming}
                />
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fs-5 fw-semibold text-dark">
                      Confidence Score
                    </span>

                    <span className="fs-6 fw-bold text-primary">92%</span>
                  </div>

                  <div className="progress rounded-pill">
                    <div className="progress-bar bg-primary w-75 rounded-pill"></div>
                  </div>
                </div>

                <div>
                  <label className="form-label fs-6 fw-semibold text-dark">
                    Language
                  </label>

                  <select className="form-select rounded-3 py-3">
                    <option>American Sign Language (ASL)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                <div className="bg-primary-subtle text-primary rounded-4 d-inline-flex align-items-center justify-content-center mb-4">
                  ⚡
                </div>

                <h3 className="fs-3 fw-bold text-dark mb-3">
                  Real-time Recognition
                </h3>

                <p className="fs-6 text-secondary mb-0 lh-lg">
                  Instantly detect and recognize signs using your webcam.
                </p>
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

                <h3 className="fs-3 fw-bold text-dark mb-3">
                  Private & Secure
                </h3>

                <p className="fs-6 text-secondary mb-0 lh-lg">
                  Your webcam data stays private and securely processed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

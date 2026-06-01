import { useState, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import CameraFeed from "../components/CameraFeed"
import Controls from "../components/Controls"
import { PredictionBox } from "../components/PredictionBox"
import { CiVideoOn } from "react-icons/ci"
import Footer from "../components/Footer"

// Connect to Python Backend (Flask-SocketIO / FastAPI)
const socket = io("http://localhost:5000")

export function Home() {
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
      <div className="bg-light">
        <div className="container-fluid min-vh-100 py-5 px-4">
          <section className="text-center mb-5">
            <div className="badge rounded-pill bg-primary-subtle text-primary px-4 py-2 fw-semibold fs-6 mb-4">
              AI-Powered Sign Language Translator
            </div>

            <h1 className="display-2 fw-bold text-dark lh-1 mb-4">
              <span>See the Gesture.</span>
              <span className="text-primary ms-2">Get the Meaning.</span>
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
                  <div className="d-flex text-success align-items-center">
                    <CiVideoOn size={28} />
                    <h2 className="fs-3 ps-2 fw-bold text-dark m-0">
                      Live Webcam Feed
                    </h2>
                  </div>

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

                <PredictionBox />
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
          <Footer />
        </div>
      </div>
    </>
  )
}

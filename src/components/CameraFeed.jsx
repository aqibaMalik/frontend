import React from "react"
import Webcam from "react-webcam"

export default function CameraFeed({ webcamRef }) {
  return (
    <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={{ width: 640, height: 480, facingMode: "user" }}
      className="w-100 h-100"
      style={{ objectFit: "cover" }}
    />
  )
}

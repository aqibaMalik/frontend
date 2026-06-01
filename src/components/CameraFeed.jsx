import Webcam from "react-webcam"

export default function CameraFeed({ webcamRef }) {
  return (
    <div className="" style={{ minHeight: "550px" }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: "user" }}
        className="w-100 h-100"
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}

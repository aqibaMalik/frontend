import React from "react"
import { Card } from "react-bootstrap"

export function PredictionBox({ prediction = "Hello" }) {
  // Determine text color based on prediction state
  const isWaiting =
    prediction === "Waiting for sign..." || prediction === "No hand detected"
  const textColor = isWaiting ? "gray" : "green"

  return (
    <p className="text-uppercase tracking-wider text-secondary small fw-bold mb-1">
      Detected Label <span style={{ color: textColor }}> {prediction} </span>
    </p>
  )
}

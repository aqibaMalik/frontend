export function PredictionBox({ prediction = "Hello" }) {
  const isWaiting =
    prediction === "Waiting for sign..." || prediction === "No hand detected"
  const textColor = isWaiting ? "gray" : "green"

  return (
    <div
      className="bg-primary-subtle d-flex justify-content-center align-items-center flex-column  rounded-4 text-center py-5 mb-4  "
      style={{ minHeight: "550px" }}
    >
      <h1 class="display-1 fw-bolder text-primary mb-3">
        <div className="text-uppercase tracking-wider text-secondary small fw-bold mb-1">
          <span style={{ color: textColor }}> {prediction} </span>
        </div>
      </h1>
      <span
        style={{ maxWidth: "max-content" }}
        className="badge bg-white text-primary px-4 py-2 rounded-pill fw-semibold"
      >
        Greeting
      </span>
    </div>
  )
}

import React from "react"
import { Button, Stack } from "react-bootstrap"

export default function Controls({ isStreaming, onToggleStream }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <Stack direction="horizontal" gap={3}>
        <Button
          variant={isStreaming ? "danger" : "success"}
          size="lg"
          onClick={onToggleStream}
          className="px-4 fw-bold shadow-sm"
        >
          {isStreaming ? (
            <>
              <span
                className="spinner-grow spinner-grow-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Stop Translation
            </>
          ) : (
            "Start Translation"
          )}
        </Button>
      </Stack>
    </div>
  )
}

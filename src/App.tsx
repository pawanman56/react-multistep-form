import { useMultistepForm } from "./useMultistepForm"

function App() {
  const { steps, currentStepIndex, step } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
  ]);

  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      borderRadius: "0.5rem",
      padding: "2rem",
      margin: "1rem",
      fontFamily: "Arial",
    }}>
      <form>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
    </div>
  )
}

export default App

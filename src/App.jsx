import Home from "./pages/Home"
import { Sidebar } from "./components/Sidebar"
export default function App() {
  return (
    <div className="w-100 d-flex">
      <Sidebar />
      <Home />
    </div>
  )
}

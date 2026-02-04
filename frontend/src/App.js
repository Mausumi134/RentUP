import "./App.css"
import Pages from "./components/pages/Pages"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Pages />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#27ae60',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

export default App

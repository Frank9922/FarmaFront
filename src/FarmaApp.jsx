import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routes/AppRoute"
import './style.css'


function FarmaApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <AppRoute />
      </BrowserRouter>
    </Provider>
)
}

export default FarmaApp

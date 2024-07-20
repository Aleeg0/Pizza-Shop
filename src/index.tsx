import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import "./Styles/index.css"
import {Provider} from "react-redux";
import {store} from "./Redux/Store.ts";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
)

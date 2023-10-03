import {Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import LoginForm from "./components/LoginForm"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./components/NotFound";
import Jobs from "./components/Jobs";
import './App.css';
import AboutJobItem from "./components/AboutJobItem";

const App = () => (
        <Switch>
            <Route exact path = "/login" component = {LoginForm} />
            <ProtectedRoute exact path = "/" component = {Home} />
            <ProtectedRoute exact path = "/jobs" component = {Jobs} />
            <ProtectedRoute exact path = "/jobs/:id" component = {AboutJobItem} />
            <Route component = {NotFound} />
        </Switch>
)

export default App;



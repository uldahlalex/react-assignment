
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Toaster} from "react-hot-toast";
import useInitialiseData from "../useInitialiseData.tsx";
import Patients from "./Patients.tsx";



const App = () => {

    useInitialiseData();

    return (<>
        <Router>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Patients />}></Route>
            </Routes>
        </Router>
    </>)
}
export default App;
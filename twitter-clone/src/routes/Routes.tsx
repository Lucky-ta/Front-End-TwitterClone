import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomePage";

export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
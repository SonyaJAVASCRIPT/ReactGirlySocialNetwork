import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./index.css";
import { HomeLayout } from "./routes/home/layout";
import { Shmelusi } from "./routes/home/shmelusi";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <HomeLayout/> }>
          <Route index element={<Link to="/shmelusi">Go to shmelusi</Link>}/>
          <Route path="shmelusi" element={ <Shmelusi/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

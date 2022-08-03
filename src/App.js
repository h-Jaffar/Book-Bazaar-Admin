import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateStore from "./components/CreateStore";
import Sidebar from "./components/Sidebar";
import StoreRequests from "./components/StoreRequests";
import StoreList from "./components/StoreList";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<StoreList />}></Route>
        <Route path="/createstore" element={<CreateStore />}></Route>
        <Route path="/storerequests" element={<StoreRequests />}></Route>
        <Route path="/storelist" element={<StoreList />}></Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

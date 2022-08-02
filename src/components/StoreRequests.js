import "../css/StoreRequests.css";
import React from "react";
import Sidebar from "./Sidebar";

function StoreRequests() {
  var stores = [
    {
      name: "book store 1",
      email: "bs1@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "qwerty, uiop, pakistan",
    },
    {
      name: "book store 2",
      email: "bs2@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "qwerty, uiop, pakistan",
    },
  ];

  var requests = stores.map((store) => (
    <div className="row text-start requestscard">
      <div className="col-md-6 requestsdetail">
        <p className="requestname">{store.name}</p>
        <p className="requesttext">{store.email}</p>
        <p className="requesttext">{store.contact}</p>
        <p className="requesttext">{store.address}</p>
      </div>

      <div className="col-md-6 requestsdetail">
        <button className="btn btn-light requestscardbtn">Approve</button>
        <button className="btn btn-light requestscardbtn">Request Info</button>
      </div>
    </div>
  ));
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Book Bazaar</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <a
                    href="/storelist"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Store List</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="/createstore"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Create Store</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="/storerequests"
                    class="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Store Requests</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <h5 className="requeststitle">Store Requests</h5>
                    {requests}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreRequests;

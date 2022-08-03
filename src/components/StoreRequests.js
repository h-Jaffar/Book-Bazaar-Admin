import "../css/StoreRequests.css";
import React from "react";
import Sidebar from "./Sidebar";

function StoreRequests() {
  var stores = [
    {
      name: "Rizwan Book Store",
      email: "rizwan@bookstore.com",
      contact: "0900-78601",
      address: "Lahore, Pakistan",
    },
    {
      name: "Khokhar Book Depot",
      email: "khokhar@bookdepot.com",
      contact: "0801-98702",
      address: "Karachi, Pakistan",
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
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none hrtag"
              >
                <span class="fs-5 d-none d-sm-inline sidebartitle">Book Bazaar</span>
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

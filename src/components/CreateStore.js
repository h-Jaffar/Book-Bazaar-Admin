import "../css/CreateStore.css";
import React from "react";
import Sidebar from "./Sidebar";

function CreateStore() {
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
                  <a href="/storelist" class="nav-link align-middle px-0 sidebartag">
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Store List</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/createstore" class="nav-link align-middle px-0 sidebartag">
                    <i class="fa-solid fa-building"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Create Store</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/storerequests" class="nav-link align-middle px-0 sidebartag">
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
          <div className="row ">
            <div className="col-md-12 text-center">
              <h5 className="sdtitle">Add Store Details</h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="inputtext">Name</h5>
              <input
                type="text"
                name="contact"
                value=""
                className="form-control profileinput"
                placeholder="ABC Store"
              />
            </div>
            <div className="col-md-6">
              <h5 className="inputtext">Email</h5>
              <input
                type="text"
                name="contact"
                value=""
                className="form-control profileinput"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="inputtext">Contact Number</h5>
              <input
                type="text"
                name="contact"
                value=""
                className="form-control profileinput"
                placeholder="XXXX-XXXXXXX"
              />
            </div>
            <div className="col-md-6">
              <h5 className="inputtext">Address</h5>
              <input
                type="text"
                name="contact"
                value=""
                className="form-control profileinput"
                placeholder="2A1, PGECHS, Punjab, Pakistan"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button
                className="btn btn-light btn-lg profilebutton"
                type="button"
                name="button"
              >
                Save
              </button>
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

export default CreateStore;

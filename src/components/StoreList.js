import "../css/StoreList.css";
import React from "react";

function StoreList() {
  var store = [
    {
      name: "ABC Book Store",
      email: "bs1@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Lahore, Pakistan",
    },
    {
      name: "MRO Book Store",
      email: "bs2@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Karachi, Pakistan",
    },
    {
      name: "XYZ Book Store",
      email: "bs3@gmail.com",
      contact: "XXXX-XXXXXXX",
      address: "Islamabad, Pakistan",
    },
  ];

  var stores = store.map((store) => (
    <div className="row text-start listscard">
      <div className="col-md-6">
        <p className="listname">{store.name}</p>
        <p className="listtext">{store.email}</p>
      </div>

      <div className="col-md-6">
        <p className="listtext">{store.contact}</p>
        <p className="listtext">{store.address}</p>
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
                    <h5 className="liststitle">Store List</h5>
                    {stores}
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

export default StoreList;

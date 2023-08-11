<template>
  <!--wrapper-->
  <div class="wrapper">
    <!--start header wrapper-->
    <div class="header-wrapper">
      <!--start header -->
      <header>
        <div class="topbar d-flex align-items-center">
          <nav class="navbar navbar-expand gap-3">
            <div class="topbar-logo-header d-none d-lg-flex">
              <div class="">
                <!-- <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon"> -->
              </div>
              <div class="">
                <h4 class="logo-text">HRIS</h4>
              </div>
            </div>
            <div
              class="mobile-toggle-menu d-block d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              <i class="bx bx-menu"></i>
            </div>
            <div
              class="position-relative search-bar d-lg-block d-none"
              data-bs-toggle="modal"
              data-bs-target="#SearchModal"
            >
              <input
                class="form-control px-5"
                disabled
                type="search"
                placeholder="Search"
              />
              <span
                class="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-5"
                ><i class="bx bx-search"></i
              ></span>
            </div>
            <div class="top-menu ms-auto">
              <ul class="navbar-nav align-items-center gap-1">
                <li
                  class="nav-item mobile-search-icon d-flex d-lg-none"
                  data-bs-toggle="modal"
                  data-bs-target="#SearchModal"
                >
                  <a class="nav-link" href="avascript:;"
                    ><i class="bx bx-search"></i>
                  </a>
                </li>

                <li class="nav-item dark-mode d-none d-sm-flex">
                  <a class="nav-link dark-mode-icon" @click="onchangeTheme()"
                    ><i class="bx bx-moon"></i>
                  </a>
                </li>
                <li class="nav-item dropdown dropdown-large">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                    href="#"
                    data-bs-toggle="dropdown"
                    ><span class="alert-count">7</span>
                    <i class="bx bx-bell"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:;">
                      <div class="msg-header">
                        <p class="msg-header-title">Notifications</p>
                        <p class="msg-header-badge">8 New</p>
                      </div>
                    </a>
                    <div class="header-notifications-list">
                      <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                          <div class="user-online">
                            <img
                              class="msg-avatar"
                              src="../assets//images/avatars/avatar-1.png"
                              alt="user avatar"
                            />
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="msg-name">
                              Daisy Anderson<span class="msg-time float-end"
                                >5 sec ago</span
                              >
                            </h6>
                            <p class="msg-info">The standard chunk of lorem</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a href="javascript:;">
                      <div class="text-center msg-footer">
                        <button class="btn btn-primary w-100">
                          View All Notifications
                        </button>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="user-box dropdown px-3">
              <a
                class="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="user-img"
                  src="../assets//images/avatars/avatar-1.png"
                  alt="user avatar"
                />
                <div class="user-info">
                  <p class="user-name mb-0">Pauline Seitz</p>
                  <p class="designattion mb-0">Web Designer</p>
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="#"
                    @click="this.$router.push('/Employee/profile')"
                    ><i class="bx bx-user fs-5"></i><span>Profile</span></a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    ><i class="bx bx-cog fs-5"></i><span>Settings</span></a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    @click="this.$router.push('/EmployeeDashboard')"
                    ><i class="bx bx-home-circle fs-5"></i
                    ><span>Dashboard</span></a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    ><i class="bx bx-dollar-circle fs-5"></i
                    ><span>Earnings</span></a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    ><i class="bx bx-download fs-5"></i
                    ><span>Downloads</span></a
                  >
                </li>
                <li>
                  <div class="dropdown-divider mb-0"></div>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    @click="onhandleLogout"
                    href="javascript:;"
                    ><i class="bx bx-log-out-circle"></i><span>Logout</span></a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <!--end header -->
      <!--navigation-->
      <div class="primary-menu">
        <nav class="navbar navbar-expand-lg align-items-center">
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header border-bottom">
              <div class="d-flex align-items-center">
                <div class="">
                  <img
                    class="logo-icon"
                    src="../assets//images/avatars/avatar-1.png"
                    alt="logo icon"
                  />
                </div>
                <div class="">
                  <h4 class="logo-text">Rukada</h4>
                </div>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav align-items-center flex-grow-1">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div class="parent-icon">
                      <i class="bx bx-home-alt"></i>
                    </div>
                    <div class="menu-title d-flex align-items-center">
                      Dashboard
                    </div>
                    <div class="ms-auto dropy-icon">
                      <i class="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link to="/Dashboard" class="dropdown-item"
                        ><i class="bx bx-pie-chart-alt"></i>HOME
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/about" class="dropdown-item"
                        ><i class="bx bx-shield-alt-2"></i>ABOUT
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div class="parent-icon"><i class="bx bx-cube"></i></div>
                    <div class="menu-title d-flex align-items-center">
                      Apps & Pages
                    </div>
                    <div class="ms-auto dropy-icon">
                      <i class="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="app-emailbox.html"
                        ><i class="bx bx-envelope"></i>Email</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="app-chat-box.html"
                        ><i class="bx bx-conversation"></i>Chat Box</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="app-file-manager.html"
                        ><i class="bx bx-file"></i>File Manager</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="app-contact-list.html"
                        ><i class="bx bx-microphone"></i>Contacts</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="app-to-do.html"
                        ><i class="bx bx-check-shield"></i>Todo</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="app-invoice.html"
                        ><i class="bx bx-printer"></i>Invoice</a
                      >
                    </li>
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-file"></i>Pages</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li class="nav-item dropend">
                          <a
                            class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                            href="javascript:;"
                            ><i class="bx bx-radio-circle"></i>Error</a
                          >
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="errors-404-error.html"
                                ><i class="bx bx-radio-circle"></i>404 Error</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="errors-500-error.html"
                                ><i class="bx bx-radio-circle"></i>500 rror</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="errors-coming-soon.html"
                                ><i class="bx bx-radio-circle"></i>Coming
                                Soon</a
                              >
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="error-blank-page.html"
                                ><i class="bx bx-radio-circle"></i>Blank Page</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="dropdown-item" href="user-profile.html"
                            ><i class="bx bx-radio-circle"></i>User Profile</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="timeline.html"
                            ><i class="bx bx-radio-circle"></i>Timeline</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="faq.html"
                            ><i class="bx bx-radio-circle"></i>FAQ</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="pricing-table.html"
                            ><i class="bx bx-radio-circle"></i>Pricing</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div class="parent-icon">
                      <i class="bx bx-message-square-edit"></i>
                    </div>
                    <div class="menu-title d-flex align-items-center">
                      Forms
                    </div>
                    <div class="ms-auto dropy-icon">
                      <i class="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="form-elements.html"
                        ><i class="bx bx-message-square-dots"></i>Form
                        Elements</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-input-group.html"
                        ><i class="bx bx-book-content"></i>Input Groups</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="form-radios-and-checkboxes.html"
                        ><i class="bx bx-radio-circle-marked"></i>Radios &
                        Checkboxes</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-layouts.html"
                        ><i class="bx bx-layer"></i>Forms Layouts</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-validations.html"
                        ><i class="bx bx-file-blank"></i>Form Validation</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-wizard.html"
                        ><i class="bx bx-glasses"></i>Form Wizard</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-text-editor.html"
                        ><i class="bx bx-edit"></i>Text Editor</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-file-upload.html"
                        ><i class="bx bx-upload"></i>File Upload</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-date-time-pickes.html"
                        ><i class="bx bx-calendar-check"></i>Date Pickers</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-select2.html"
                        ><i class="bx bx-check-double"></i>Select2</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="form-repeater.html"
                        ><i class="bx bx-directions"></i>Form Repeater</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div class="parent-icon"><i class="bx bx-lock"></i></div>
                    <div class="menu-title d-flex align-items-center">
                      Authentication
                    </div>
                    <div class="ms-auto dropy-icon">
                      <i class="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-receipt"></i>Basic</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li>
                          <a class="dropdown-item" href="auth-basic-signin.html"
                            ><i class="bx bx-radio-circle"></i>Sign In</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="auth-basic-signup.html"
                            ><i class="bx bx-radio-circle"></i>Sign Up</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-basic-forgot-password.html"
                            ><i class="bx bx-radio-circle"></i>Forgot
                            Password</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-basic-reset-password.html"
                            ><i class="bx bx-radio-circle"></i>Reset Password</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-cylinder"></i>Cover</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li>
                          <a class="dropdown-item" href="auth-cover-signin.html"
                            ><i class="bx bx-radio-circle"></i>Sign In</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item" href="auth-cover-signup.html"
                            ><i class="bx bx-radio-circle"></i>Sign Up</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-cover-forgot-password.html"
                            ><i class="bx bx-radio-circle"></i>Forgot
                            Password</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-cover-reset-password.html"
                            ><i class="bx bx-radio-circle"></i>Reset Password</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-aperture"></i>Header & Footer</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-header-footer-signin.html"
                            ><i class="bx bx-radio-circle"></i>Sign In</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-header-footer-signup.html"
                            ><i class="bx bx-radio-circle"></i>Sign Up</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-header-footer-forgot-password.html"
                            ><i class="bx bx-radio-circle"></i>Forgot
                            Password</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="auth-header-footer-reset-password.html"
                            ><i class="bx bx-radio-circle"></i>Reset Password</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                  >
                    <div class="parent-icon"><i class="bx bx-lock"></i></div>
                    <div class="menu-title d-flex align-items-center">
                      System Configuration
                    </div>
                    <div class="ms-auto dropy-icon">
                      <i class="bx bx-chevron-down"></i>
                    </div>
                  </a>
                  <ul class="dropdown-menu w-100">
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-user fs-5"></i>Account Management</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li>
                          <a
                            class="dropdown-item"
                            href="ecommerce-products.html"
                            ><i class="bx bx-radio-circle"></i>Access Control</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="this.$router.push('/User/user_account')"
                            ><i class="bx bx-radio-circle"></i>User Account</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="ecommerce-add-new-products.html"
                            ><i class="bx bx-radio-circle"></i>User Type</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropend">
                      <a
                        class="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                        href="javascript:;"
                        ><i class="bx bx-user fs-5"></i>Employee Management</a
                      >
                      <ul class="dropdown-menu submenu">
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="this.$router.push('/Employee/list')"
                            ><i class="bx bx-radio-circle"></i>View</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="this.$router.push('/Employee/create')"
                            ><i class="bx bx-radio-circle"></i>Create</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="
                              this.$router.push('/Employee/status-services')
                            "
                            ><i class="bx bx-radio-circle"></i>Employee
                            Services</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="
                              this.$router.push('/Employee/position-services')
                            "
                            ><i class="bx bx-radio-circle"></i>Position
                            Services</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <!--end navigation-->
    </div>
    <!-- search modal -->
    <div class="modal" id="SearchModal" tabindex="-1">
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
      >
        <div class="modal-content">
          <div class="modal-header gap-2">
            <div class="position-relative popup-search w-100">
              <input
                class="form-control form-control-lg ps-5 border border-3 border-primary"
                type="search"
                placeholder="Search"
              />
              <span
                class="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4"
                ><i class="bx bx-search"></i
              ></span>
            </div>
            <button
              type="button"
              class="btn-close d-md-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="search-list">
              <p class="mb-1">Html Templates</p>
              <div class="list-group">
                <a
                  href="javascript:;"
                  class="list-group-item list-group-item-action active align-items-center d-flex gap-2 py-1"
                  ><i class="bx bxl-angular fs-4"></i>Best Html Templates</a
                >
                <a
                  href="javascript:;"
                  class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                  ><i class="bx bxl-vuejs fs-4"></i>Html5 Templates</a
                >
                <a
                  href="javascript:;"
                  class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                  ><i class="bx bxl-magento fs-4"></i>Responsive Html5
                  Templates</a
                >
                <a
                  href="javascript:;"
                  class="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                  ><i class="bx bxl-shopify fs-4"></i>eCommerce Html
                  Templates</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--start switcher-->
    <div class="switcher-wrapper">
      <div class="switcher-btn" @click="onswitchToggle()">
        <i class="bx bx-cog bx-spin"></i>
      </div>
      <div class="switcher-body">
        <div class="d-flex align-items-center">
          <h5 class="mb-0 text-uppercase">Theme Customizer</h5>
          <button
            type="button"
            class="btn-close ms-auto close-switcher"
            aria-label="Close"
            @click="onswitchToggle()"
          ></button>
        </div>
        <hr />
        <h6 class="mb-0">Theme Styles</h6>
        <hr />
        <div class="d-flex align-items-center justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              @click="onLightmode()"
              checked
            />
            <label class="form-check-label" for="lightmode">Light</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              @click="onDarkmode()"
            />
            <label class="form-check-label" for="darkmode">Dark</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              @click="onSemidark()"
            />
            <label class="form-check-label" for="semidark">Semi Dark</label>
          </div>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            @click="onMinimaltheme()"
            name="flexRadioDefault"
          />
          <label class="form-check-label" for="minimaltheme"
            >Minimal Theme</label
          >
        </div>
        <hr />
        <h6 class="mb-0">Header Colors</h6>
        <hr />
        <div class="header-colors-indigators">
          <div class="row row-cols-auto g-3">
            <div class="col">
              <div
                class="indigator headercolor1"
                @click="onHeadercolor1()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor2"
                @click="onHeadercolor2()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor3"
                @click="onHeadercolor3()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor4"
                @click="onHeadercolor4()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor5"
                @click="onHeadercolor5()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor6"
                @click="onHeadercolor6()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor7"
                @click="onHeadercolor7()"
              ></div>
            </div>
            <div class="col">
              <div
                class="indigator headercolor8"
                @click="onHeadercolor8()"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end switcher-->
    <!-- end search modal -->
    <RouterView />

    <!--start overlay-->
    <div class="overlay toggle-icon"></div>
    <!--end overlay-->
    <!--Start Back To Top Button-->
    <a href="javaScript:;" class="back-to-top"
      ><i class="bx bxs-up-arrow-alt"></i
    ></a>
    <!--End Back To Top Button-->
    <footer class="page-footer">
      <p class="mb-0">Copyright © 2023. All right reserved.</p>
    </footer>
  </div>
  <!--end wrapper-->
</template>

<script>
import $ from "jquery";
import { RouterLink, RouterView } from "vue-router";

import AuthService_Online from "../services/online/Authentication/Auth";
import AuthService_Local from "../services/local/Authentication/Auth";
export default {
  methods: {
    onhandleLogout() {
      if (import.meta.env.VITE_APP_ENV == "local") {
        AuthService_Local.signOut().then((response) => {
          if (response.status != 200) return;
          this.$store.commit("setToken", "");
          localStorage.clear();
          location.href = "/HRIS/login";
        });
      } else {
        AuthService_Online.signOut();
        localStorage.clear();
        location.href = "/HRIS/login";
      }
    },
    onchangeTheme() {
      if ($(".dark-mode-icon i").attr("class") == "bx bx-sun") {
        $(".dark-mode-icon i").attr("class", "bx bx-moon");
        $("html").attr("class", "light-theme");
      } else {
        $(".dark-mode-icon i").attr("class", "bx bx-sun");
        $("html").attr("class", "dark-theme");
      }
    },

    /*switcher*/
    onswitchToggle() {
      $(".switcher-wrapper").toggleClass("switcher-toggled");
    },
    onLightmode() {
      $("html").attr("class", "light-theme");
    },
    onDarkmode() {
      $("html").attr("class", "dark-theme");
    },
    onSemidark() {
      $("html").attr("class", "semi-dark");
    },
    onMinimaltheme() {
      $("html").attr("class", "minimal-theme");
    },
    onHeadercolor1() {
      $("html").addClass("color-header headercolor1");
      $("html").removeClass(
        "headercolor2 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"
      );
    },
    onHeadercolor2() {
      $("html").addClass("color-header headercolor2");
      $("html").removeClass(
        "headercolor1 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"
      );
    },
    onHeadercolor3() {
      $("html").addClass("color-header headercolor3");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8"
      );
    },
    onHeadercolor4() {
      $("html").addClass("color-header headercolor4");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor3 headercolor5 headercolor6 headercolor7 headercolor8"
      );
    },
    onHeadercolor5() {
      $("html").addClass("color-header headercolor5");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor4 headercolor3 headercolor6 headercolor7 headercolor8"
      );
    },
    onHeadercolor6() {
      $("html").addClass("color-header headercolor6");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor4 headercolor5 headercolor3 headercolor7 headercolor8"
      );
    },
    onHeadercolor7() {
      $("html").addClass("color-header headercolor7");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor3 headercolor8"
      );
    },
    onHeadercolor8() {
      $("html").addClass("color-header headercolor8");
      $("html").removeClass(
        "headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor3"
      );
    },
  },
};
</script>
<style>
body {
  background-color: #f7f7ff !important;
  color: black;
}
</style>

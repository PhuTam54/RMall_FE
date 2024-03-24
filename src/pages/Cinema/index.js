function Cinema() {
    return (<>
        <div className="page-loader">
          <div>
            <div className="page-loader-body">
              <div className="loader">
                <span className="block-1" />
                <span className="block-2" />
                <span className="block-3" />
                <span className="block-4" />
                <span className="block-5" />
                <span className="block-6" />
                <span className="block-7" />
                <span className="block-8" />
                <span className="block-9" />
                <span className="block-10" />
                <span className="block-11" />
                <span className="block-12" />
                <span className="block-13" />
                <span className="block-14" />
                <span className="block-15" />
                <span className="block-16" />
              </div>
            </div>
          </div>
        </div>
        <div id="color_preloader">
          <div className="loader_wrapper">
            <div className="uil-spin-css">
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
            </div>
            <p>Loading color scheme</p>
          </div>
        </div>
        <div className="flex-wrapper">
          <div className="t3-wrapper">
            {" "}
            {/* Need this wrapper for off-canvas menu. Remove if you don't use of-canvas */}
            <div id="header">
              <div className="mainnav-position t3-sl-nav ">
                <div className="mainnav-wrapper stuck-container">
                  <div className="container ">
                    <div className="row">
                      {/* LOGO */}
                      <div className="col-sm-4">
                        <div className="logo">
                          <div className="logo-text">
                            <a href="../../index.html" title="cube">
                              <span>cube</span>
                            </a>
                            <small className="site-slogan">
                              shopping &amp; entertainmet
                            </small>
                          </div>
                        </div>
                      </div>
                      {/* //LOGO */}
                      <div className="col-sm-8">
                        <nav
                          id="t3-mainnav"
                          className="navbar navbar-mainmenu t3-mainnav"
                        >
                          <div className="t3-mainnav-wrapper">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                              <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".t3-navbar-collapse"
                              >
                                <i className="fa fa-bars" />
                                Cinema{" "}
                              </button>
                            </div>
                            <div className="t3-navbar t3-navbar-collapse navbar-collapse collapse">
                              <div
                                className="t3-megamenu animate fading"
                                data-duration={400}
                                data-responsive="true"
                              >
                                <ul
                                  itemScope=""
                                  itemType="http://www.schema.org/SiteNavigationElement"
                                  className="nav navbar-nav level0"
                                >
                                  <li
                                    itemProp="name"
                                    className="mega-align-left"
                                    data-id={101}
                                    data-level={1}
                                    data-alignsub="left"
                                  >
                                    <a
                                      itemProp="url"
                                      className="fullwidth"
                                      href="../../index-2.html"
                                      data-target="#"
                                    >
                                      Home{" "}
                                    </a>
                                  </li>
                                  <li itemProp="name" data-id={584} data-level={1}>
                                    <a
                                      itemProp="url"
                                      className=""
                                      href="../about-us.html"
                                      data-target="#"
                                    >
                                      About Us{" "}
                                    </a>
                                  </li>
                                  <li
                                    itemProp="name"
                                    className="active dropdown mega"
                                    data-id={751}
                                    data-level={1}
                                  >
                                    <span
                                      className=" dropdown-toggle separator"
                                      data-target="#"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      Departments
                                      <em className="caret" />
                                    </span>
                                    <div className="nav-child dropdown-menu mega-dropdown-menu">
                                      <div className="mega-dropdown-inner">
                                        <div className="row">
                                          <div
                                            className="col-xs-12 mega-col-nav"
                                            data-width={12}
                                          >
                                            <div className="mega-inner">
                                              <ul
                                                itemScope=""
                                                itemType="http://www.schema.org/SiteNavigationElement"
                                                className="mega-nav level1"
                                              >
                                                <li
                                                  itemProp="name"
                                                  className="current active"
                                                  data-id={781}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="cinema.html"
                                                    data-target="#"
                                                  >
                                                    Cinema{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={782}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="entertainment.html"
                                                    data-target="#"
                                                  >
                                                    Entertainment{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={783}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="shopping.html"
                                                    data-target="#"
                                                  >
                                                    Shopping{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={784}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="dinning.html"
                                                    data-target="#"
                                                  >
                                                    Dinning{" "}
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    itemProp="name"
                                    className="dropdown mega"
                                    data-id={335}
                                    data-level={1}
                                  >
                                    <span
                                      className=" dropdown-toggle separator"
                                      data-target="#"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      Pages
                                      <em className="caret" />
                                    </span>
                                    <div className="nav-child dropdown-menu mega-dropdown-menu">
                                      <div className="mega-dropdown-inner">
                                        <div className="row">
                                          <div
                                            className="col-xs-12 mega-col-nav"
                                            data-width={12}
                                          >
                                            <div className="mega-inner">
                                              <ul
                                                itemScope=""
                                                itemType="http://www.schema.org/SiteNavigationElement"
                                                className="mega-nav level1"
                                              >
                                                <li
                                                  itemProp="name"
                                                  data-id={138}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/faqs.html"
                                                    data-target="#"
                                                  >
                                                    FAQs{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={136}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/our-team.html"
                                                    data-target="#"
                                                  >
                                                    Our team{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={747}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/single-team.html"
                                                    data-target="#"
                                                  >
                                                    Single Team{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={135}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/history.html"
                                                    data-target="#"
                                                  >
                                                    History{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={137}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/testimonials.html"
                                                    data-target="#"
                                                  >
                                                    Testimonials{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={749}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/services.html"
                                                    data-target="#"
                                                  >
                                                    Services{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={750}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/single-service.html"
                                                    data-target="#"
                                                  >
                                                    Single service{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={305}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/site-map.html"
                                                    data-target="#"
                                                  >
                                                    Site map{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={342}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../forum.html"
                                                    data-target="#"
                                                  >
                                                    Forum
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={746}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/partners.html"
                                                    data-target="#"
                                                  >
                                                    Partners{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={343}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/careers.html"
                                                    data-target="#"
                                                  >
                                                    Careers{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={283}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/portfolio.html"
                                                    data-target="#"
                                                  >
                                                    Portfolio{" "}
                                                  </a>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  className="dropdown-submenu mega"
                                                  data-id={426}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/elements.html"
                                                    data-target="#"
                                                  >
                                                    Elements{" "}
                                                  </a>
                                                  <div className="nav-child dropdown-menu mega-dropdown-menu">
                                                    <div className="mega-dropdown-inner">
                                                      <div className="row">
                                                        <div
                                                          className="col-xs-12 mega-col-nav"
                                                          data-width={12}
                                                        >
                                                          <div className="mega-inner">
                                                            <ul
                                                              itemScope=""
                                                              itemType="http://www.schema.org/SiteNavigationElement"
                                                              className="mega-nav level2"
                                                            >
                                                              <li
                                                                itemProp="name"
                                                                data-id={336}
                                                                data-level={3}
                                                              >
                                                                <a
                                                                  itemProp="url"
                                                                  className=""
                                                                  href="../pages/elements/pricing.html"
                                                                  data-target="#"
                                                                >
                                                                  Pricing{" "}
                                                                </a>
                                                              </li>
                                                              <li
                                                                itemProp="name"
                                                                data-id={171}
                                                                data-level={3}
                                                              >
                                                                <a
                                                                  itemProp="url"
                                                                  className=""
                                                                  href="../template-settings.html"
                                                                  data-target="#"
                                                                >
                                                                  Template settings
                                                                </a>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li
                                                  itemProp="name"
                                                  data-id={748}
                                                  data-level={2}
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=""
                                                    href="../pages/404-page.html"
                                                    data-target="#"
                                                  >
                                                    404 page{" "}
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li itemProp="name" data-id={203} data-level={1}>
                                    <a
                                      itemProp="url"
                                      className="gallery"
                                      href="../gallery.html"
                                      data-target="#"
                                    >
                                      Gallery{" "}
                                    </a>
                                  </li>
                                  <li itemProp="name" data-id={142} data-level={1}>
                                    <a
                                      itemProp="url"
                                      className=""
                                      href="../contact-us.html"
                                      data-target="#"
                                    >
                                      Contact Us{" "}
                                    </a>
                                  </li>
                                  <li
                                    itemProp="name"
                                    className="dropdown mega menu-login mega-align-right"
                                    data-id={622}
                                    data-level={1}
                                    data-class="menu-login"
                                    data-alignsub="right"
                                    data-xicon="icon fa fa-user"
                                  >
                                    <span
                                      className="menu-login-form dropdown-toggle separator"
                                      data-target="#"
                                      data-toggle="dropdown"
                                    >
                                      <span className="icon fa fa-user" /> Login
                                      <em className="caret" />
                                    </span>
                                    <div
                                      className="nav-child dropdown-menu mega-dropdown-menu"
                                      style={{ width: 330 }}
                                      data-width={330}
                                    >
                                      <div className="mega-dropdown-inner">
                                        <div className="row">
                                          <div
                                            className="col-xs-12 mega-col-nav"
                                            data-width={12}
                                          >
                                            <div className="mega-inner">
                                              <ul
                                                itemScope=""
                                                itemType="http://www.schema.org/SiteNavigationElement"
                                                className="mega-nav level1"
                                              >
                                                <li
                                                  itemProp="name"
                                                  className="mega mega-group notitle"
                                                  data-id={623}
                                                  data-level={2}
                                                  data-group={1}
                                                  data-class="notitle"
                                                >
                                                  <a
                                                    itemProp="url"
                                                    className=" dropdown-header mega-group-title"
                                                    href="#"
                                                    data-target="#"
                                                  >
                                                    Login or register
                                                  </a>
                                                  <div className="nav-child mega-group-ct">
                                                    <div className="mega-dropdown-inner">
                                                      <div className="row">
                                                        <div
                                                          className="col-xs-12 mega-col-module"
                                                          data-width={12}
                                                          data-position={252}
                                                        >
                                                          <div className="mega-inner">
                                                            <div className="moduletable login_megamenu ">
                                                              <div className="module_container">
                                                                <div className="mod_login_wrapper">
                                                                  <noindex>
                                                                    <div className="jlslogin">
                                                                      <div className="slogin-clear" />
                                                                      <form
                                                                        action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php/departments/cinema"
                                                                        method="post"
                                                                        id="login-form"
                                                                      >
                                                                        <fieldset className="userdata">
                                                                          <div id="form-login-username">
                                                                            <label htmlFor="modlgn-username">
                                                                              Username
                                                                            </label>
                                                                            <input
                                                                              id="modlgn-username"
                                                                              type="text"
                                                                              name="username"
                                                                              className="inputbox"
                                                                              size={
                                                                                18
                                                                              }
                                                                              placeholder="Username"
                                                                            />
                                                                          </div>
                                                                          <div id="form-login-password">
                                                                            <label htmlFor="modlgn-passwd">
                                                                              Password
                                                                            </label>
                                                                            <input
                                                                              id="modlgn-passwd"
                                                                              type="password"
                                                                              name="password"
                                                                              className="inputbox"
                                                                              size={
                                                                                18
                                                                              }
                                                                              placeholder="Password"
                                                                            />
                                                                          </div>
                                                                          <div id="form-login-remember">
                                                                            <label htmlFor="modlgn-remember">
                                                                              <input
                                                                                id="modlgn-remember"
                                                                                type="checkbox"
                                                                                name="remember"
                                                                                className="inputbox"
                                                                                defaultValue="yes"
                                                                              />
                                                                              Remember
                                                                              Me{" "}
                                                                            </label>
                                                                          </div>
                                                                          <div className="slogin-clear" />
                                                                          <input
                                                                            type="submit"
                                                                            name="Submit"
                                                                            className="btn button"
                                                                            defaultValue="Log in"
                                                                          />
                                                                          <input
                                                                            type="hidden"
                                                                            name="option"
                                                                            defaultValue="com_users"
                                                                          />
                                                                          <input
                                                                            type="hidden"
                                                                            name="task"
                                                                            defaultValue="user.login"
                                                                          />
                                                                          <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            defaultValue="aHR0cHM6Ly9saXZlZGVtbzAwLWpvb21sYS50ZW1wbGF0ZS1oZWxwLmNvbS9qb29tbGFfcHJvZC0xNjQ1NC9pbmRleC5waHAvZGVwYXJ0bWVudHMvY2luZW1h"
                                                                          />
                                                                          <input
                                                                            type="hidden"
                                                                            name="d7858be5c8b2162e7e726f1d4d40fccb"
                                                                            defaultValue={
                                                                              1
                                                                            }
                                                                          />{" "}
                                                                        </fieldset>
                                                                        <ul className="ul-jlslogin">
                                                                          <li>
                                                                            <a
                                                                              rel="nofollow"
                                                                              href="../password-reset.html"
                                                                            >
                                                                              Forgot
                                                                              your
                                                                              password?
                                                                            </a>
                                                                          </li>
                                                                          <li>
                                                                            <a
                                                                              rel="nofollow"
                                                                              href="../username-reminder-request.html"
                                                                            >
                                                                              Forgot
                                                                              your
                                                                              username?
                                                                            </a>
                                                                          </li>
                                                                          <li>
                                                                            <a
                                                                              rel="nofollow"
                                                                              href="../user-registration.html"
                                                                            >
                                                                              Create
                                                                              an
                                                                              account
                                                                            </a>
                                                                          </li>
                                                                        </ul>
                                                                      </form>
                                                                      <div
                                                                        id="slogin-buttons"
                                                                        className="slogin-buttons slogin-default"
                                                                      >
                                                                        <a
                                                                          rel="nofollow"
                                                                          className="btn linkfacebookslogin"
                                                                          title="Facebook"
                                                                          href="https://www.facebook.com/v2.12/dialog/oauth?client_id=1770184923308057&redirect_uri=https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F%3Foption%3Dcom_slogin%26task%3Dcheck%26plugin%3Dfacebook&response_type=code"
                                                                        >
                                                                          <span className="facebookslogin slogin-ico" />
                                                                          <span className="text-socbtn">
                                                                            Facebook
                                                                          </span>
                                                                        </a>
                                                                        <a
                                                                          rel="nofollow"
                                                                          className="btn linkgoogleslogin"
                                                                          title="Google"
                                                                          href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=https%3A%2F%2Flivedemo00-joomla.template-help.com%2Fjoomla_prod-16454%2F%3Foption%3Dcom_slogin%26task%3Dcheck%26plugin%3Dgoogle&client_id=4ea43331a8b16c6ddb33685fc03635a8&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"
                                                                        >
                                                                          <span className="googleslogin slogin-ico" />
                                                                          <span className="text-socbtn">
                                                                            Google
                                                                          </span>
                                                                        </a>
                                                                      </div>
                                                                    </div>
                                                                  </noindex>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {/* top */}
              {/* //top */}
              {/* HEADER */}
              {/* //HEADER */}
              {/* BREADCRUMBS */}
              <div id="t3-breadcrumbs" className="t3-breadcrumbs">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul
                        itemScope=""
                        itemType="https://schema.org/BreadcrumbList"
                        className="breadcrumb"
                      >
                        {/* 		<li class="active">
                  <span class="divider icon-location"></span>
              </li>
           */}
                        <li
                          itemProp="itemListElement"
                          itemScope=""
                          itemType="https://schema.org/ListItem"
                        >
                          <a
                            itemProp="item"
                            href="../../index-2.html"
                            className="pathway"
                          >
                            <span itemProp="name">Home</span>
                          </a>
                        </li>
                        <li
                          itemProp="itemListElement"
                          itemScope=""
                          itemType="https://schema.org/ListItem"
                          className="active"
                        >
                          <span itemProp="name">Cinema</span>
                          <meta itemProp="position" content={3} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* //BREADCRUMBS */}
            </div>
            <div id="t3-mainbody" className="t3-mainbody">
              <div className="container">
                <div className="row">
                  {/* MAIN CONTENT */}
                  <div id="t3-content" className="t3-content col-sm-12">
                    <div className="content-top wrap t3-sl t3-sl-content-top ">
                      <div className="row">
                        <div className="moduletable center  col-sm-12">
                          <div className="module_container">
                            <div className="page_header">
                              <h3 className="moduleTitle type1">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  CINEMA
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  CITY
                                </span>
                              </h3>
                            </div>
                            <div className="mod_custom mod_custom__center">
                              <h2>
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  WATCH
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                  MOVIES
                                </span>{" "}
                                <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                  AT
                                </span>{" "}
                                <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                  IT'S
                                </span>{" "}
                                <span className="item_title_part_4 item_title_part_odd item_title_part_second_half item_title_part_last">
                                  BEST
                                </span>
                              </h2>
                              <p>
                                Cube is your best shopping experience in the center of
                                the city, special offers and season sales. If you like
                                to shop for all your clothes and things in one place,
                                welcome to Cube shopping mall! In addition to the huge
                                number of popular stores inside, we have entertainment
                                and dining zones where you can have some rest.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section
                      className="page-blog page-blog__"
                      itemScope=""
                      itemType="http://schema.org/Blog"
                    ></section>
                  </div>
                  {/* //MAIN CONTENT */}
                </div>
              </div>
            </div>
            <div className="position-1 wrap t3-sl t3-sl-1 ">
              <div className="container container-fullwidth">
                <div className="row">
                  <div className="moduletable type1 right ">
                    <div className="module_container">
                      <div
                        id="mod_tm_parallax_313"
                        className="parallax-container mod_tm_parallax__type1 right"
                      >
                        <div className="mod_tm_parallax">
                          <img src="../../images/parallax/parallax7.jpg" alt="" />
                        </div>
                        <div className="parallax-content">
                          <div className="container">
                            <div className="row">
                              <div className="moduletable   col-sm-6 col-sm-offset-6">
                                <div className="module_container">
                                  <div className="page_header">
                                    <h4 className="moduleTitle linearicons-3d-glasses ">
                                      <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                        A
                                      </span>{" "}
                                      <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                        wide
                                      </span>{" "}
                                      <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                                        library
                                      </span>{" "}
                                      <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                                        of
                                      </span>{" "}
                                      <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                                        movie
                                      </span>{" "}
                                      <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                                        titles
                                      </span>
                                    </h4>
                                  </div>
                                  <div
                                    className="mod-article-single mod-article-single__"
                                    id="module_312"
                                  >
                                    <div className="item__module" id="item_219">
                                      {/* Intro Text */}
                                      <div className="item_introtext">
                                        Cube Shopping Mall has 12 theatres, with a
                                        total of 8080 seats, has superb film
                                        projection, state of the art surround sound,
                                        spacious lobby area, comfortable upholstered
                                        seats, and carpeted floors perfect for
                                        everybody's movie-watching experience. IMAX is
                                        designed to fill one's field of vision and
                                        engulf one in cinematic surround sound so
                                        powerful it is almost tangible.
                                        <p>
                                          The screen is several times larger than a
                                          standard theater screen and is slightly
                                          curved with seats angled, allowing audience
                                          to have an unobstructed view of the movie
                                          screening.
                                        </p>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-2 wrap t3-sl t3-sl-2 ">
              <div className="container ">
                <div className="row">
                  <div className="moduletable center  col-sm-12">
                    <div className="module_container">
                      <div className="page_header">
                        <h2 className="moduleTitle type4">
                          <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                            MOVIES
                          </span>{" "}
                          <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                            WHAT’S
                          </span>{" "}
                          <span className="item_title_part_2 item_title_part_odd item_title_part_first_half">
                            ON
                          </span>{" "}
                          <span className="item_title_part_3 item_title_part_even item_title_part_second_half">
                            THE
                          </span>{" "}
                          <span className="item_title_part_4 item_title_part_odd item_title_part_second_half">
                            SCREEN
                          </span>{" "}
                          <span className="item_title_part_5 item_title_part_even item_title_part_second_half item_title_part_last">
                            TODAY
                          </span>
                        </h2>
                      </div>
                      <div
                        className="mod-newsflash-adv gallery mod-newsflash-adv__center cols-4"
                        id="module_314"
                      >
                        <div className="row">
                          <article
                            className="col-sm-3 item item_num0 item__module  "
                            id="item_220"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image1.jpg"
                                >
                                  <img src="../../images/cinema/thumb1.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  Alex
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  Cross
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num1 item__module  "
                            id="item_221"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image2.jpg"
                                >
                                  <img src="../../images/cinema/thumb2.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  amour
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  large
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num2 item__module  "
                            id="item_222"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image3.jpg"
                                >
                                  <img src="../../images/cinema/thumb3.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  les
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  miserables
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num3 item__module  "
                            id="item_223"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image4.jpg"
                                >
                                  <img src="../../images/cinema/thumb4.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                  Elysium
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                        </div>
                        <div className="row">
                          {" "}
                          <article
                            className="col-sm-3 item item_num4 item__module  "
                            id="item_224"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image5.jpg"
                                >
                                  <img src="../../images/cinema/thumb5.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  Home
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  Run
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num5 item__module  "
                            id="item_225"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image6.jpg"
                                >
                                  <img src="../../images/cinema/thumb6.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  olympus
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                  has
                                </span>{" "}
                                <span className="item_title_part_2 item_title_part_odd item_title_part_second_half item_title_part_last">
                                  fallen
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num6 item__module  "
                            id="item_226"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image7.jpg"
                                >
                                  <img src="../../images/cinema/thumb7.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  Star
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                  Trek
                                </span>{" "}
                                <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                  Into
                                </span>{" "}
                                <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                  Darkness
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-3 item item_num7 item__module  lastItem"
                            id="item_227"
                          >
                            <div className="item_content">
                              {/* Intro Image */}
                              <figure className="item_img img-intro img-intro__none">
                                <a
                                  className="fancybox-thumb zoom articleGalleryZoom"
                                  data-fancybox-group="portfolio"
                                  data-fancybox-type="image"
                                  data-fancybox="fancybox"
                                  href="../../images/cinema/image8.jpg"
                                >
                                  <img src="../../images/cinema/thumb8.jpg" alt="" />
                                </a>
                              </figure>
                              {/* Item title */}
                              <h5 className="item_title item_title__center">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  The
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_first_half">
                                  Hunger
                                </span>{" "}
                                <span className="item_title_part_2 item_title_part_odd item_title_part_second_half">
                                  Games
                                </span>{" "}
                                <span className="item_title_part_3 item_title_part_even item_title_part_second_half item_title_part_last">
                                  Fanmade
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <dl className="table">
                                  <dd>17:00</dd>
                                  <dd>19:50</dd>
                                  <dd>23:05</dd>
                                </dl>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  <div className="moduletable   col-sm-12">
                    <div className="module_container">
                      <div
                        className="mod-newsflash-adv custom mod-newsflash-adv__ cols-3"
                        id="module_315"
                      >
                        <div className="row">
                          <article
                            className="col-sm-4 item item_num0 item__module  "
                            id="item_228"
                          >
                            <i className="linearicons-clock3 pull-left" />
                            <div className="item_content">
                              {/* Item title */}
                              <h5 className="item_title item_title__">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  WORKING
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  HOURS
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <p>Daily, from 10:00 AM till 11:00 PM</p>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-4 item item_num1 item__module  "
                            id="item_229"
                          >
                            <i className="linearicons-telephone pull-left" />
                            <div className="item_content">
                              {/* Item title */}
                              <h5 className="item_title item_title__">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first">
                                  CONTACT
                                </span>{" "}
                                <span className="item_title_part_1 item_title_part_even item_title_part_second_half item_title_part_last">
                                  PHONE
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <p>+ 1 (222) 333 4567</p>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                          <article
                            className="col-sm-4 item item_num2 item__module  lastItem"
                            id="item_230"
                          >
                            <i className="linearicons-list pull-left" />
                            <div className="item_content">
                              {/* Item title */}
                              <h5 className="item_title item_title__">
                                <span className="item_title_part_0 item_title_part_odd item_title_part_first_half item_title_part_first item_title_part_last">
                                  PRICING
                                </span>
                              </h5>
                              {/* Introtext */}
                              <div className="item_introtext">
                                <p>MON-FRI: 15$ per hour; WEEKENDS: 35$ per hour</p>{" "}
                              </div>
                              {/* Read More link */}
                            </div>
                            <div className="clearfix" />
                          </article>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="fixed-sidebar-left">
              <div className="moduletable  ">
                <div className="module_container"></div>
              </div>
            </div>
            <div id="fixed-sidebar-right"></div>
          </div>
          {/* FOOTER */}
          <footer id="t3-footer" className="wrap t3-footer">
            <div className="footer-1 wrap t3-sl t3-sl-footer-1 ">
              <div className="container ">
                <div className="row">
                  <div className="moduletable   col-sm-3">
                    <div className="module_container">
                      <div className="mod-menu">
                        <ul className="menu list">
                          <li className="item-752">
                            <a href="#">SPECIAL OFFERS &amp; DISCOUNT</a>
                          </li>
                          <li className="item-753">
                            <a href="#">NEWS</a>
                          </li>
                          <li className="item-754">
                            <a href="#">SHOPPING</a>
                          </li>
                          <li className="item-755">
                            <a href="#">CAFES AND RESTAURANTS</a>
                          </li>
                          <li className="item-756">
                            <a href="#">ENTERTAINMENT</a>
                          </li>
                          <li className="item-757">
                            <a href="#">SERVICES</a>
                          </li>
                          <li className="item-758">
                            <a href="../about-us.html">ABOUT US</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="moduletable   col-sm-3">
                    <div className="module_container">
                      <div className="mod-menu">
                        <ul className="menu list">
                          <li className="item-759">
                            <a href="#">MAP OF shopping mall</a>
                          </li>
                          <li className="item-760">
                            <a href="#">DIRECTIONS</a>
                          </li>
                          <li className="item-761">
                            <a href="#">FOR TENANTS</a>
                          </li>
                          <li className="item-762">
                            <a href="#">VACANCIES</a>
                          </li>
                          <li className="item-763">
                            <a href="#">USEFUL LINKS</a>
                          </li>
                          <li className="item-764">
                            <a href="#">SALES &amp; PROMOTIONS</a>
                          </li>
                          <li className="item-765">
                            <a href="#">PARTNERS</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="moduletable   col-sm-3">
                    <div className="module_container">
                      <div className="mod-menu">
                        <ul className="menu list">
                          <li className="bold">
                            <span className="separator">Shopping Gallery</span>
                          </li>
                          <li>
                            <span className="separator">10:00 am - 10:00 pm</span>
                          </li>
                          <li className="bold">
                            <span className="separator">Shoping Area 2:</span>
                          </li>
                          <li>
                            <span className="separator">08:30 am - 11.00 pm</span>
                          </li>
                          <li className="bold">
                            <span className="separator">Shoping Area 2:</span>
                          </li>
                          <li>
                            <span className="separator">
                              Mon-Sat: 8.00 am – 9.30 pm
                            </span>
                          </li>
                          <li>
                            <span className="separator">
                              Sunday: 9.00 am – 9.00 pm
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="moduletable   col-sm-3">
                    <div className="module_container">
                      <div className="mod-menu">
                        <ul className="menu list">
                          <li className="bold">
                            <span className="separator">City Bowling:</span>
                          </li>
                          <li>
                            <span className="separator">
                              Mon-Thu: 10:00 am - 02:00 am
                            </span>
                          </li>
                          <li>
                            <span className="separator">
                              Fri-Sun: 10:00 am - 05:00 am
                            </span>
                          </li>
                          <li className="bold">
                            <span className="separator">Cafes and Restaurants:</span>
                          </li>
                          <li>
                            <span className="separator">10:00 am - 10:00 pm</span>
                          </li>
                          <li className="bold">
                            <span className="separator">Administration</span>
                          </li>
                          <li>
                            <span className="separator">
                              Mon-Fri: 09:00 am – 6:00 pm
                            </span>
                          </li>
                          <li>
                            <a href="tel:0311230580">+031 123 05 80</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap t3-sl t3-sl-footer ">
              <div className="container">
                <div className="row">
                  <div className="copyright col-sm-7">
                    <span>Copyright</span>
                    {/* <span class="siteName">cube.</span> */}
                    <span className="copy">©</span>
                    <span className="year">2024</span>
                    <span>All rights reserved</span>
                  </div>
                  <div className="moduletable   col-sm-5">
                    <div className="module_container">
                      <ul className="nav menu social">
                        <li className="item-148">
                          <a href="#" title="Facebook" className="fa fa-facebook" />
                        </li>
                        <li className="item-150">
                          <a href="#" title="Twitter" className="fa fa-twitter" />
                        </li>
                        <li className="item-149">
                          <a href="#" title="Google+" className="fa fa-google-plus" />
                        </li>
                        <li className="item-152">
                          <a href="#" title="Skype" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* //FOOTER */}
        </div>
        <div id="back-top">
          <a href="#">
            <span />
          </a>
        </div>
        <div className="container">
          <div
            id="modal"
            className="modal fade loginPopup"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <button type="button" className="close modalClose" data-dismiss="modal">
              ×
            </button>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="moduletable  modal_search ">
                  <div className="module_container">
                    <div className="search modal_search mod_search195">
                      <form
                        action="https://livedemo00-joomla.template-help.com/joomla_prod-16454/index.php/departments/cinema"
                        method="post"
                        className="form-inline form-search"
                      >
                        <label
                          htmlFor="mod-search-searchword195"
                          className="element-invisible"
                        >
                          Search ...
                        </label>{" "}
                        <input
                          name="searchword"
                          id="mod-search-searchword"
                          aria-label="search"
                          maxLength={200}
                          className="form-control search-query"
                          type="search"
                          size={20}
                          placeholder="Search ..."
                        />{" "}
                        <button
                          className="button btn btn-primary"
                          onclick="this.form.searchword.focus();"
                        >
                          {" "}
                        </button>{" "}
                        <input type="hidden" name="task" defaultValue="search" />
                        <input
                          type="hidden"
                          name="option"
                          defaultValue="com_search"
                        />
                        <input type="hidden" name="Itemid" defaultValue={101} />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Google Tag Manager */}
        <noscript>
          &lt;iframe src="http://www.googletagmanager.com/ns.html?id=GTM-P9FT69"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/* End Google Tag Manager */}
      </>
      );
}

export default Cinema;
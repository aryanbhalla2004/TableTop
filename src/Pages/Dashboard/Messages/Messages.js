import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Collapse } from "react-collapse";
import "./Messages.css";
const Messages = () => {
  const [isSearchBox, setIsSearchBox] = useState(false);
  const handleSearchBoxCollapse = () => {
    setIsSearchBox((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className="Message-Container">
        <div className="Message-Sidebar">
          <div className="Message-Sidebar-Header">
            <div className="Message-Sidebar-Header-Top">
              <h4>Chats</h4>
              <div className="Message-Sidebar-Header-Top-RightSide">
                <div className="Message-Sidebar-Header-Bell">
                  <i className="bi bi-bell"></i>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-default"
                    id="vertical-dots"
                    size="sm"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">New Chat</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Invite Others
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Create Group
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="Message-Sidebar-Header-Filter">
              <div className="Message-Sidebar-Header-Dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-default"
                    id="dropdown-basic"
                    size="sm"
                  >
                    All Chats
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All Chats</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Unread</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Archived</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <form className="Message-Sidebar-Header-SearchForm">
                <input
                  type="search"
                  placeholder="Search Users"
                  className="Message-Sidebar-Header-Search"
                />
                <button type="submit" className="Message-Sidebar-Header-button">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="Message-Sidebar-ChatContract">
            <Link to="" className="Message-Sidebar-Contract-Link">
              <div className="Message-Sidebar-Contract-link-Container">
                <span className="Message-Contract-Link-UserPicture">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </span>
                <div className="Message-Contract-Link-Content">
                  <div className="Message-Contract-Link-Top">
                    <div className="Message-Contract-Link-UserName">
                      Cahterine Richardson
                    </div>
                    <div className="Message-Contract-Link-ChatTime">
                      Just now
                    </div>
                  </div>
                  <p className="Message-Contract-Link-CurrentText-read">
                    I'm sorry, I didn't catch that. Could you please repeat?
                  </p>
                </div>
              </div>
            </Link>
            <Link to="" className="Message-Sidebar-Contract-Link">
              <div className="Message-Sidebar-Contract-link-Container">
                <span className="Message-Contract-Link-UserPicture">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </span>
                <div className="Message-Contract-Link-Content">
                  <div className="Message-Contract-Link-Top">
                    <div className="Message-Contract-Link-UserName">
                      Cahterine Richardson
                    </div>
                    <div className="Message-Contract-Link-ChatTime">
                      Just now
                    </div>
                  </div>
                  <p className="Message-Contract-Link-CurrentText-read">
                    I'm sorry, I didn't catch that. Could you please repeat?
                  </p>
                </div>
              </div>
            </Link>
            <Link to="" className="Message-Sidebar-Contract-Link">
              <div className="Message-Sidebar-Contract-link-Container">
                <span className="Message-Contract-Link-UserPicture">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </span>
                <div className="Message-Contract-Link-Content">
                  <div className="Message-Contract-Link-Top">
                    <div className="Message-Contract-Link-UserName">
                      Cahterine Richardson
                    </div>
                    <div className="Message-Contract-Link-ChatTime">
                      Just now
                    </div>
                  </div>
                  <p className="Message-Contract-Link-CurrentText-read">
                    I'm sorry, I didn't catch that. Could you please repeat?
                  </p>
                </div>
              </div>
            </Link>
            <Link to="" className="Message-Sidebar-Contract-Link">
              <div className="Message-Sidebar-Contract-link-Container">
                <span className="Message-Contract-Link-UserPicture">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </span>
                <div className="Message-Contract-Link-Content">
                  <div className="Message-Contract-Link-Top">
                    <div className="Message-Contract-Link-UserName">
                      Cahterine Richardson
                    </div>
                    <div className="Message-Contract-Link-ChatTime">
                      Just now
                    </div>
                  </div>
                  <p className="Message-Contract-Link-CurrentText-read">
                    I'm sorry, I didn't catch that. Could you please repeat?
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="Message-Chat">
          <div className="Message-Chat-Header">
            <div className="Message-Chat-Header-User">
              <span className="Message-Contract-Link-UserPicture">
                <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
              </span>
              <div className="Message-Chat-Header-UserName">
                <p>Catherine Richardson</p>
                <p className="Message-Chat-Header-User-Status">Online</p>
              </div>
            </div>
            <div className="Message-Chat-Header-Menu">
              <Link onClick={() => handleSearchBoxCollapse()} to="">
                <i class="bi bi-search"></i>
              </Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-default"
                  id="vertical-dots"
                  size="sm"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <i class="bi bi-trash3"></i>&nbsp;&nbsp;Delete
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <i class="bi bi-x-octagon"></i>&nbsp;&nbsp;Block
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i class="bi bi-volume-mute"></i>&nbsp;&nbsp;Mute
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Collapse isOpened={isSearchBox}>
            <div className="Message-Chat-Search-Container">
              <form className="Message-Chat-SearchForm">
                <input
                  type="search"
                  placeholder="Search Message"
                  className="Message-Chat-Search"
                />
                <button type="submit" className="Message-Chat-Search-button">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
          </Collapse>
          <div className="Message-Chat-ChatContainer">
            <div className="Bubble-Container">
              <div className="Bubble-ChatUser">
                <div className="Bubble-ChatUser-Content">
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </div>
                <div className="Bubble-ChatUser-Avatar">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                  <span>09:20am</span>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-CurrentUser">
                <div className="Bubble-CurrentUser-Content">
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </div>
                <div className="Bubble-CurrentUser-Avatar">
                  <span>09:20am</span>
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-ChatUser">
                <div className="Bubble-ChatUser-Content">
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </div>
                <div className="Bubble-ChatUser-Avatar">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                  <span>09:20am</span>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-CurrentUser">
                <div className="Bubble-CurrentUser-Content">
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </div>
                <div className="Bubble-CurrentUser-Avatar">
                  <span>09:20am</span>
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-ChatUser">
                <div className="Bubble-ChatUser-Content">
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </div>
                <div className="Bubble-ChatUser-Avatar">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                  <span>09:20am</span>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-CurrentUser">
                <div className="Bubble-CurrentUser-Content">
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </div>
                <div className="Bubble-CurrentUser-Avatar">
                  <span>09:20am</span>
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-ChatUser">
                <div className="Bubble-ChatUser-Content">
                  I have to give a presentation on global warming on Friday, and
                  I am so nervous.
                </div>
                <div className="Bubble-ChatUser-Avatar">
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                  <span>09:20am</span>
                </div>
              </div>
            </div>
            <div className="Bubble-Container">
              <div className="Bubble-CurrentUser">
                <div className="Bubble-CurrentUser-Content">
                  First of all, you need to understand the subject matter
                  thoroughly. You need to know what is global warming, what
                  causes global warming, and what people should do to abate the
                  effects of global warming.
                </div>
                <div className="Bubble-CurrentUser-Avatar">
                  <span>09:20am</span>
                  <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="Message-Chat-Editor">
            <i class="bi bi-plus-circle"></i>
            <input placeholder="Type your message here..." />
            <i class="bi bi-emoji-smile"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;

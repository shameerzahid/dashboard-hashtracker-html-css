class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = 
      `
      <header>
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-light">
        <img class="logo1" style="width: 16vw; height:18vh;" src="logo.png" alt="logo"/>
        
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3">
            <ul  class="collapse show list-group list-group-flush">
          
                
                <li class="list-group-item my-2 " id="list">
                  <a href="index.html" class="waves-effect" id="items"><i class="fa fa-user"></i>&nbsp;&nbsp;DashBoard</a>
                </li>
               

              <a class="waves-effect my-2" aria-current="true"
              data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false"
                aria-controls="collapseExample1" id="items" href="">
                <i class="fa fa-caret-down" aria-hidden="true"></i>&nbsp;&nbsp;Others </a>
              <ul id="collapseExample1" class="collapse show list-group list-group-flush my-3">
                <li class="list-group-item "id="list">
                  <a href="" class="waves-effect" id="items"><i class="fa fa-user"></i>&nbsp;&nbsp;Driver Habbits</a>
                </li>
                <li class="list-group-item my-2 " id="list">
                  <a href="" class="waves-effect " id="items"><i class="fa fa-table"></i>&nbsp;&nbsp;Accident Alerts</a>
                </li>
                <li class="list-group-item " id="list">
                  <a href="" class="waves-effect  " id="items" ><i class="fa fa-font"></i>&nbsp;&nbsp;Messaging</a>
                </li>
                <li class="list-group-item my-2" id="list">
                  <a href="" class="waves-effect  " id="items"><i class="fa fa-globe"></i>&nbsp;&nbsp;Theft Alert</a>
                </li>
                <li class="list-group-item  " id="list">
                  <a href="" class="waves-effect  " id="items"><i class="fa fa-columns"></i>&nbsp;&nbsp;Overspeed Alert</a>
                </li>
                <li class="list-group-item my-2" id="list">
                  <a href="" class="waves-effect " id="items"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;Towing Detection</a>
                </li>
                
              </ul>
              <!-- Collapse 1 -->

              

            </div>
          </div>
        </nav>
        <!-- Sidebar -->
        <nav class="navbar  navbarwidth" id="sidebar">
          
          <div class="search">
          
          <form class="form-inline">
           
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
  
        <div class="logout">
          <form class="form-inline my-2 my-lg-0">
             <span style="color: white;">
              UserName &nbsp;&nbsp;
             </span> 
              <img class="img-thumbnail rounded-circle" id="loginimg" style="width: 50px; height: 50px;" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg">
        </div>
       
      </form>
    </nav>
      



      
  </header>

      `;
    }  }

    customElements.define('header-component', Header);
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link } = ReactRouter;

class Post extends React.Component{
  render(){
    return(
      <div className='post'>
        <img width='200' height='175' src='image/test.jpg'/>
        <div className='post-content'>
          <h2>
            <span>Tiêu văn đề Tiêu văn đề Tiêu văn đề Tiêu văn đề</span>
          </h2>
          <div className='post-info'>
            <span className='post-time'>THURSDAY, JULY 03, 2014</span>
            <span className='post-author'>
              <i className='fa fa-circle'></i>
              Le Viet Tien
            </span>
          </div>
          <div className='post-body'>
            <span>
              Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra ur...
            </span>
            <a className='readmore' href='#'>read more +</a>
          </div>
        </div>
      </div>
    );
  }
}

class WidgetMenu extends React.Component{
  render(){
    return(
      <div className='widget-menu'>
        <ul>
          <li><IndexLink to='/' activeClassName="active">Popular Post</IndexLink></li>
          <li><Link to='/widget-menu/video' activeClassName="active">Video</Link></li>
          <li><Link to='/widget-menu/category' activeClassName="active">Category</Link></li>
        </ul>
        <div className='widget-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Video extends React.Component{
  render(){
    return(
      <h1>Video</h1>
    );
  }
}


class Category extends React.Component{
  render(){
    return(
      <h1>Category</h1>
    );
  }
}

class PopularPost extends React.Component{
  render(){
    return(
      <div className='popular-container'>
      <div className='popular-post'>
        <img width='81' height='81' src='image/test.jpg'/>
        <div className='popular-title'>
          <a href='#'>
            <b>Moment Pierre Olivier Bourgeois Photography 2014</b>
          </a>
        </div>
      </div>
      <hr/>
      </div>
    );
  }
}

class ListPopularPost extends React.Component{
  render(){
    return(
      <div className='list-popular-post'>
        <PopularPost/>
        <PopularPost/>
        <PopularPost/>
        <PopularPost/>
        <PopularPost/>
        <PopularPost/>
      </div>
    );
  }
}

//  Header
class Header extends React.Component{
  render(){
    return(
      <div className = 'header' >
        <div className = 'socia' >
          <ul >
            <a href = '#' > < i className = "fa fa-facebook-official" > < /i></a >
            <a href = '#' > < i className = "fa fa-google-plus-official" > < /i></a >
          </ul>
        </div >
      </div>
    );
  }
}

class ListPost extends React.Component{
  render(){
    return(
      <div className='listPost'>
        <Post />
        <Post />
        <Post />
      </div>
    );
  };
}

class Menu1 extends React.Component{
  render(){
    return(
      <h1>Menu 1</h1>
    );
  }
}

class Menu2 extends React.Component{
  render(){
    return(
      <h1>Menu 2</h1>
    );
  }
}

class Menu3 extends React.Component{
  render(){
    return(
      <h1>Menu 3</h1>
    );
  }
}

class SubMenu1 extends React.Component{
  render(){
    return(
      <h1>Sub Menu 1</h1>
    );
  }
}

class SubMenu2 extends React.Component{
  render(){
    return(
      <h1>Sub Menu 2</h1>
    );
  }
}

class SubMenu3 extends React.Component{
  render(){
    return(
      <h1>Sub Menu 3</h1>
    );
  }
}

//  Main menu
class MainMenu extends React.Component{
  render(){
    return(
      <div className = 'menu'>
        <ul className = 'menubar'>
          <li><IndexLink to='/' activeClassName="active"> Home </IndexLink></li>
          <li><Link to='/menu1' activeClassName="active"> Menu 1 </Link></li>
          <li><Link to='/menu2' activeClassName="active"> Menu 2 </Link></li>
          <li><Link to='/menu3' activeClassName="active"> Menu 3 </Link>
            <ul>
              <li><Link to='/menu3/submenu1'> Sub Menu 1 </Link></li>
              <li><Link to='/menu3/submenu2'> Sub Menu 2 </Link></li>
              <li><Link to='/menu3/submenu3'> Sub Menu 3 </Link></li>
            </ul>
          </li>
        </ul>
        <div className ='search'>
        </div>
        <div className='listPost'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

//  home
ReactDOM.render(
  <div className = 'container'>
    <Header/>
    <div id='main-menu'>
    </div>
    <div id='widget-menu'>
    </div>
  </div>
  ,document.getElementById('root'));

// main menu
ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={MainMenu}>
      <IndexRoute component={ListPost}/>
      <Route path='/menu1' component={Menu1}/>
      <Route path='/menu2' component={Menu2}/>
      <Route path='/menu3' component={Menu3}>
        <Route path='/submenu1' component={SubMenu1}/>
        <Route path='/submenu2' component={SubMenu2}/>
        <Route path='/submenu3' component={SubMenu3}/>
      </Route>
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('main-menu')
);

// widget menu
ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={WidgetMenu}>
      <IndexRoute component={ListPopularPost}/>
      <Route path='/widget-menu/video' component={Video}/>
      <Route path='/widget-menu/category' component={Category}/>
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('widget-menu')
);

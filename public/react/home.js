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

class ListPost extends React.Component{
  render(){
    return(
      <div className='listPost'>
        <Post />
        <Post />
      </div>
    );
  };
}

class WidgetMenu extends React.Component{
  render(){
    return(
      <div className='widget-menu'>
        <ul>
          <li>Popular Post</li>
          <li>Video</li>
          <li>Category</li>
        </ul>
        <ListPopularPost/>
      </div>
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

ReactDOM.render(
  <div className = 'container' >
    <div className = 'header' >
    <div className = 'socia' >
    <ul >
    <a href = '#' > < i className = "fa fa-facebook-official" > < /i></a >
    <a href = '#' > < i className = "fa fa-google-plus-official" > < /i></a >
    </ul> </div >
    </div>
    <div className = 'menu' >
    <ul className = 'menubar' >
    <li>
    <a href = '#' > Home </a> </li>
    <li>
    <a href = '#' > Menu 1 </a> </li>
    <li>
    <a href = '#' > Menu 2 </a> </li>
    <li>
    <a href = '#' > Menu 3 </a>
    <ul>
    <li>
    <a href = '#' > Sub Menu 1 </a>
    </li>
    <li>
    <a href = '#' > Sub Menu 2 </a>
    </li>
    <li>
    <a href = '#' > Sub Menu 3 </a>
    </li> </ul>
    </li>
    </ul>
    <div className = 'search' >
    </div> </div>
    <div>
      <ListPost/>
      <WidgetMenu/>
    </div>
    </div>
    ,document.getElementById('root'));

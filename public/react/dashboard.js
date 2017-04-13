var styleUpdate = {
	color: 'blue'
};

var styleDelete = {
	color : 'red'
};

class Navigation extends React.Component {
	render() {
		return (
    <div className="sidebar" data-color="purple" data-image="image/sidebar-5.jpg">
    	<div className="sidebar-wrapper">
            <div className="logo">
                <a href="table.html" className="simple-text">
                    DASHBOARD
                </a>
            </div>

            <ul className="nav">
                <li className="active">
                    <a href="/">
                        <i className="pe-7s-note2"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="/profile">
                        <i className="pe-7s-user"></i>
                        <p>User Profile</p>
                    </a>
                </li>
            </ul>
    	</div>
    </div>
		);
	}
}

class HeaderBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Table List</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                                <p>Log out</p>
                            </a>
                        </li>
						<li className="separator hidden-lg hidden-md"></li>
                    </ul>
                </div>
            </div>
        </nav>
		);
	}
}

class Category extends React.Component {
	render() {
		return (
			<div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Categories</h4>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <th>ID</th>
                                    	<th>Category name</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td><a href="#">Programming</a></td>
                                            <td><a href="#">View </a><a href="#"><font style={styleUpdate}> Update </font></a><a href="#"><font style={styleDelete}>Delete</font></a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><a href="#">Programming</a></td>
                                            <td><a href="#">View </a><a href="#"><font style={styleUpdate}> Update </font></a><a href="#"><font style={styleDelete}>Delete</font></a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><a href="#">Programming</a></td>
                                            <td><a href="#">View </a><a href="#"><font style={styleUpdate}> Update </font></a><a href="#"><font style={styleDelete}>Delete</font></a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
		);
	}
}

class Post extends React.Component {
	render() {
		return (
			<div className="col-md-12">
                        <div className="card card-plain">
                            <div className="header">
                                <h4 className="title">Posts</h4>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-hover">
                                    <thead>
                                        <th>ID</th>
                                    	<th>Name</th>
                                    	<th>Author</th>
                                    	<th>Category</th>
                                    	<th>Created at</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td><a href="#">How to find a link full hd</a></td>
                                        	<td>Noi Vu Duc</td>
                                        	<td>Programming</td>
                                        	<td>11/04/20117 16:00:00</td>
                                            <td><a href="#">View </a><a href="#"><font style={styleUpdate}> Update </font></a><a href="#"><font style={styleDelete}>Delete</font></a></td>
                                        </tr>
                                      <tr>
                                            <td>2</td>
                                            <td><a href="#">How to find a link full hd</a></td>
                                            <td>Noi Vu Duc</td>
                                            <td>Programming</td>
                                            <td>11/04/20117 16:00:00</td>
                                            <td><a href="#">View </a><a href="#"><font style={styleUpdate}> Update </font></a><a href="#"><font style={styleDelete}>Delete</font></a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
		);
	}
}

ReactDOM.render(<div className="wrapper">
    <Navigation/>
    <div className="main-panel">
		<HeaderBar/>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                   <Category/>
					<Post/>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="container-fluid">
                <p>Created by Noi ft Tien</p>
            </div>
        </footer>
    </div>
</div>, document.getElementById('root'));
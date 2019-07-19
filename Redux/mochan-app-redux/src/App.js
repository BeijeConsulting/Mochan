class App extends React.Component {
	componentDidMount(){
  	this.props.fetchPostsWithRedux()
  }
	render(){
	  return (
    	<ul>
			{
            this.props.posts && 
            this.props.posts.map((post) =>{
            return(
            <ul>
                <li> user id {post.id}</li>
                <li>Name: {post.name}</li>
                <li>Email: {post.email} </li>
                <li>Street name: {post.address.street}</li>
            </ul>
            )
            })
            }
            </ul>
        )
    }
}
export default App;
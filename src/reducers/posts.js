const posts = ( state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [action.post, ...state];
    case 'DELETE_POST':
      return state.filter( post => {
        if (post.id !== action.id)
          return post
      })
    case 'UPDATE_POST':
      return state.map( post => {
        if (post.id === action.post.id)
          return action.post
        return post
      })
    default:
      return state
  }
}

export default posts;
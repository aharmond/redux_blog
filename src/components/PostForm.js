import React from 'react';
import { connect, } from 'react-redux';
import { Form, TextArea} from 'semantic-ui-react';

class PostForm extends React.Component {
  state = { name: "", date: "", body: "", }

  componentDidMount() {
    if (this.props.post) {
      const { name, date, body, } = this.props.post
      this.setState({ name, date, body, })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
    const { name, date, body, } = this.state;
    e.preventDefault();
    if (this.props.post) {
      const { dispatch, toggleEdit } = this.props;
      const { id } = this.props.post
      const post = { name, date, body, id };
      dispatch({ type: 'UPDATE_POST', post, })
      toggleEdit()
    } else {
      const { dispatch, id } = this.props;
      const post = { name, date, body, id };
      dispatch({ type: 'ADD_POST', post, });
      dispatch({ type: 'INC_ID', })
      this.setState({ name: "", date: "", body: "", })
    }
  }

  render() {
    const { name, date, body, } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="Name"
          placeholder="Name"
          name="name"
          value={name}
          required
          onChange={this.handleChange}
        />
        <Form.Input
          label="Date"
          placeholder="Month and Day"
          name="date"
          value={date}
          required
          onChange={this.handleChange}
        />
        <Form.Input
          placeholder="Type your post here..."
          name="body"
          control={TextArea}
          value={body}
          required
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
};

const mapStateToProps = (state) => {
  return { id: state.nextId, }
}

export default connect(mapStateToProps)(PostForm);
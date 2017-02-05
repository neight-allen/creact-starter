var NewSkills = React.createClass({
  handleClick() {
    var name    = this.state.name;
    var details = this.state.details;
    console.log(name, details);
    axios.post('api/v1/skills.json',{
      skill:{ name: name, details:details }
    }).then(response => this.props.handleSubmit(response.data))
  },
  getInitialState() {
    return { name: '', details: '' }
  },
  render() {
    return (
      <div>
        <input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter name of skill' />
        <input onChange={ (e) => this.setState({ details: e.target.value }) } placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})

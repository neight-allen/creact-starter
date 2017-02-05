var Skill = React.createClass({
  getInitialState(){
    return {editable: false}
  },
  prepForEdit(){
    this.setState({editable: true})
  },
  handleEdit(){
    stateToUpdate = {}
    if(this.state.name) { stateToUpdate.name = this.state.name }
    if(this.state.details) { stateToUpdate.details = this.state.details }
    this.props.handleEdit(stateToUpdate);
    this.setState({editable: false});
  },
  handleLevelChange(delta) {
    var levels  = ['bad', 'halfbad', 'fantastic'];
    var currentLevel = levels.indexOf(this.props.skill.level)
    var newLevel = Math.min(Math.max(currentLevel + delta, 0), levels.length - 1)
    var newLevelName = levels[newLevel]
    
    this.props.handleEdit({level: newLevelName})
  },
  render(){
    var skill = this.props.skill

    if(this.state.editable) {
      return (
          <div>
            <input type='text'
              onChange={ e => this.setState({name: e.target.value}) }
              defaultValue={skill.name} />
            <p><strong>Level:</strong> {skill.level}</p>
            <textarea type='text'
              onChange={ e => this.setState({details: e.target.value}) }
              defaultValue={skill.details}>
            </textarea>
            <p>
              <button onClick={this.props.handleDelete}>Delete Skill</button>
              <button onClick={this.handleEdit}>Submit Change</button>
            </p>
          </div>
      )
    } else {
      return (
        <div>
          <h3>{skill.name}</h3>
          <p>
            <button onClick={this.handleLevelChange.bind(this,-1)}>&lt;</button>
            <strong>Level:</strong> {skill.level}
            <button onClick={this.handleLevelChange.bind(this,1)}>&gt;</button>
          </p>
          <p>{skill.details}</p>
          <p>
            <button onClick={this.props.handleDelete}>Delete Skill</button>
            <button onClick={this.prepForEdit}>Edit Skill</button>
          </p>
        </div>
      )
    }
  }
})

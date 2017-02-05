var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id)
  },
  handleEdit(skillId, skillState){
    this.props.handleEdit(skillId, skillState)
  },
  render() {
    var skills = this.props.skills.filter(
      skill => this.props.filter === 'all' || this.props.filter === skill.level
    ).map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill} handleDelete={this.handleDelete.bind(this, skill.id)} handleEdit={this.handleEdit.bind(this, skill.id)}/>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }
})

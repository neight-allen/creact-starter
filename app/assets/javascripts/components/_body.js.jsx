var Body = React.createClass({
  handleNewSkillSubmit(newSkill) {
    this.setState({skills: this.state.skills.concat(newSkill)})
  },
  handleSkillDelete(skillId) {
    axios.delete(`/api/v1/skills/${skillId}.json`)
      .then(() => {
        var newSkills = this.state.skills.filter(
          skill => skill.id != skillId
        )
        this.setState({ skills: newSkills })
      })
  },
  handleSkillEdit(skillId, updatedState){
    axios.put(`api/v1/skills/${skillId}.json`, {skill: updatedState})
      .then(response => {
        var newSkills = this.state.skills.map(skill => {
            if(skill.id === skillId) { Object.assign(skill, updatedState) }
            return skill
        })
        this.setState({ skills: newSkills })
      })
  },
  updateFilter(filterFor) {
    this.setState({filter: filterFor})
  },
  getInitialState() {
    return { skills: [], filter: 'all' }
  },
  componentDidMount() {
    axios.get('/api/v1/skills.json')
      .then( response => this.setState({skills: response.data}))
  },
  render() {
    return (
      <div>
        <NewSkills handleSubmit={this.handleNewSkillSubmit}/>
        <LevelFilter updateFilter={this.updateFilter} />
        <AllSkills
          skills={this.state.skills}
          filter={this.state.filter}
          handleDelete={this.handleSkillDelete}
          handleEdit={this.handleSkillEdit}/>
      </div>
    )
  }
})

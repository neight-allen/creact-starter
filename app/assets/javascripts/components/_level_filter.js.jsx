var LevelFilter = React.createClass({
  handleChange(e) {
    this.props.updateFilter(e.target.value)
  },
  render () {
    return(
      <div>
        <label>
          Filter By
        </label>
        <select className="form-control" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="bad">Bad</option>
          <option value="halfbad">Halfbad</option>
          <option value="fantastic">Fantastic</option>
        </select>
      </div>
    )
  }
})

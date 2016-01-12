class DefaultQuickSearch extends React.Component {
  constructor(props) {
    super(props);
    this._delayedChange = _.debounce(function (event, action) {
      action(event.target.value)
    }, 250);
  }

  componentDidUpdate() {
    if (this.props.searchClass == 'open') {
      React.findDOMNode(this.refs.searchInput).focus();
    }
  }

  render() {
    const { searchClass } = this.props;

    return (
      <div id="quick-search" className={searchClass}>
        <input
          type="text"
          ref='searchInput'
          onChange={(e) => this._handleChange(e)}
          className="search-field"
          placeholder="Search..."
          title="Search" />
        <div className="search-overlay">
          <a href="#" className="search-clear">
            <i className="icon ion-android-arrow-back"></i>
            Clear
          </a>
        </div>
        <div className="actions">
          <a className="toggle-drawer filter-toggle action-text" href="#!" title="Filter" data-target="filters">
            Advanced
          </a>
        </div>
      </div>
    )
  }

  _handleChange(e) {
    e.persist();
    this._delayedChange(e, this.props.searchAction);
  }
}

window.ResourceIndexComponents.DefaultQuickSearch = DefaultQuickSearch;

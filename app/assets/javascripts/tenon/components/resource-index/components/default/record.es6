class DefaultRecord extends React.Component {
  render() {
    const { edit_path, title, delete_path, onDelete } = this.props;
    return (
      <li className="panel record">
        <div className="record-details">
          <div className="expand-record">
            <p className="record-title">
              {title}
            </p>
            <p className="font-smallest">
              Posted on a Monday
            </p>
          </div>

          <div className="actions">
            <a className="action-icon" href={edit_path} title="Edit">
              <i className="material-icons">edit</i>
            </a>

            <a className="action-icon" href="#" onClick={onDelete} title='Delete'>
              <i className="material-icons">delete</i>
            </a>

            <a className="action-icon dropdown-button" href="#!" data-activates="record-dropdown">
              <i className="material-icons">more_vert</i>
            </a>

            <ul className="dropdown-content" id="record-dropdown">
              <li>
                <a href={edit_path} title="Edit">
                  <i className="material-icons">edit</i>
                  Test Edit
                </a>

                <a href="#" onClick={onDelete} title='Delete'>
                  <i className="material-icons">delete</i>
                  Test Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="record-expanded">
          <p className="color-primary">
            This is another title about things
          </p>
          <p className="font-smallest">
            <label className="color-light-fg">Notes:</label>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="actions">
            <a className="action-text" href={edit_path} title='Action Link'>
              Edit Link
            </a>
            <a className="action-text" href="#" title='Another Link'>
              Another Link
            </a>
          </div>
        </div>
      </li>
    )
  }
}

window.ResourceIndexComponents.DefaultRecord = DefaultRecord;

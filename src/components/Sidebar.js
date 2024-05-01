import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({users}) => (
    <aside id='sidebar' className='sidebar'>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

Sidebar.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number
    }).isRequired
    ).isRequired
}

export default Sidebar;
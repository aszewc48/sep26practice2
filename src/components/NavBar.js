import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>My example class-based component</h1>
                {this.props.children}
                <h1>Haha you're stuck between navbar h1 elements</h1>
            </div>
        )
    }
}

export default NavBar

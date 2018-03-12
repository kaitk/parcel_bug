import React from 'react'

class Root extends React.Component {
    state = { time: 0 } // This works

    render() {
        return 'hi from react ' + this.state
    }
}

export default Root
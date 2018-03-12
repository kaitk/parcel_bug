import React from 'react'

class Root extends React.Component {
  // This works with transform-class-properties,in .babelrc, but not without it!
  state = { status: 'works' };

  render() {
    return `Class properties demo ${this.state.status}`
  }
}

export default Root
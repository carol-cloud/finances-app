import React from 'react';

class FilterByDescription extends React.Component {
    
    render() {
        return <input onChange={this.props.handleChange} type='text'></input>
    }
}

export default FilterByDescription;
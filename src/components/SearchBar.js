import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    };

    onFormSubmit = (event)  => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        
        
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            placeholder="Ide írjá baszod"
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}    
                        />
                        {/*
                        <button style={{border: 'unset', background: 'unset'}}>
                        <div className="ui animated fade button" tabindex="0">
                        <div className="visible content">Ok csá</div>
                        <div className="hidden content">Jön a vidi</div>
                        </div>
                        </button>
                        */}      
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
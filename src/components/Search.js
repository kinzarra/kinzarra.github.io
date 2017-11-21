import React, { Component } from 'react';
import { Container, Search} from 'semantic-ui-react';
import _ from 'lodash';
import main from '../styles/Main';

var source = [];
export default class SearchBar extends Component {
    componentWillMount() {
        this.resetComponent();

    }

    constructor(props) {
      super(props);

      source = props.search;
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '', source: [] })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title+result.description)

            this.setState({
            isLoading: false,
            results: _.filter(source, isMatch),
            })
        }, 500)
    }

  render() {
      const { isLoading, value, results } = this.state

      return (
            <div>
                <Search size = 'mini'
                      loading={isLoading}
                      onSearchChange={this.handleSearchChange}
                      results={results}
                      value={value}
                  />
            </div>


      )
  }
}
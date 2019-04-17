import React, { PureComponent } from 'react'

export default class Link extends PureComponent {
    render() {
        return (
            <div className="linkContainer">
                <a href={this.props.url || ''}>{this.props.copy}</a>
            </div>
        )
    }
}

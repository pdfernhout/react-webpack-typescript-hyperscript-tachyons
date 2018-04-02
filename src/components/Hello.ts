import * as React from "react";
import * as h from "react-hyperscript";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return h("h1", `updated Hello from ${this.props.compiler} and ${this.props.framework}!`);
    }
}

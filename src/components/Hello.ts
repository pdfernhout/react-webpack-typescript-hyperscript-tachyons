import * as React from "react";
import * as h from "react-hyperscript";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
export class Hello extends React.Component<HelloProps, {name: string}> {
    state = {
        name: "world"
    };

    render() {
        return h("div", [
            h("h1", `HyperScript Hello from ${this.props.compiler} and ${this.props.framework}!`),
            h("div", [
                h("label", [
                    "Please enter your name",
                    h("input", {
                        value: this.state.name,
                        onChange: (event: {target: HTMLInputElement}) => {
                            // console.log("onChange:", event.target.value);
                            this.setState({name: event.target.value});
                        }
                    }),
                ]),
            ]),
            h("div", [
                "Hello, ",
                h("span.green", this.state.name),
                h("br"),
                "Your name has",
                h("strong.ma1", this.state.name.length),
                "characters in it."
            ]),
        ]);
    }
}

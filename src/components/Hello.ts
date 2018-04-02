import * as React from "react";
import * as h from "react-hyperscript";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
export class Hello extends React.Component<HelloProps, {name: string}> {
    state = {
        name: "world"
    };

    isNameTooShort() {
        return this.state.name.length < 3;
    }

    isNameTooLong() {
        return this.state.name.length > 7;
    }

    maybeWarn() {
        if (this.isNameTooShort() || this.isNameTooLong()) { return ".b--orange"; }
        return "";
    }

    render() {
        return h("div", [
            h("h1", `HyperScript Hello from ${this.props.compiler} and ${this.props.framework}!`),
            h("div", [
                h("label", [
                    "Please enter your name",
                    h("input.ml1.ba.bw1" + this.maybeWarn(), {
                        value: this.state.name,
                        onChange: (event: {target: HTMLInputElement}) => {
                            // console.log("onChange:", event.target.value);
                            this.setState({name: event.target.value});
                        }
                    }),
                ]),
            ]),
            h("div.h1.ma2", [
                this.isNameTooShort() && h("div.orange", "Your name is too short (< 3 characters)"),
                this.isNameTooLong() && h("div.orange", "Your name is too long (> 7 characters)"),
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

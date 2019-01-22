import React, { Component } from "react";

/*
Takes a list of argument objects with name, direction and related state variable.

Renders a form of inputs for each argument.
*/
class ArgumentList extends Component {

    state = {
        inArgs: false,
        outArgs: false,
        stateVariables: []
    }

    updateServiceDetails = () => {
        const argumentList = this.props.argumentList;
        console.log(argumentList)
        if ( argumentList.length ) {
            let inArgs = argumentList.filter( arg => {
                return arg.direction === "in"
            });
            let outArgs = argumentList.filter ( arg => {
                return arg.direction === "out"
            });
            this.setState({
                inArgs: inArgs,
                outArgs: outArgs
            });
        } else {
            if ( argumentList.direction === "in") {
                this.setState({
                    inArgs: argumentList,
                    outArgs: false
                })
            } else {
                this.setState({
                    inArgs: false,
                    outArgs: argumentList
                })
            }
        }

    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
              [name]: value
            }
        });
    }

    getTypeValue = stateVariableName => {
        const stateVariables = this.props.stateVariables;
        console.log(stateVariables)
        if (stateVariables && stateVariables.length) {
            try {
                return stateVariables.filter( stateVariable => {
                    return stateVariable.name.toLowerCase() === stateVariableName
                })[0].dataType;
            } catch {
                return "text"
            }

        } else if (stateVariables){
            return stateVariables.dataType
        } else {
            return "text";
        }

    }

    renderOneArgument = arg => {
        if (arg.relatedStateVariable) {
            const argName = arg.name;
            const RSV = arg.relatedStateVariable.toLowerCase();
            const typeValue = this.getTypeValue(RSV)
            return (
                <label key={argName}>
                    {argName}
                    <input
                        name={argName}
                        type={typeValue}
                        value={this.state[argName]}
                        onChange={this.changeHandler}
                    />
                    <br />
                </label>
            )
        } else if (arg.direction) {
            const argName = arg.name;
            return (
                <label key={argName}>
                    {argName}
                    <input
                        name={argName}
                        value={this.state[argName]}
                        onChange={this.changeHandler}
                    />
                </label>
            )
        } else {
            return (
                <h2>No arguments for this action</h2>
            )
        }

    }

    renderArguments = args => {
        if ( args.length ) {
            return args.map(arg => {
                return this.renderOneArgument(arg)
            })
        } else {
            return this.renderOneArgument(args)
        }
    }

    componentDidMount = () => {
        this.updateServiceDetails();
    }

    componentDidUpdate = prevprops => {
        if (this.props.argumentList !== prevprops.argumentList) {
            this.updateServiceDetails();
        }
    }

    render () {
        const inArgs = this.state.inArgs;
        //console.log(inArgs);
        const outArgs = this.state.outArgs;
        //console.log(outArgs);
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Input</h1>
                { inArgs
                    ? this.renderArguments(inArgs)
                    : <h2>No input for this action.</h2>
                }
                <h1>Output</h1>
                { outArgs
                    ? this.renderArguments(outArgs)
                    : <h2>No output for this action.</h2>
                }
                <br />
                <input type="submit" />

            </form>
        )
    }
}

export default ArgumentList;
/*

*/

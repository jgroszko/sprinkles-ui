import React from "react";
import MyComponent from "../../src/components/MyComponent";

/*
Dummy spec -- for reference
*/
describe("MyComponent", function() {
  this.header(`## A Simple Component`); // Markdown.

  before(() => {
    // Runs when the Suite loads.  Use this to host your component-under-test.
    this.load( <MyComponent color="blue"/> );
  });

  it("red", () => this.props({ color: "red" }));
  it("green", () => this.props({ color: "green" }));
  it("blue", () => this.props({ color: "blue" }));


  /**
   * Introductory footer text (markdown).
   */
  this.footer(`
  ### Getting Started
  This is a sample React component that has been copied into your module.
  Take a look within the \`/src\` folder to edit the
  \`/components/MyComponent.jsx\` file.  It's hosted in isolation so you
  can build with precision, focusing on just one level of complexity at
  a time.

  Drill into the suite by clicking on "MyComponent" in the left-hand index.

  The "red/green/blue" options are the result of \`"it"\`
  test statements in the \`MyComponent.spec.jsx\` file:

      // MyComponent.spec.jsx
      it("red",   () => this.props({ color: "red" }));
      it("green", () => this.props({ color: "green" }));
      it("blue",  () => this.props({ color: "blue" }));

  **Try clicking on them.**  Each click invokes the \`"it"\` statement's function.
  Now you have the tools to manipulate your component in precise and useful
  ways while you are crafting it.

  At the bottom-left you can see the component's API as defined by it's PropTypes.

  ### Next Steps
  Play around extending this component or get to work creating your own amazing components!
  For more strategies on using the UIHarness see the [docs](https://github.com/philcockfield/ui-harness/blob/master/docs/index.md).
  `);


});
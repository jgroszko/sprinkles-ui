/* eslint func-names: "off" */
/* eslint no-console: "off" */

import React from "react";
import ButtonGroup from "../../src/components/ButtonGroup";
import Button from "../../src/components/Button";

describe("ButtonGroup", function () {
  this.header(`
  ## ButtonGroup
  `); // Markdown.

  before(() => {
    const handleClick = (item) => {
      this.props({ selectedButton: item });
    };
    // Runs when the Suite loads.  Use this to host your component-under-test.
    this.load(
      <ButtonGroup onClick={handleClick}>
        <Button buttonKey={"1"} text={"Button 1"} />
        <Button buttonKey={"2"} text={"Button 2"} />
        <Button buttonKey={"3"} text={"Button 3"} />
      </ButtonGroup>
    );
  });

  it("Select Button 1", () => this.props({ selectedButton: "1" }));
  it("Select Button 2", () => this.props({ selectedButton: "2" }));
  it("Select Button 3", () => this.props({ selectedButton: "3" }));
  it("Select No Button", () => this.props({ selectedButton: undefined }));
  it("Danger Button", () => this.props({ type: "danger" }));
  it("Warning Button", () => this.props({ type: "warning" }));
  it("Success Button", () => this.props({ type: "success" }));
  it("Info Button", () => this.props({ type: "info" }));
  it("Primary Button", () => this.props({ type: "primary" }));
  it("Secondary (Default) Button", () => this.props({ type: "secondary" }));

  /**
   * Documentation (Markdown)
   */
  this.footer(`
  ### Button

  An Button Element

  #### API

  - coming soon

  `);
});

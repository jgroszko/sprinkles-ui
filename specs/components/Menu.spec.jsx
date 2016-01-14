import React from "react";
import loremIpsum from "lorem-ipsum";
import Menu from "../../src/components/Menu";


describe("Menu", function() {
  this.header(`## Menu`); // Markdown.

  before(() => {
    let menuItems = [
      {
        key: "1",
        text: "Item 1",
        selected: false
      },
      {
        key: "2",
        text: "Item 2",
        selected: true
      }
    ];

    function handleItemClick(item) {
      console.log("item clicked: ", item);
    }

    // Runs when the Suite loads.  Use this to host your component-under-test.
    this.load(
      <Menu
        menuItems={ menuItems }
        handleItemClick={ handleItemClick }
      />
    );
  });

  it("Update Menu Items", () => this.props({
    menuItems: [
      {
        key: "1",
        text: loremIpsum(),
        selected: false
      },
      {
        key: "2",
        text: loremIpsum(),
        selected: true
      }
    ]
  }));

  //
  // it("Style 1", () => this.props({ style: {}}));
  // it("Style 2", () => this.props({ style: {background: "#4183F0", color: "white"}}));

  /**
   * Documentation (Markdown)
   */
  this.footer(`
  ### Menu

  A list menu items with a selected and unselected style. Passes click events to parents.
  `);
});

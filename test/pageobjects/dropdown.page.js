const Page = require("./page");

class DropdownPage extends Page {
  get dropdownSelector() {
    return $("#dropdown");
  }

  open() {
    return super.open("dropdown");
  }
}

module.exports = new DropdownPage();

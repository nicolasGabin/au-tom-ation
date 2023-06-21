const Page = require("./page");

class AddRemove extends Page {
  get addedElements() {
    return $$("#elements>button");
  }

  get addButton() {
    return $("div.example>button");
  }

  async click() {
    await this.click();
  }

  open() {
    return super.open("add_remove_elements/");
  }
}

module.exports = new AddRemove();

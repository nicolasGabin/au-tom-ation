const Page = require("./page");

class checkboxPage extends Page {
  get checkboxForm() {
    return $("#checkboxes");
  }

  get firstBox() {
    return $("#checkboxes input:nth-of-type(1)");
  }

  get secondBox() {
    return $("#checkboxes input:nth-of-type(2)");
  }

  async click() {
    await this.click();
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("checkboxes");
  }
}

module.exports = new checkboxPage();

const Page = require("./page");

class DynamicPage extends Page {
  get rows() {
    return $$("#content.large-centered>div.row");
  }

  get rowImages() {
    return $$("#content.large-centered>div.row>img");
  }

  get rowTexts() {
    return $$("#content.large-centered>div.row>div.large-10 columns");
  }

  async saveTexts() {
    let savedTexts = [];
    this.rowTexts.forEach((element) => {
      savedTexts.push(element.getText());
    });
    return savedTexts;
  }

  open() {
    return super.open("dynamic_content");
  }
}

module.exports = new DynamicPage();

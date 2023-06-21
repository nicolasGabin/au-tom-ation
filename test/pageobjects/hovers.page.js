const Page = require("./page");

class Hovers extends Page {
  open() {
    return super.open("hovers");
  }
}

module.exports = new Hovers();

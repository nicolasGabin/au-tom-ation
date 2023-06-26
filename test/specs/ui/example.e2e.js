const LoginPage = require("../../pageobjects/login.page");
const SecurePage = require("../../pageobjects/secure.page");
const CheckboxPage = require("../../pageobjects/checkboxes.page");
const DropdownPage = require("../../pageobjects/dropdown.page");
const DynamicPage = require("../../pageobjects/dynamic.page");
const AddRemove = require("../../pageobjects/addremove.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("should not login with invalid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("fakename", "FakePassword!");
    await expect(LoginPage.flashAlert).toBeExisting();
    await expect(LoginPage.flashAlert).toHaveTextContaining(
      "Your username is invalid!"
    );
  });
});

describe("My checkboxes page", () => {
  it("should have a form with checkboxes", async () => {
    await CheckboxPage.open();
    await expect(CheckboxPage.checkboxForm).toBeExisting();
  });
  it("should check an unchecked checkbox when it is clicked", async () => {
    await CheckboxPage.open();
    await expect(CheckboxPage.checkboxForm).toBeExisting();
    await expect(CheckboxPage.firstBox).toBeExisting();
    await CheckboxPage.firstBox.click();
    await expect(CheckboxPage.firstBox).toBeSelected();
  });
  it("should uncheck a checked checkbox when it is clicked", async () => {
    await CheckboxPage.open();
    await expect(CheckboxPage.checkboxForm).toBeExisting();
    await expect(CheckboxPage.secondBox).toBeExisting();
    await expect(CheckboxPage.secondBox).toBeSelected();
    await CheckboxPage.secondBox.click();
    await expect(CheckboxPage.secondBox).not.toBeSelected();
  });
});

describe("My dropdown page", () => {
  it("should contain a dropdown selector", async () => {
    await DropdownPage.open();
    await expect(DropdownPage.dropdownSelector).toBeExisting();
  });
  it("should start with nothing selected", async () => {
    await DropdownPage.open();
    await expect(DropdownPage.dropdownSelector).toBeExisting();
    await expect(DropdownPage.dropdownSelector).not.toHaveValue();
  });
  it("should be able to select the first option", async () => {
    await DropdownPage.open();
    await expect(DropdownPage.dropdownSelector).toBeExisting();
    await DropdownPage.dropdownSelector.selectByAttribute("value", "1");
    await expect(DropdownPage.dropdownSelector).toHaveValue("1");
  });
  it("should be able to select the second option", async () => {
    await DropdownPage.open();
    await expect(DropdownPage.dropdownSelector).toBeExisting();
    await DropdownPage.dropdownSelector.selectByAttribute("value", "2");
    await expect(DropdownPage.dropdownSelector).toHaveValue("2");
  });
});
describe("My dynamic content page", () => {
  it("should contain three rows", async () => {
    await DynamicPage.open();
    await expect(DynamicPage.rows).toBeExisting();
    await expect(DynamicPage.rows).toBeElementsArrayOfSize(3);
  });
  it("should have an image in each row", async () => {
    await DynamicPage.open();
    await DynamicPage.rowImages.forEach((element) => {
      expect(element.toBeExisting());
    });
  });
  it("should contain text in each row", async () => {
    await DynamicPage.open();
    await DynamicPage.rowTexts.forEach((element) => {
      expect(element.toBeExisting());
    });
  });
  it("should change text on refresh", async () => {
    await DynamicPage.open();
    let firstTexts = DynamicPage.saveTexts();
    await browser.refresh();
    let secondTexts = DynamicPage.saveTexts();
    await expect(firstTexts == secondTexts).not.toBeTruthy();
  });
});

describe("My add/remove elements page", () => {
  it("should start with no elements added", async () => {
    await AddRemove.open();
    await expect(AddRemove.addedElements).toBeElementsArrayOfSize(0);
  });
  it("should contain an 'Add Element' button", async () => {
    await AddRemove.open();
    await expect(AddRemove.addButton).toBeExisting();
  });
  it("should add an element when 'Add Element' is clicked", async () => {
    await AddRemove.open();
    await AddRemove.addButton.click();
    await expect(AddRemove.addedElements).toBeElementsArrayOfSize(1);
  });
  it("should delete added elements when their 'Delete' button is clicked", async () => {
    await AddRemove.open();
    await AddRemove.addButton.click();
    await AddRemove.addedElements[0].click();
    await expect(AddRemove.addedElements).toBeElementsArrayOfSize(0);
  });
});

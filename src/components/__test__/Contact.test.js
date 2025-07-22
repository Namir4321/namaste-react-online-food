import { render, screen } from "@testing-library/react";
import Contact from "../Pages/Contact";
import "@testing-library/jest-dom";
describe("contact us page test case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  // we can use the describe it has nothing too do with the
  // test what it does it create the group of the test
  // and feels good to read like describe it and then
  //  the string
  it("should load contact us component", () => {
    // render is the method to see the react
    // render the page or not
    render(<Contact />);

    //   the screen the react-testing-libaray feature
    // getByRole is the method to get the type
    // of text/html it is like there are many
    // type placeholder,button and many more
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("should be button component named submit", () => {
    render(<Contact />);
    //   it checking by role of the button html
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should load input inside contact component", () => {
    render(<Contact />);
    //   it checking wheather there is a placeholder
    // which the same text
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  it("should load the two input boxes", () => {
    render(<Contact />);
    // testbox means that the whather there is the
    // input box or not
    const input = screen.getAllByRole("textbox");
    //   console.log(input.length)
    // asserction
    //   to be is the number whaat you expect in
    //  there like number of input box is 2
    expect(input.length).toBe(2);
  });
});
// we can also writ ein this way the test cases
//   test("should load contact us component", () => {
// render is the method to see the react
// render the page or not
//     render(<Contact />);

//   the screen the react-testing-libaray feature
// getByRole is the method to get the type
// of text/html it is like there are many
// type placeholder,button and many more
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
//   });
//   test("should be button component named submit", () => {
//     render(<Contact />);
//   it checking by role of the button html
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
//   });
//   test("should load input inside contact component", () => {
//     render(<Contact />);
//   it checking wheather there is a placeholder
// which the same text
//     const inputName = screen.getByPlaceholderText("name");
//     expect(inputName).toBeInTheDocument();
//   });
//   test("should load the two input boxes", () => {
//     render(<Contact />);
// testbox means that the whather there is the
// input box or not
//     const input = screen.getAllByRole("textbox");
//   console.log(input.length)
// asserction
//   to be is the number whaat you expect in
//  there like number of input box is 2
//     expect(input.length).toBe(2);
//   });

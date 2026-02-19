// Form.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./FormTest";

test("input field updates correctly", () => {
  render(<Form onSubmit={() => {}} />);

  const input = screen.getByPlaceholderText("Enter name");
  fireEvent.change(input, { target: { value: "Alice" } });

  expect(input.value).toBe("Alice");
});

test("submit button calls onSubmit with input value", () => {
  const handleSubmit = jest.fn(); // mock function
  render(<Form onSubmit={handleSubmit} />);

  const input = screen.getByPlaceholderText("Enter name");
  const button = screen.getByText("Submit");

  fireEvent.change(input, { target: { value: "Bob" } });
  fireEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith("Bob");
});



////button file test

// import { render, screen, fireEvent } from "@testing-library/react";
// import Counter from "./Counter";

// test("renders initial count", () => {
//   render(<Counter />);
  
//   const countElement = screen.getByTestId("count-value");
//   expect(countElement).toHaveTextContent("Count: 0");
// });

// test("increments the count when button is clicked", () => {
//   render(<Counter />);
  
//   const incrementButton = screen.getByTestId("increment-btn");
//   const countElement = screen.getByTestId("count-value");

//   fireEvent.click(incrementButton);

//   expect(countElement).toHaveTextContent("Count: 1");
// });

// test("decrements the count when button is clicked", () => {
//   render(<Counter />);
  
//   const decrementButton = screen.getByTestId("decrement-btn");
//   const countElement = screen.getByTestId("count-value");

//   fireEvent.click(decrementButton);

//   expect(countElement).toHaveTextContent("Count: -1");
// });

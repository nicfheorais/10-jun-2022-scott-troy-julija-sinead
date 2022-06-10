import { render, screen } from "@testing-library/react";
import App from "./App.js";

it("should render the App Component", () => {
    render(<App />);
    screen.debug();
    //expect App component to be visible
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

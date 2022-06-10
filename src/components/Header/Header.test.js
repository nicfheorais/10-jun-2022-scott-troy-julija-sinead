import { render, screen } from "@testing-library/react";
import Header from "./Header.js";

it("should render the Header Component", () => {
    render(<Header />);
    screen.debug();
    //expect header component to be visible
});

import { render, screen } from "@testing-library/react";
import Footer from "./Footer.js";

it("should render the Footer Component", () => {
    render(<Footer />);
    screen.debug();
    //expect footer component to be visible
});

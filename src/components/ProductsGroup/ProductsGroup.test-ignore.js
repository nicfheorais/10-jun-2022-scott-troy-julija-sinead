import { render, screen } from "@testing-library/react";
import ProductsGroup from "./ProductsGroup.js";

it("should render the ProductsGroup Component", () => {
    render(<ProductsGroup />);
    screen.debug();
    //expect productgroup component to be visible
});

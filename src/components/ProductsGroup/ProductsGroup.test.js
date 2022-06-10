import { render, screen } from "@testing-library/react";
import ProductsGroup from "./ProductsGroup.js";

it("should print the ProductsGroup component", () => {
    render(<ProductsGroup />);
    //screen.debug();
});

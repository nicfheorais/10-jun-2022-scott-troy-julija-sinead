import { render, screen } from "@testing-library/react";
import Product from "./Product.js";

describe("Basic Render Test", () => {
    it("renders the Product Component", () => {
        render(<Product />);
        //expect product component to be visible
    });
});
describe("Images Test", () => {
    it("renders the alt text correctly", () => {
        const expectedAltText = "ProductImage";
        render(<Product />);
        //expect();
    });
});

describe("Product Heading Tests", () => {
    it("renders HEADLINE header", () => {
        render(<Product />);
        //expect(screen.getByText("HEADLINE")).toBeInTheDocument();
    });
    it("renders PRODUCT header", () => {
        render(<Product />);
        //expect(screen.getByText("PRODUCT")).toBeInTheDocument();
    });
    it("renders CATEGORY header", () => {
        render(<Product />);
        //expect(screen.getByText("CATEGORY")).toBeInTheDocument();
    });
    it("renders PRICE header", () => {
        render(<Product />);
        //expect(screen.getByText("PRICE")).toBeInTheDocument();
    });
});

//     const operatorButtons = ["+", "-", "*", "/", "="];
//     test.each(operatorButtons)("renders operator button %s", (operator) => {
//         render(<Product />);
//         const button = screen.getByText(operator);
//         expect(button).toBeInTheDocument();
//     });

import { render, screen } from "@testing-library/react";
import Nav from "./Nav.js";

it("should render the Nav Component", () => {
    render(<Nav />);
    screen.debug();
    //expect Nav component to be visible
});

describe("Nav Bar Link Text Tests", () => {
    it("renders HOME link", () => {
        render(<Nav />);
        expect(screen.getByText("HOME")).toBeInTheDocument();
    });
    it("renders SHOP link", () => {
        render(<Nav />);
        expect(screen.getByText("SHOP")).toBeInTheDocument();
    });
    it("renders ABOUT link", () => {
        render(<Nav />);
        expect(screen.getByText("ABOUT")).toBeInTheDocument();
    });
    it("renders CONTACT link", () => {
        render(<Nav />);
        expect(screen.getByText("CONTACT")).toBeInTheDocument();
    });
});

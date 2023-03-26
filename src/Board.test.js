import React from "react";
import Board from "./Board";
import { render } from "@testing-library/react"

// Smoke test

it("renders", () => {
    render(<Board />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />)
    expect(asFragment()).toMatchSnapshot()
})

it("shows you won message", () => {
    const {getByText} = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />)
    expect(getByText("You won!")).toBeTruthy()
})
import React from "react";
import Board from "./Board";
import { render } from "@testing-library/react"

// Smoke test

it("renders", () => {
    render(<Board />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<Board />)
    expect(asFragment()).toMatchSnapshot()
})
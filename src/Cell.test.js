import React from "react";
import Cell from "./Cell";
import { render } from "@testing-library/react"

// Smoke test

it("renders", () => {
    render(<Cell />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<Cell />)
    expect(asFragment()).toMatchSnapshot()
})
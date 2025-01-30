// @vitest-environment jsdom

import { fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Register from "../components/Register";

describe("Register Component", () => {
    it("renders the registration form", () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        expect(document.getElementById("firstName") !== null).toBeTruthy();
        expect(document.getElementById("lastName") !== null).toBeTruthy();
        expect(document.getElementById("email") !== null).toBeTruthy();
        expect(document.getElementById("password") !== null).toBeTruthy();
    });

    it("submits the form successfully", async () => {
        axios.post = vi.fn().mockResolvedValue({ data: { token: "test-token" } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        // @ts-ignore
        fireEvent.change(document.getElementById("firstName"), { target: { value: "test-first-name" } });
        // @ts-ignore
        fireEvent.change(document.getElementById("lastName"), { target: { value: "test-last-name" } });
        // @ts-ignore
        fireEvent.change(document.getElementById("email"), { target: { value: "test-email" } });
        // @ts-ignore
        fireEvent.change(document.getElementById("password"), { target: { value: "test-password" } });

        // @ts-ignore
        fireEvent.submit(document.querySelector("form"));
    });

    it("handles registration error", async () => {
        axios.post = vi.fn().mockRejectedValue({ response: { data: { message: "Registration failed" } } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
    });
});

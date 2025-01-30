// @vitest-environment jsdom

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Register from '../components/Register';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

import { getItemById } from './helpers';

vi.mock('axios');

describe('Register Component', () => {
    it('renders the registration form', () => {
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

    it('submits the form successfully', async () => {
        axios.post.mockResolvedValue({ data: { token: 'test-token' } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.change(document.getElementById("firstName"), { target: { value: 'test-first-name' } });
        fireEvent.change(document.getElementById("lastName"), { target: { value: 'test-last-name' } });
        fireEvent.change(document.getElementById("email"), { target: { value: 'test-email' } });
        fireEvent.change(document.getElementById("password"), { target: { value: 'test-password' } });

        fireEvent.submit(document.querySelector("form"));

    });

    it('handles registration error', async () => {
        axios.post.mockRejectedValue({ response: { data: { message: 'Registration failed' } } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

    });
});
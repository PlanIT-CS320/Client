// @vitest-environment jsdom

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Register from '../components/Register';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

vi.mock('axios');

describe('Register Component', () => {
    it('renders the registration form', () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        //expect(screen.getByText('Register')).toBeInTheDocument();
        expect(screen.getByLabelText('First name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last name')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('submits the form successfully', async () => {
        axios.post.mockResolvedValue({ data: { token: 'test-token' } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.change(screen.getBy(('First name', {selector: "h2"}), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

        fireEvent.click(screen.getByText('Register'));

        expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/users/register', {
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john@example.com',
            password: 'password123',
        });
    });

    it('handles registration error', async () => {
        axios.post.mockRejectedValue({ response: { data: { message: 'Registration failed' } } });

        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

        fireEvent.click(screen.getByText('Register'));

        await screen.findByText('Registration failed');
    });
});
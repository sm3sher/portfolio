import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { sendMessage } from '@/app/lib/actions';
import ContactForm from '@/app/ui/contact-form';

vi.mock(import('@/app/lib/actions'));

describe('ContactForm', () => {
  let user: UserEvent;
  const sendMessageMock = (sendMessage as Mock).mockImplementation(vi.fn());

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    cleanup();
  });

  it('shows validation errors when fields are empty', async () => {
    render(<ContactForm />);

    await user.click(screen.getByText('Send Message'));

    expect(screen.getByText('Please enter your name')).toBeInTheDocument();
    expect(
      screen.getByText('The email provided is invalid'),
    ).toBeInTheDocument();
    expect(screen.getByText('Please enter your message')).toBeInTheDocument();
    expect(screen.getByText('You must agree to proceed')).toBeInTheDocument();
  });

  it('displays error messages when invalid data is entered', async () => {
    render(<ContactForm />);

    await user.type(
      screen.getByPlaceholderText('Email address'),
      'invalid-email',
    );
    await user.tab();

    expect(
      screen.getByText('The email provided is invalid'),
    ).toBeInTheDocument();
  });

  it('calls sendMessage with form data when valid', async () => {
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(
      screen.getByPlaceholderText('Email address'),
      'john@example.com',
    );
    await user.type(screen.getByPlaceholderText('Message'), 'Hello there!');
    await user.click(screen.getByLabelText(/I have taken note/i));
    await user.click(screen.getByText('Send Message'));

    expect(sendMessageMock).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      company: '',
      message: 'Hello there!',
      consent: true,
    });
  });
});

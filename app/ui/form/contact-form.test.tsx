import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ContactFormData, ValidationMessages } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import ContactForm from '@/app/ui/form/contact-form';
import { Form } from '@/app/lib/contentful/generated/sdk';
import nodemailerClient from '@/app/lib/nodemailer/client';

const FAIL_EMAIL = 'fail@test.com';

const mocks = vi.hoisted(() => {
  const insert = vi.fn((data) => ({
    select: vi.fn(() => ({
      single: vi.fn(() =>
        Promise.resolve({
          data: { verification_token: 'mock-token' },
          error: data.email === FAIL_EMAIL ? 'Insert failed' : null,
        }),
      ),
    })),
  }));

  const from = vi.fn(() => ({
    insert,
  }));

  const supabaseClient = vi.fn(() => ({
    from,
  }));

  const sendMail = vi.fn();

  const nodemailerClient = vi.fn(() => ({ sendMail }));

  return {
    supabaseClient,
    nodemailerClient,
  };
});

vi.mock('@/app/lib/supabase/client', () => ({
  default: mocks.supabaseClient,
}));

vi.mock('@/app/lib/nodemailer/client', () => ({
  default: mocks.nodemailerClient,
}));

vi.mock('@/app/lib/nodemailer/template/verify-template', () => ({
  default: vi.fn(),
}));

const content = {
  labels: {
    name: 'Name',
    email: 'Email',
    role: 'Job Title & Company (Optional)',
    message: 'Project Details',
  },
  emailVerificationTitle: 'Check your email',
  emailResendButtonLabel: 'Resend Email',
  errorTitle: 'Something went wrong!',
  errorButtonLabel: 'Try again',
};

const validFormData = {
  name: 'Roman Jumatov',
  email: 'roman@jumatov.com',
  role: 'Freelance Software Developer',
  message: 'Hey there, I have something in mind.',
  consent: true,
};

describe('ContactForm', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    render(
      <NextIntlClientProvider locale={routing.defaultLocale}>
        <ContactForm content={content as Form} />
      </NextIntlClientProvider>,
    );
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('shows server validation errors on empty submit', async () => {
    await user.click(screen.getByRole('button'));

    screen.getByText(ValidationMessages.nameRequired);
    screen.getByText(ValidationMessages.emailInvalid);
    screen.getByText(ValidationMessages.messageRequired);
    screen.getByText(ValidationMessages.consentRequired);
  });

  it('shows client validation errors on empty value change', async () => {
    await fillForm(validFormData);
    await clearForm();

    screen.getByText(ValidationMessages.nameRequired);
    screen.getByText(ValidationMessages.emailInvalid);
    screen.getByText(ValidationMessages.messageRequired);
    screen.getByText(ValidationMessages.consentRequired);
  });

  it('shows client validation messages when max length is reached', async () => {
    const formData = {
      name: 'a'.repeat(101),
      email: 'a'.repeat(92).concat('@test.com'),
      role: 'A'.repeat(151),
      message: 'A'.repeat(1001),
      consent: false,
    };
    await fillForm(formData);
    await user.tab();

    screen.getByText(ValidationMessages.nameMaxLength);
    screen.getByText(ValidationMessages.emailMaxLength);
    screen.getByText(ValidationMessages.roleMaxLength);
    screen.getByText(ValidationMessages.messageMaxLength);
  });

  it('calls supabase client insert with form data when valid', async () => {
    await fillForm(validFormData);
    await user.click(screen.getByRole('button'));

    const mockClient = supabaseClient();
    const mockInsert = mockClient.from('contacts').insert;
    expect(mockInsert).toHaveBeenNthCalledWith(1, validFormData);
  });

  it('shows email verification card on valid form submission', async () => {
    await fillForm(validFormData);
    await user.click(screen.getByRole('button'));

    screen.getByText(content.emailVerificationTitle);
  });

  it('sends another email on email resend', async () => {
    await fillForm(validFormData);
    await user.click(screen.getByRole('button'));

    const mockClient = nodemailerClient();
    const mockSend = mockClient.sendMail;
    expect(mockSend).toHaveBeenCalledOnce();

    await user.click(screen.getByText(content.emailResendButtonLabel));
    expect(mockSend).toHaveBeenCalledTimes(2);
  });

  it('shows error status card on database error', async () => {
    await fillForm({ ...validFormData, email: FAIL_EMAIL });
    await user.click(screen.getByRole('button'));

    screen.getByText(content.errorTitle);
  });

  it('calls supabase client again on retry', async () => {
    await fillForm({ ...validFormData, email: FAIL_EMAIL });
    await user.click(screen.getByRole('button'));

    const mockClient = supabaseClient();
    const mockInsert = mockClient.from('contacts').insert;
    expect(mockInsert).toHaveBeenCalledOnce();

    await user.click(screen.getByText(content.errorButtonLabel));
    expect(mockInsert).toHaveBeenCalledTimes(2);
  });

  const fillForm = async (formData: ContactFormData) => {
    const { name, email, role, message, consent } = formData;
    await user.type(screen.getByLabelText(content.labels.name), name);
    await user.type(screen.getByLabelText(content.labels.email), email);
    if (role) {
      await user.type(screen.getByLabelText(content.labels.role), role);
    }
    await user.type(screen.getByLabelText(content.labels.message), message);
    if (consent) {
      await user.click(screen.getByRole('checkbox'));
    }
  };

  const clearForm = async () => {
    await user.clear(screen.getByLabelText(content.labels.name));
    await user.clear(screen.getByLabelText(content.labels.email));
    await user.clear(screen.getByLabelText(content.labels.role));
    await user.clear(screen.getByLabelText(content.labels.message));
    await user.click(screen.getByRole('checkbox', { checked: true }));
  };
});

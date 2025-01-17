import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ContactFormData, ValidationMessages } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import ContactForm from '@/app/ui/form/contact-form';
import { Form } from '@/app/lib/contentful/generated/sdk';

const FAIL_EMAIL = 'fail@test.com';

vi.mock('@/app/lib/supabase/client', () => {
  const mockInsert = vi.fn((data) =>
    Promise.resolve(
      data.email === FAIL_EMAIL ? { error: 'Insert failed' } : { error: null },
    ),
  );
  return {
    default: vi.fn(() => ({
      from: vi.fn(() => ({
        insert: mockInsert,
      })),
    })),
  };
});

const content = {
  placeholder: {
    name: 'Name',
    email: 'Email',
    role: 'Job title, company name (optional)',
    message: 'Message',
  },
  successTitle: 'Message Sent!',
  successButtonLabel: 'Send another Message',
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

  it('shows success status card on valid form submission', async () => {
    await fillForm(validFormData);
    await user.click(screen.getByRole('button'));

    screen.getByText(content.successTitle);
  });

  it('clears form on sending another message', async () => {
    await fillForm(validFormData);
    await user.click(screen.getByRole('button'));

    await user.click(screen.getByText(content.successButtonLabel));

    expect(
      screen.getByRole('textbox', { name: content.placeholder.name }),
    ).toBeEmptyDOMElement();
    expect(
      screen.getByRole('textbox', { name: content.placeholder.email }),
    ).toBeEmptyDOMElement();
    expect(
      screen.getByRole('textbox', { name: content.placeholder.role }),
    ).toBeEmptyDOMElement();
    expect(
      screen.getByRole('textbox', { name: content.placeholder.message }),
    ).toBeEmptyDOMElement();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
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
    await user.type(
      screen.getByRole('textbox', { name: content.placeholder.name }),
      formData.name,
    );
    await user.type(
      screen.getByRole('textbox', { name: content.placeholder.email }),
      formData.email,
    );
    if (formData.role) {
      await user.type(
        screen.getByRole('textbox', { name: content.placeholder.role }),
        formData.role,
      );
    }
    await user.type(
      screen.getByRole('textbox', { name: content.placeholder.message }),
      formData.message,
    );
    if (formData.consent) {
      await user.click(screen.getByRole('checkbox'));
    }
  };

  const clearForm = async () => {
    await user.clear(
      screen.getByRole('textbox', { name: content.placeholder.name }),
    );
    await user.clear(
      screen.getByRole('textbox', { name: content.placeholder.email }),
    );
    await user.clear(
      screen.getByRole('textbox', { name: content.placeholder.role }),
    );
    await user.clear(
      screen.getByRole('textbox', { name: content.placeholder.message }),
    );
    await user.click(screen.getByRole('checkbox', { checked: true }));
  };
});

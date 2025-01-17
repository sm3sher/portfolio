import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ContactFormData, ValidationMessages } from '@/app/lib/schemas';
import supabaseClient from '@/app/lib/supabase/client';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import ContactForm from '@/app/ui/form/contact-form';
import { Form } from '@/app/lib/contentful/generated/sdk';

vi.mock('@/app/lib/supabase/client', () => {
  const mockInsert = vi.fn(() => Promise.resolve({ error: null }));
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

  it('shows validation errors when fields are empty', async () => {
    await user.click(screen.getByRole('button'));

    screen.getByText(ValidationMessages.nameRequired);
    screen.getByText(ValidationMessages.emailInvalid);
    screen.getByText(ValidationMessages.messageRequired);
    screen.getByText(ValidationMessages.consentRequired);
  });

  it('displays error messages when too much data is entered', async () => {
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
    const formData = {
      name: 'Roman Jumatov',
      email: 'roman@jumatov.com',
      role: 'Freelance Software Developer',
      message: 'Hey there, I have something in mind.',
      consent: true,
    };

    await fillForm(formData);

    await user.click(screen.getByRole('button'));

    const mockClient = supabaseClient();
    const mockInsert = mockClient.from('contacts').insert;
    expect(mockInsert).toHaveBeenCalledWith(formData);
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
});

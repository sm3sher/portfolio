type Props = {
  mail?: string | null;
};

export default function MailLink({ mail }: Props) {
  return (
    <a
      href={`mailto:${mail}`}
      className="underline-effect text-(--highlight-link)"
    >
      {mail}
    </a>
  );
}

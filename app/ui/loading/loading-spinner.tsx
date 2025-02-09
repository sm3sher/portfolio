import { Loading02Icon } from 'hugeicons-react';

type Props = {
  size?: number;
};

export default function LoadingSpinner({ size = 52 }: Props) {
  return (
    <Loading02Icon className="animate-spin text-(--secondary)" size={size} />
  );
}

import DashboardAnimation from '@/app/ui/animation/hero/dashboard-animation';
import DiagramAnimation from '@/app/ui/animation/hero/diagram-animation';
import WormholeAnimation from '@/app/ui/animation/hero/wormhole-animation';

type Props = {
  floatingLabel?: string | null;
};

export default function HeroAnimation({ floatingLabel }: Props) {
  return (
    <div
      className="relative rotate-x-45 rotate-z-45 space-y-6 p-10 pr-80"
      style={{
        maskImage:
          'radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0))',
      }}
    >
      <div
        className="absolute inset-0 h-full w-full bg-[size:1.5rem_1.5rem] bg-linear-to-r from-(--grid-color) from-[1px] to-[1px] to-transparent after:absolute after:inset-0 after:bg-[size:1.5rem_1.5rem] after:bg-linear-to-b after:from-(--grid-color) after:from-[1px] after:to-[1px] after:to-transparent"
        style={{
          maskImage:
            'radial-gradient(circle at 0% 0%, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      />
      <WormholeAnimation />
      <div className="flex gap-6">
        <DiagramAnimation floatingLabel={floatingLabel} />
        <DashboardAnimation />
      </div>
    </div>
  );
}

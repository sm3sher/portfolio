export default function Astronaut() {
  return (
    <div className="relative h-[340px] animate-spin-slow">
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2">
        {/* Oxygen tank */}
        <div className="absolute left-1/2 top-1/2 h-[150px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-amber-800" />

        {/* Head */}
        <div className="absolute left-1/2 top-[34px] h-[80px] w-[97px] -translate-x-1/2 bg-gradient-to-r from-slate-300 to-slate-100 [border-radius:50%]">
          <div className="absolute -left-1 top-1/2 h-[25px] w-[12px] -translate-y-1/2 rounded-xl bg-orange-700 shadow-[92px_0_0_theme('colors.orange.600')]" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-b from-orange-400 to-amber-700" />
        </div>

        {/* Body */}
        <div className="absolute left-1/2 top-[105px] z-10 h-[100px] w-[85px] -translate-x-1/2 bg-gradient-to-r from-slate-300 to-slate-100 [border-radius:40px/20px]">
          <div className="absolute left-1/2 top-[20px] h-[40px] w-[60px] -translate-x-1/2 bg-gradient-to-t from-orange-400 to-amber-700">
            <div className="absolute left-[7px] top-[9px] h-[5px] w-[30px] bg-slate-100 shadow-[0_9px_0_theme('colors.slate.100'),0_18px_0_theme('colors.slate.100')]" />
            <div className="absolute right-[7px] top-[9px] h-[8px] w-[8px] rounded-full bg-slate-100 shadow-[0_14px_0_2px_theme('colors.slate.100')]" />
          </div>
        </div>

        {/* Arms */}
        <div className="absolute left-[30px] top-[121px] h-[30px] w-[80px] rounded-bl-[39px] bg-slate-300">
          <div className="absolute left-0 top-[-40px] h-[70px] w-[30px] rounded-t-[50px] rounded-bl-[120px] bg-slate-300" />
          <div className="absolute left-0 top-[-24px] h-[10px] w-[30px] bg-orange-700" />
        </div>
        <div className="absolute right-[30px] top-[121px] h-[30px] w-[80px] rounded-br-[39px] bg-slate-100">
          <div className="absolute right-0 top-[-40px] h-[70px] w-[30px] rounded-t-[50px] rounded-br-[120px] bg-slate-100" />
          <div className="absolute right-0 top-[-24px] h-[10px] w-[30px] bg-orange-600" />
        </div>

        {/* Legs */}
        <div className="absolute bottom-[70px] left-[75px] h-[40px] w-[30px] rotate-[20deg] bg-slate-300">
          <div className="absolute bottom-[-24px] left-[-20px] h-[30px] w-[50px] rounded-tl-3xl border-b-[10px] border-orange-700 bg-slate-300" />
        </div>
        <div className="absolute bottom-[70px] right-[75px] h-[40px] w-[30px] rotate-[-20deg] bg-slate-100">
          <div className="absolute bottom-[-24px] right-[-20px] h-[30px] w-[50px] rounded-tr-3xl border-b-[10px] border-orange-600 bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

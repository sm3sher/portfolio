export default function Astronaut() {
  return (
    <div className="animate-spin-slow relative h-[340px]">
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2">
        {/* Oxygen tank */}
        <div className="absolute top-1/2 left-1/2 h-[150px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-amber-800" />

        {/* Head */}
        <div className="absolute top-[34px] left-1/2 h-[80px] w-[97px] -translate-x-1/2 [border-radius:50%] bg-linear-to-r/oklch from-slate-300 to-slate-200 dark:from-slate-200 dark:to-slate-100">
          <div className="absolute top-1/2 -left-1 h-[25px] w-[12px] -translate-y-1/2 rounded-xl bg-orange-700 shadow-[92px_0_0_var(--color-orange-600)]" />
          <div className="absolute top-1/2 left-1/2 h-[50px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-linear-to-b/oklch from-orange-400 to-amber-700" />
        </div>

        {/* Body */}
        <div className="absolute top-[105px] left-1/2 z-10 h-[100px] w-[85px] -translate-x-1/2 [border-radius:40px/20px] bg-linear-to-r/oklch from-slate-300 to-slate-200 dark:from-slate-200 dark:to-slate-100">
          <div className="absolute top-[20px] left-1/2 h-[40px] w-[60px] -translate-x-1/2 bg-linear-to-t/oklch from-orange-400 to-amber-700">
            <div className="absolute top-[9px] left-[7px] h-[5px] w-[30px] bg-slate-200 shadow-[0_9px_0_var(--color-slate-200),0_18px_0_var(--color-slate-200)] dark:bg-slate-100 dark:shadow-[0_9px_0_var(--color-slate-100),0_18px_0_var(--color-slate-100)]" />
            <div className="absolute top-[9px] right-[7px] h-[8px] w-[8px] rounded-full bg-slate-200 shadow-[0_14px_0_2px_var(--color-slate-200)] dark:bg-slate-100 dark:shadow-[0_14px_0_2px_var(--color-slate-100)]" />
          </div>
        </div>

        {/* Arms */}
        <div className="absolute top-[121px] left-[30px] h-[30px] w-[80px] rounded-bl-[39px] bg-slate-300 dark:bg-slate-200">
          <div className="absolute top-[-40px] left-0 h-[70px] w-[30px] rounded-t-[50px] rounded-bl-[120px] bg-slate-300 dark:bg-slate-200" />
          <div className="absolute top-[-24px] left-0 h-[10px] w-[30px] bg-orange-700" />
        </div>
        <div className="absolute top-[121px] right-[30px] h-[30px] w-[80px] rounded-br-[39px] bg-slate-200 dark:bg-slate-100">
          <div className="absolute top-[-40px] right-0 h-[70px] w-[30px] rounded-t-[50px] rounded-br-[120px] bg-slate-200 dark:bg-slate-100" />
          <div className="absolute top-[-24px] right-0 h-[10px] w-[30px] bg-orange-600" />
        </div>

        {/* Legs */}
        <div className="absolute bottom-[70px] left-[75px] h-[40px] w-[30px] rotate-[20deg] bg-slate-300 dark:bg-slate-200">
          <div className="absolute bottom-[-24px] left-[-20px] h-[30px] w-[50px] rounded-tl-3xl border-b-[10px] border-orange-700 bg-slate-300 dark:bg-slate-200" />
        </div>
        <div className="absolute right-[75px] bottom-[70px] h-[40px] w-[30px] rotate-[-20deg] bg-slate-200 dark:bg-slate-100">
          <div className="absolute right-[-20px] bottom-[-24px] h-[30px] w-[50px] rounded-tr-3xl border-b-[10px] border-orange-600 bg-slate-200 dark:bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

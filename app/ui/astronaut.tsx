export default function Astronaut() {
  return (
    <div className="relative h-[340px] animate-spin-slow md:h-auto">
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2">
        {/* Oxygen tank */}
        <div className="absolute left-1/2 top-1/2 h-[150px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-t-full bg-[#94b7ca]" />

        {/* Head */}
        <div className="absolute left-1/2 top-[34px] h-[80px] w-[97px] -translate-x-1/2 bg-gradient-to-r from-[#e3e8eb] to-[#fbfdfa] [border-radius:50%]">
          <div className="absolute -left-1 top-1/2 h-[25px] w-[12px] -translate-y-1/2 rounded-xl bg-[#618095] shadow-[92px_0_0_#618095]" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-b from-[#15aece] to-[#0391bf]" />
        </div>

        {/* Body */}
        <div className="absolute left-1/2 top-[105px] z-10 h-[100px] w-[85px] -translate-x-1/2 bg-gradient-to-r from-[#e3e8eb] to-[#fbfdfa] [border-radius:40px/20px]">
          <div className="absolute left-1/2 top-[20px] h-[40px] w-[60px] -translate-x-1/2 bg-[#b7cceb]">
            <div className="absolute left-[7px] top-[9px] h-[5px] w-[30px] bg-[#fbfdfa] shadow-[0_9px_0_#fbfdfa,0_18px_0_#fbfdfa]" />
            <div className="absolute right-[7px] top-[9px] h-[8px] w-[8px] rounded-full bg-[#fbfdfa] shadow-[0_14px_0_2px_#fbfdfa]" />
          </div>
        </div>

        {/* Arms */}
        <div className="absolute left-[30px] top-[121px] h-[30px] w-[80px] rounded-bl-[39px] bg-[#e3e8eb]">
          <div className="absolute left-0 top-[-40px] h-[70px] w-[30px] rounded-t-[50px] rounded-bl-[120px] bg-[#e3e8eb]" />
          <div className="absolute left-0 top-[-24px] h-[10px] w-[30px] bg-[#6e91a4]" />
        </div>
        <div className="absolute right-[30px] top-[121px] h-[30px] w-[80px] rounded-br-[39px] bg-[#fbfdfa]">
          <div className="absolute right-0 top-[-40px] h-[70px] w-[30px] rounded-t-[50px] rounded-br-[120px] bg-[#fbfdfa]" />
          <div className="absolute right-0 top-[-24px] h-[10px] w-[30px] bg-[#b6d2e0]" />
        </div>

        {/* Legs */}
        <div className="absolute bottom-[70px] left-[75px] h-[40px] w-[30px] rotate-[20deg] bg-[#e3e8eb]">
          <div className="absolute bottom-[-24px] left-[-20px] h-[30px] w-[50px] rounded-tl-3xl border-b-[10px] border-[#6d96ac] bg-[#e3e8eb]" />
        </div>
        <div className="absolute bottom-[70px] right-[75px] h-[40px] w-[30px] rotate-[-20deg] bg-[#fbfdfa]">
          <div className="absolute bottom-[-24px] right-[-20px] h-[30px] w-[50px] rounded-tr-3xl border-b-[10px] border-[#b0cfe4] bg-[#fbfdfa]" />
        </div>
      </div>
    </div>
  );
}

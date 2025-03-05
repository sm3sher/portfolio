type Props = {
  floatingLabel?: string | null;
};

export default function DiagramAnimation({ floatingLabel }: Props) {
  return (
    <div className="group subtle-border relative size-72 shrink-0 rounded-xl bg-(--overlay-color)">
      <div className="-inset-[1px] group-hover:-translate-x-3.5 group-hover:-translate-y-3.5 subtle-border pointer-events-none absolute rounded-xl bg-(--background-color) duration-[400ms] ease-in-out">
        <svg
          className="absolute inset-0 rounded-xl"
          fill="none"
          height="280"
          viewBox="0 0 280 280"
          width="280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Diagram</title>
          <defs>
            <linearGradient
              className="text-(--background-color)"
              id="fading-horizontal"
              gradientUnits="userSpaceOnUse"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.9" stopOpacity="0" stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient
              className="text-(--background-color)"
              id="fading-vertical"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.9" stopOpacity="0" stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <g>
            <g opacity="0.15">
              <path
                className="stroke-black dark:stroke-white"
                d="M200.288 107.086C200.288 97.7277 207.874 90.1409 217.233 90.1409H232.767C242.125 90.1409 249.712 97.7277 249.712 107.086V177.693C249.712 187.052 242.125 194.639 232.767 194.639H217.233C207.874 194.639 200.288 187.052 200.288 177.693V107.086Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M200.288 52.0133C200.288 42.6545 207.874 35.0677 217.233 35.0677H232.767C242.125 35.0677 249.712 42.6545 249.712 52.0133V67.5468C249.712 76.9056 242.125 84.4923 232.767 84.4923H217.233C207.874 84.4923 200.288 76.9056 200.288 67.5468V52.0133Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M255.361 162.16C255.361 152.801 262.948 145.214 272.306 145.214H287.84C297.199 145.214 304.785 152.801 304.785 162.16V177.693C304.785 187.052 297.199 194.639 287.84 194.639H272.306C262.948 194.639 255.361 187.052 255.361 177.693V162.16Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M255.361 -3.0598C255.361 -12.4186 262.948 -20.0054 272.306 -20.0054L287.84 -20.0054C297.199 -20.0054 304.785 -12.4186 304.785 -3.0598V12.4736C304.785 21.8324 297.199 29.4192 287.84 29.4192H272.306C262.948 29.4192 255.361 21.8324 255.361 12.4736V-3.0598Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M90.1414 -3.0598C90.1414 -12.4186 97.7282 -20.0054 107.087 -20.0054L122.62 -20.0054C131.979 -20.0054 139.566 -12.4186 139.566 -3.0598V12.4736C139.566 21.8324 131.979 29.4192 122.62 29.4192H107.087C97.7282 29.4192 90.1414 21.8324 90.1414 12.4736V-3.0598Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-20.0049 52.0133C-20.0049 42.6545 -12.4181 35.0677 -3.05931 35.0677L12.4741 35.0677C21.8329 35.0677 29.4197 42.6545 29.4197 52.0133V67.5468C29.4197 76.9056 21.8329 84.4923 12.4741 84.4923H-3.05931C-12.4181 84.4923 -20.0049 76.9056 -20.0049 67.5468V52.0133Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-20.0049 107.086C-20.0049 97.7277 -12.4181 90.1409 -3.05931 90.1409H12.4741C21.8329 90.1409 29.4197 97.7277 29.4197 107.086V122.62C29.4197 131.979 21.8329 139.565 12.4741 139.565H-3.05931C-12.4181 139.565 -20.0049 131.979 -20.0049 122.62V107.086Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M35.0682 217.233C35.0682 207.874 42.655 200.287 52.0138 200.287H67.5473C76.906 200.287 84.4928 207.874 84.4928 217.233V232.766C84.4928 242.125 76.906 249.712 67.5473 249.712H52.0138C42.655 249.712 35.0682 242.125 35.0682 232.766V217.233Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M90.1414 217.233C90.1414 207.874 97.7282 200.287 107.087 200.287H122.62C131.979 200.287 139.566 207.874 139.566 217.233V232.766C139.566 242.125 131.979 249.712 122.62 249.712H107.087C97.7282 249.712 90.1414 242.125 90.1414 232.766V217.233Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M200.288 272.306C200.288 262.947 207.874 255.36 217.233 255.36H232.767C242.125 255.36 249.712 262.947 249.712 272.306V287.839C249.712 297.198 242.125 304.785 232.767 304.785H217.233C207.874 304.785 200.288 297.198 200.288 287.839V272.306Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M255.361 272.306C255.361 262.947 262.948 255.36 272.306 255.36H287.84C297.199 255.36 304.785 262.947 304.785 272.306V287.839C304.785 297.198 297.199 304.785 287.84 304.785H272.306C262.948 304.785 255.361 297.198 255.361 287.839V272.306Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M35.0682 52.0133C35.0682 42.6545 42.655 35.0677 52.0138 35.0677L67.5473 35.0677C76.906 35.0677 84.4928 42.6545 84.4928 52.0133V122.62C84.4928 131.979 76.906 139.565 67.5473 139.565H52.0138C42.655 139.565 35.0682 131.979 35.0682 122.62V52.0133Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M145.214 217.233C145.214 207.874 152.801 200.287 162.16 200.287H177.693C187.052 200.287 194.639 207.874 194.639 217.233V287.839C194.639 297.198 187.052 304.785 177.693 304.785H162.16C152.801 304.785 145.214 297.198 145.214 287.839V217.233Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-20.0049 217.233C-20.0049 207.874 -12.4181 200.287 -3.05931 200.287H12.4741C21.8329 200.287 29.4197 207.874 29.4197 217.233V287.839C29.4197 297.198 21.8329 304.785 12.4741 304.785H-3.05931C-12.4181 304.785 -20.0049 297.198 -20.0049 287.839V217.233Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M255.361 50.6012C255.361 41.2424 262.948 33.6556 272.306 33.6556H287.84C297.199 33.6556 304.785 41.2424 304.785 50.6012V121.208C304.785 130.567 297.199 138.153 287.84 138.153H272.306C262.948 138.153 255.361 130.567 255.361 121.208V50.6012Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M162.16 29.4192C152.801 29.4192 145.214 21.8324 145.214 12.4736V-3.0598C145.214 -12.4186 152.801 -20.0054 162.16 -20.0054L232.767 -20.0054C242.125 -20.0054 249.712 -12.4186 249.712 -3.0598V12.4736C249.712 21.8324 242.125 29.4192 232.767 29.4192L162.16 29.4192Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-3.05931 29.4192C-12.4181 29.4192 -20.0049 21.8324 -20.0049 12.4736V-3.0598C-20.0049 -12.4186 -12.4181 -20.0054 -3.05931 -20.0054L67.5473 -20.0054C76.906 -20.0054 84.4928 -12.4186 84.4928 -3.0598V12.4736C84.4928 21.8324 76.906 29.4192 67.5473 29.4192L-3.05931 29.4192Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-3.05931 194.639C-12.4181 194.639 -20.0049 187.052 -20.0049 177.693V162.16C-20.0049 152.801 -12.4181 145.214 -3.05931 145.214H67.5473C76.906 145.214 84.4928 152.801 84.4928 162.16V177.693C84.4928 187.052 76.906 194.639 67.5473 194.639H-3.05931Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M107.087 84.4923C97.7282 84.4923 90.1414 76.9056 90.1414 67.5468V52.0133C90.1414 42.6545 97.7282 35.0677 107.087 35.0677L177.693 35.0677C187.052 35.0677 194.639 42.6545 194.639 52.0133V67.5468C194.639 76.9056 187.052 84.4923 177.693 84.4923L107.087 84.4923Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M52.0138 304.785C42.655 304.785 35.0682 297.198 35.0682 287.839V272.306C35.0682 262.947 42.655 255.36 52.0138 255.36H122.62C131.979 255.36 139.566 262.947 139.566 272.306V287.839C139.566 297.198 131.979 304.785 122.62 304.785H52.0138Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M217.233 249.712C207.874 249.712 200.288 242.125 200.288 232.766V217.233C200.288 207.874 207.874 200.287 217.233 200.287H287.84C297.199 200.287 304.785 207.874 304.785 217.233V232.766C304.785 242.125 297.199 249.712 287.84 249.712H217.233Z"
                strokeOpacity={0.5}
              />
              <path
                className="stroke-black dark:stroke-white"
                d="M-3.05931 194.639C-12.4181 194.639 -20.0049 187.052 -20.0049 177.693V162.16C-20.0049 152.801 -12.4181 145.214 -3.05931 145.214H67.5473C76.906 145.214 84.4928 152.801 84.4928 162.16V177.693C84.4928 187.052 76.906 194.639 67.5473 194.639H-3.05931Z"
                strokeOpacity={0.5}
              />
            </g>
            <rect
              fill="url(#fading-horizontal)"
              height="30"
              width="290"
              x="0"
              y="260"
            />
            <rect
              fill="url(#fading-vertical)"
              height="290"
              width="30"
              x="260"
              y="0"
            />
            <path
              className="stroke-(--highlight) transition-[stroke-dashoffset] duration-500 ease-in-out group-hover:delay-[600ms] group-hover:[stroke-dashoffset:40]"
              d="M114.5 200V183.191C114.333 181.024 113 176.062 109.5 173C105.37 169.386 102.5 169 98 169C94.4 169 87.5 169 84.5 169"
              strokeDasharray="100"
              strokeDashoffset="100"
              strokeOpacity="0.8"
            />
            <path
              className="stroke-(--highlight) transition-[stroke-dashoffset] duration-[800ms] group-hover:delay-200 group-hover:[stroke-dashoffset:0]"
              d="M84.5 167H208C210.5 167.167 215.5 167 220 164C224.5 161 226 155.5 226 149.5C226 145.9 226 105.667 226 86"
              strokeDasharray="300"
              strokeDashoffset="-220"
              strokeOpacity="0.8"
            />
            <g className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:delay-700">
              <rect
                className="fill-(--secondary)"
                height="4.7071"
                rx="2.35355"
                width="4.7071"
                x="95.0566"
                y="165.436"
              />
              <rect
                className="stroke-black dark:stroke-white"
                height="7.06066"
                rx="3.53033"
                strokeOpacity="0.12"
                strokeWidth="2.35355"
                width="7.06066"
                x="93.8799"
                y="164.259"
              />
            </g>
          </g>
        </svg>
        <div
          className="glass-effect top-14 left-20 animate-float rounded-2xl px-5 py-1"
          aria-hidden
        >
          {floatingLabel}
        </div>
        <div className="absolute inset-0">
          <div className="glass-effect top-[21%] left-[78.6%] size-12 scale-105 rounded-2xl border-none" />
          <div className="glass-effect top-[59.5%] left-[21%] size-12 scale-105 rounded-2xl duration-300 group-hover:border-(--highlight) group-hover:delay-[800ms]" />
          <div className="glass-effect top-[78.5%] left-[40%] size-12 scale-105 rounded-2xl border-none" />
        </div>
      </div>
    </div>
  );
}

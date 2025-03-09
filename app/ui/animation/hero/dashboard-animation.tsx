export default function DashboardAnimation() {
  return (
    <div className="group subtle-border relative size-72 shrink-0 rounded-xl bg-(--overlay-color)">
      <div className="group-hover:-translate-x-3.5 group-hover:-translate-y-3.5 -inset-[1px] subtle-border pointer-events-none absolute rounded-xl bg-(--background-color) duration-[400ms] ease-in-out">
        <svg
          className="-translate-1/2 absolute top-1/2 left-1/2 rounded-xl"
          fill="none"
          height="280"
          viewBox="0 0 280 280"
          width="280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Dashboard</title>
          <defs className="text-(--background-color)">
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="bottom-fading-gradient"
              x1="137.686"
              x2="137.686"
              y1="181.074"
              y2="275.95"
            >
              <stop stopColor="currentColor" stopOpacity={0} />
              <stop offset="0.5" stopOpacity={0} stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="right-fading-gradient"
              x1="181.074"
              x2="275.95"
              y1="137.686"
              y2="137.686"
            >
              <stop stopColor="currentColor" stopOpacity={0} />
              <stop offset="0.5" stopOpacity={0} stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <g>
            <path
              className="stroke-black dark:stroke-white"
              d="M36.4467 94.1819C36.4467 85.2997 43.6471 78.0993 52.5293 78.0993H227.471C236.354 78.0993 243.554 85.2997 243.554 94.1819V109.455C243.554 118.337 236.354 125.537 227.471 125.537H52.5293C43.6471 125.537 36.4467 118.337 36.4467 109.455V94.1819ZM249.339 94.1819C249.339 85.2997 256.54 78.0993 265.422 78.0993H280.695C289.577 78.0993 296.777 85.2997 296.777 94.1819V109.455C296.777 118.337 289.577 125.537 280.695 125.537H265.422C256.54 125.537 249.339 118.337 249.339 109.455V94.1819ZM36.4467 147.405C36.4467 138.523 43.6471 131.322 52.5293 131.322H121.025C129.907 131.322 137.108 138.523 137.108 147.405V215.901C137.108 224.783 129.907 231.984 121.025 231.984H52.5293C43.6471 231.984 36.4467 224.783 36.4467 215.901V147.405ZM142.893 147.405C142.893 138.523 150.093 131.322 158.976 131.322H174.248C183.131 131.322 190.331 138.523 190.331 147.405V162.678C190.331 171.56 183.131 178.76 174.248 178.76H158.976C150.093 178.76 142.893 171.56 142.893 162.678V147.405ZM196.116 147.405C196.116 138.523 203.317 131.322 212.199 131.322H227.471C236.354 131.322 243.554 138.523 243.554 147.405V162.678C243.554 171.56 236.354 178.76 227.471 178.76H212.199C203.317 178.76 196.116 171.56 196.116 162.678V147.405ZM142.893 200.628C142.893 191.746 150.093 184.546 158.976 184.546H174.248C183.131 184.546 190.331 191.746 190.331 200.628V215.901C190.331 224.783 183.131 231.984 174.248 231.984H158.976C150.093 231.984 142.893 224.783 142.893 215.901V200.628ZM196.116 200.628C196.116 191.746 203.317 184.546 212.199 184.546H227.471C236.354 184.546 243.554 191.746 243.554 200.628V215.901C243.554 224.783 236.354 231.984 227.471 231.984H212.199C203.317 231.984 196.116 224.783 196.116 215.901V200.628ZM249.339 147.405C249.339 138.523 256.54 131.322 265.422 131.322H280.695C289.577 131.322 296.777 138.523 296.777 147.405V215.901C296.777 224.783 289.577 231.984 280.695 231.984H265.422C256.54 231.984 249.339 224.783 249.339 215.901V147.405ZM36.4467 253.851C36.4467 244.969 43.6471 237.769 52.5293 237.769H67.8021C76.6842 237.769 83.8847 244.969 83.8847 253.851V269.124C83.8847 278.006 76.6842 285.207 67.8021 285.207H52.5293C43.6471 285.207 36.4467 278.006 36.4467 269.124V253.851ZM105.752 285.207C96.8703 285.207 89.6698 278.006 89.6698 269.124V253.851C89.6698 244.969 96.8703 237.769 105.752 237.769H225.157C234.04 237.769 241.24 244.969 241.24 253.851V269.124C241.24 278.006 234.04 285.207 225.157 285.207H105.752ZM247.025 253.851C247.025 244.969 254.226 237.769 263.108 237.769H278.381C287.263 237.769 294.463 244.969 294.463 253.851V269.124C294.463 278.006 287.263 285.207 278.381 285.207H263.108C254.226 285.207 247.025 278.006 247.025 269.124V253.851Z"
              opacity="0.1"
            />
            <rect
              fill="url(#bottom-fading-gradient)"
              height="40"
              width="238.347"
              x="18.5127"
              y="239.504"
            />
            <rect
              fill="url(#right-fading-gradient)"
              height="238.347"
              width="40"
              x="239.504"
              y="18.5127"
            />
            <path
              className="fill-black dark:fill-white"
              d="M52.0664 160.248C52.0664 159.928 52.3254 159.669 52.6449 159.669H119.752C120.072 159.669 120.331 159.928 120.331 160.248V161.405C120.331 161.724 120.072 161.983 119.752 161.983H52.6449C52.3254 161.983 52.0664 161.724 52.0664 161.405V160.248Z"
              fillOpacity="0.1"
            />
            <path
              className="fill-black dark:fill-white"
              d="M52.0664 171.818C52.0664 171.499 52.3254 171.24 52.6449 171.24H110.496C110.816 171.24 111.075 171.499 111.075 171.818V172.975C111.075 173.295 110.816 173.554 110.496 173.554H52.6449C52.3254 173.554 52.0664 173.295 52.0664 172.975V171.818Z"
              fillOpacity="0.1"
            />
            <path
              className="fill-black dark:fill-white"
              d="M52.0664 99.5041C52.0664 96.948 54.1385 94.876 56.6945 94.876H105.29C107.846 94.876 109.918 96.948 109.918 99.5041V104.132C109.918 106.688 107.846 108.76 105.29 108.76H56.6945C54.1385 108.76 52.0664 106.688 52.0664 104.132V99.5041Z"
              fillOpacity="0.1"
            />
            <path
              className="fill-black dark:fill-white"
              d="M123.802 101.24C123.802 100.92 124.061 100.661 124.38 100.661H167.19C167.51 100.661 167.769 100.92 167.769 101.24V102.397C167.769 102.716 167.51 102.975 167.19 102.975H124.38C124.061 102.975 123.802 102.716 123.802 102.397V101.24Z"
              fillOpacity="0.1"
            />
            <path
              className="fill-black dark:fill-white"
              d="M181.653 101.24C181.653 100.92 181.912 100.661 182.232 100.661H225.042C225.361 100.661 225.62 100.92 225.62 101.24V102.397C225.62 102.716 225.361 102.975 225.042 102.975H182.232C181.912 102.975 181.653 102.716 181.653 102.397V101.24Z"
              fillOpacity="0.1"
            />
            <g opacity="0.5" className="text-(--border-color)">
              <rect
                height="260.331"
                rx="16.0826"
                stroke="currentColor"
                strokeWidth="1"
                width="260.331"
                x="9.83437"
                y="9.83462"
              />
              <rect
                fill="currentColor"
                height="6.94215"
                rx="3.47107"
                width="6.94215"
                x="23.1406"
                y="23.1404"
              />
              <rect
                fill="currentColor"
                height="6.94215"
                rx="3.47107"
                width="6.94215"
                x="34.7109"
                y="23.1404"
              />
              <rect
                fill="currentColor"
                height="6.94215"
                rx="3.47107"
                width="6.94215"
                x="46.2812"
                y="23.1404"
              />
            </g>
            <path
              className="stroke-(--highlight) transition-[stroke-dashoffset] duration-[400ms] ease-in-out group-hover:delay-200 group-hover:[stroke-dashoffset:0]"
              d="M58 101.856L104 101.856"
              strokeDasharray="54"
              strokeDashoffset="54"
              strokeOpacity="1"
              strokeWidth="2"
            />
            <path
              className="stroke-(--highlight) transition-[stroke-dashoffset] duration-[400ms] ease-in-out group-hover:delay-[400ms] group-hover:[stroke-dashoffset:0]"
              d="M52 149.256H98"
              strokeDasharray="54"
              strokeDashoffset="54"
              strokeOpacity="0.9"
              strokeWidth="2"
            />
          </g>
        </svg>
        <div className="absolute inset-0">
          <div className="glass-effect top-[55.2%] left-[59.2%] size-12 scale-50 rounded-2xl border-(--highlight) opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-90 group-hover:delay-[600ms]" />
        </div>
      </div>
    </div>
  );
}

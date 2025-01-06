import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & { backgroundColor: string };

export default function LogoKofi({ backgroundColor, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 242 194"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M96.134 193.911c-35.003 0-63.474-15.655-80.162-44.082C1.198 124.912-.006 97.923-.006 67.766c0-17.878 5.379-33.445 15.547-45.02 9.345-10.63 22.586-17.517 37.29-19.392C70.287 1.143 91.986.959 114.546.959c36.714 0 47.085.45 61.53 1.894 19.215 1.907 35.383 9.079 46.749 20.743 11.544 11.847 17.645 27.666 17.645 45.767v3.636c0 30.886-20.648 56.734-49.423 63.76-2.148 5.068-4.809 10.112-7.957 15.078l-.083.127c-10.137 15.668-33.964 41.954-79.605 41.954h-7.273l.006-.007Z"
      />
      <path
        fill={backgroundColor}
        d="M15.197 67.767c0-30.238 18.19-46.603 39.559-49.334 16.143-2.046 36.15-2.274 59.788-2.274 36.828 0 46.375.456 60.015 1.818 32.058 3.18 50.696 22.96 50.696 51.38v3.637c0 26.375-19.323 47.972-45.469 50.24-2.046 6.824-5.227 13.64-9.548 20.464-10.003 15.458-30.01 35.009-66.838 35.009h-7.274c-30.01 0-53.198-12.956-67.067-36.6-12.278-20.685-13.868-43.65-13.868-74.34"
      />
      <path
        fill="currentColor"
        d="M32.247 67.99c0 29.327 1.818 48.194 11.366 65.699 10.91 20.235 30.689 27.964 53.199 27.964h7.045c29.554 0 43.879-14.324 51.836-26.824 3.865-6.367 7.273-13.412 9.091-22.282l1.363-5.683h8.185c18.189 0 33.876-14.774 33.876-33.647v-3.409c0-21.141-13.184-32.285-36.15-35.01-12.956-1.133-20.686-1.59-57.52-1.59-24.778 0-42.51.228-55.923 2.275-18.867 2.73-26.374 13.412-26.374 32.507"
      />
      <path
        fill={backgroundColor}
        d="M166.158 83.68c0 2.73 2.046 4.777 5.683 4.777 11.594 0 17.961-6.595 17.961-17.505s-6.367-17.733-17.961-17.733c-3.637 0-5.683 2.047-5.683 4.777v25.69-.006Z"
      />
      <path
        fill={backgroundColor}
        d="M54.532 82.32c0 13.412 7.501 25.006 17.049 34.104 6.367 6.138 16.37 12.506 23.188 16.598 2.046 1.135 4.092 1.819 6.367 1.819 2.73 0 4.998-.684 6.823-1.819 6.823-4.092 16.82-10.46 22.96-16.598 9.775-9.092 17.276-20.686 17.276-34.104 0-14.553-10.909-27.508-26.596-27.508-9.319 0-15.687 4.776-20.463 11.365-4.321-6.595-10.91-11.366-20.236-11.366-15.915 0-26.374 12.956-26.374 27.509"
      />
    </svg>
  );
}

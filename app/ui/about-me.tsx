import Image from 'next/image';
import { calculateAge } from '@/app/lib/date-utils';

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-center">
      <Image
        className="w-1/2 rounded-2xl"
        src="/front-profile.png"
        alt="Picture of Roman Jumatov"
        width={384}
        height={405}
      />
      <div className="mt-4 lg:ml-4 lg:mt-0 lg:self-center">
        <p className="text-center lg:text-left">
          Hi, I’m Roman Jumatov - a {calculateAge('1999-04-02')}-year-old
          software developer based in western Germany. I believe that great code
          should not only work but feel effortless to the user. I’m driven by
          curiosity and a passion for creating modern, intuitive web experiences
          that leave a lasting impression.
        </p>
      </div>
    </div>
  );
}

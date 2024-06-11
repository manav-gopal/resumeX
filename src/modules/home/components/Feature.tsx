import Image from 'next/image';
import Link from 'next/link';

function FeatureSection() {
  return (
    <>
      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/templates.png" alt="style" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Customise with <strong>templates and themes</strong>!
        </p>
        <span className='absolute -z-10 bg-[rgba(100,100,255,.9)] blur-[70px] w-20 h-20'></span>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/rocket.png" alt="speed" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Simple <strong>interface</strong> that helps you build quicky!
        </p>
        <span className='absolute -z-10 bg-[red] blur-[70px] w-20 h-20'></span>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/magic.png" alt="magic" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Easy <strong>sign up </strong> — go straight to building!
        </p>
        <span className='absolute -z-10 bg-[yellow] blur-[70px] w-20 h-20'></span>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/data.png" alt="lock" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Your <strong>data</strong> never leaves your device
        </p>
        <span className='absolute -z-10 bg-[green] blur-[70px] w-20 h-20'></span>
      </FeatureCard>
    </>
  );
}

const FeatureCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link href="/builder" passHref={true}>
      <div
        className={`transition ease-in-out delay-100 border-2 border-gray-100 duration-300 bg-white backdrop-blur-2xl text-resume-800
      hover:text-resume-900 hover:scale-105 px-6 py-10 lg:p-12 flex shadow-md cursor-pointer relative rounded-xl`}
      >
        
        {children}
      </div>
    </Link>
  );
};

const CardPinnnedIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-2xl bg-transparent rounded-full p-2 shadow-level-hard absolute right-0 top-0 -mt-4 -mr-1">
      {children}
    </div>
  );
};

export default FeatureSection;

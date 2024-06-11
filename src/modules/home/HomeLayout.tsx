import { motion, useAnimation } from 'framer-motion';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Link from 'next/link';
import Person from './components/Person';
import NavHome from '../NavHome';
import { graphicalIcons } from 'src/helpers/icons/index';
import BgIcon from './components/BgIcon';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      className="scroll-smooth"
      style={{
        // background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)', // Light background
        fontFamily: "'Roboto Slab', serif",
        position: 'absolute',
      }}
    >
      <NavHome />
      <div>
        <div className="absolute border-box w-full h-[100vh] overflow-hidden z-0">
          <GraphicalBG />
        </div>
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume-home.png"
                alt="resume-3d"
                className="drop-shadow-[15px_15px_60px_rgba(225,149,155,7)] w-6/12 sm:w-9/12 z-10"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-resume-400 font-[cursive]">EFFORTLESS RESUMES</h3>
              <h1 className="text-5xl mb-12 text-resume-800 font-[cursive]">Powerful Results</h1>

              <div className="flex mb-10">
                <div className="bg-blue-200 w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-resume-800">
                  &ldquo;Say Goodbye to Resume Stress: Easy-to-Use Builder, Impressive
                  Results&rdquo;
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button
                  variant="contained"
                  className="text-white mb-2 hover:scale-105 transition-all duration-100 ease-linear"
                  sx={{
                    background: 'linear-gradient(90deg, #66b1ff 0%, #9083ff 50%, #6c4bff 100%)',
                  }}
                >
                  {'START BUILDING >'}
                </Button>
              </Link>
              <p
                className="xl:invisible lg:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          Developer and Designer — who love to build projects and learn along!
        </p>
        <p className="text-resume-200 mb-8 text-center lg:text-left">Manav Gopal</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <Person /> */}
        </div>
      </div>
    </motion.div>
  );
};

const GraphicalBG = () => {
  const gIcons = graphicalIcons();
  return (
    <>
      <BgIcon url={gIcons.c} x={5} y={27} />
      <BgIcon url={gIcons.e} x={9} y={23} />
      <BgIcon url={gIcons.a} x={3} y={21} />
      <BgIcon url={gIcons.b} x={8} y={18} />
      <BgIcon url={gIcons.f} x={3} y={15} />
      <BgIcon url={gIcons.e} x={7} y={13} />
      <BgIcon url={gIcons.a} x={8} y={8} />
      <BgIcon url={gIcons.c} x={3} y={5} />
      {/* mid */}
      <BgIcon url={gIcons.c} x={55} y={27} />
      <BgIcon url={gIcons.f} x={45} y={25} />
      <BgIcon url={gIcons.b} x={37} y={27} />
      <BgIcon url={gIcons.d} x={30} y={24} />
      <BgIcon url={gIcons.e} x={24} y={28} />
      <BgIcon url={gIcons.a} x={50} y={22} />

      {/* Right */}
      <BgIcon url={gIcons.a} x={83} y={25} />
      <BgIcon url={gIcons.b} x={70} y={20} />
      <BgIcon url={gIcons.c} x={75} y={28} />
      <BgIcon url={gIcons.e} x={76} y={23} />
      <BgIcon url={gIcons.f} x={78} y={18} />
      <BgIcon url={gIcons.e} x={73} y={15} />
      <BgIcon url={gIcons.a} x={80} y={13} />
      <BgIcon url={gIcons.c} x={75} y={8} />
    </>
  );
};

export default HomeLayout;

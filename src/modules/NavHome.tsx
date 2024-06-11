import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect} from 'react';
import { NavBarActions, StyledButton } from './builder/nav-bar/atoms';
import { BsGithub, BsPeople } from 'react-icons/bs';
// eslint-disable-next-line import/no-unresolved
import TransitionsModal from 'src/modules/login/LoginPopup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from 'src/stores/reducers/userDataReducer';
import resumeIcon from 'public/resume.png';

interface userData {
  name: string;
  email: string;
  _id: string;
}
const NavHome = () => {
  // To get the user data by authenticating it with token
  const dispatch = useDispatch();
  const userData: any = useSelector((state:any) => state.userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/auth/');
        dispatch(setUserData(response.data.user));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);
  console.log("succccc",userData);

  return (
    <div>
      <nav className="fixed top-0 z-20 h-14 w-full border-b-2 border-gray-100 bg-[#fff9] backdrop-blur-xl flex py-2.5 px-4 xl:px-60 items-center">
        <Link href="/">
          <Image src={resumeIcon} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">Resume Builder</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="#contribute" passHref={true}>
              {/* <StyledButton variant="text" className="max-md:hidden">
                Contribute
              </StyledButton> */}
            </Link>
            <Link href="#about-us" passHref={true}>
              <StyledButton variant="text">About us</StyledButton>
            </Link>
            {/* For Login Popup  */}
            <TransitionsModal userData={userData} />
            <a
              href={'#'}
              rel="noopener noreferrer"
            >
              <BsPeople className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </nav>
    </div>
  );
};

export default NavHome;

import * as React from 'react';
import { StyledButton } from '../builder/nav-bar/atoms';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// from mui Material UI
import { Menu, MenuItem, Button, Backdrop, Box, Modal, Fade } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#111011',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface userData {
  name: string;
  email: string;
  _id: string;
}
interface MyProps {
  userData: userData | null;
}
export default function TransitionsModal(props: MyProps) {
  const userData = props.userData;
  // console.log("helloe" ,userData);
  

  // Handle Login/SignUp Popups
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleLogOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (userData) {
      setAnchorEl(e.currentTarget);
    } else {
      setOpen(true);
    }
    setTemp(true); // To set the value to its default value
  };
  const handleLogClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const [temp, setTemp] = useState(true);
  const toggleForm = () => {
    setTemp(!temp);
  };

  // Login/SignUp Authentication :------------------------
  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log('clicked login', email);

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('is it working', response); // Handle successful login response

      // To Toastify the response :------------------------
      if (response.data.status === 200) {
        toast.success(`${response.data.message}`);
      } else if (response.data.status === 401) {
        toast.warning(`${response.data.message}`);
      } else if (response.data.status === 404) {
        toast.info(`${response.data.message}`);
      }
      handleLogClose(); // To Close The Loginpopup box
    } catch (error: any) {
      console.error(error); // Handle error
      toast.error(`${error.response.data.message}`);
    }
  };

  const handleSignupSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log('clicked signup', name, email, password);

    try {
      const response = await axios.post('/api/auth/signup', { name, email, password });
      console.log(response); // Handle successful signup response

      // To Toastify the response :------------------------
      toast.success(`${response.data.message}`);
      handleLogClose(); // To Close The Loginpopup box
    } catch (error: any) {
      console.error(error); // Handle error
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <div>
      <StyledButton
        id="login_button"
        aria-controls="basic_menu"
        aria-haspopup="true"
        onClick={handleLogOpen}
      >
        {!userData ? 'Login' : userData.name}
      </StyledButton>
      <Menu
        id="basic_menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLogClose}
        MenuListProps={{
          'aria-labelledby': 'login_button',
        }}
      >
        <MenuItem onClick={handleLogClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogClose}>My account</MenuItem>
        <MenuItem onClick={handleLogClose}>Logout</MenuItem>
      </Menu>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <ToastContainer /> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleLogClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Box sx={style}>
            {temp == true ? (
              <div className="flex justify-center items-center h-screen/2 w-80">
                <div className="lg:w-full">
                  <div className="p-6">
                    <div className="text-2xl font-bold text-center text-white">LOGIN</div>
                    <form className="mt-6" onSubmit={handleLoginSubmit}>
                      {/* <div className="mb-6">
                        <label htmlFor="name" className="block mb-1 text-white">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          className="w-full p-3 bg-blue-100 border border-blue-300 rounded"
                        />
                      </div> */}
                      <div className="mb-6">
                        <label htmlFor="email" className="block mb-1 text-white">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full p-3 bg-blue-100 border border-blue-300 rounded"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="password" className="block mb-1 text-white">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Enter your password"
                          className="w-full p-3 bg-blue-100 border border-blue-300 rounded"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold uppercase rounded hover:brightness-95 active:scale-98"
                      >
                        Submit
                      </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-white">
                      {"Don't have an account? "}
                      <Button className="text-blue-500" onClick={toggleForm}>
                        Sign Up
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-screen/2 items-center justify-center">
                <div className="w-full p-6">
                  <div className="text-2xl font-bold text-center text-white">CREATE AN ACCOUNT</div>
                  <form className="mt-4" onSubmit={handleSignupSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full h-10 px-4 bg-blue-100 border-2 border-blue-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-white">
                        E-Mail
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full h-10 px-4 bg-blue-100 border-2 border-blue-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full h-10 px-4 bg-blue-100 border-2 border-blue-300 rounded"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white uppercase py-2 font-bold rounded"
                    >
                      Submit
                    </button>
                    <h2 className="mt-4 text-white align-center">OR</h2>
                  </form>
                  <p className="mt-4 text-center text-white">
                    {'Have an account? '}
                    <Button className="text-blue-600" onClick={toggleForm}>
                      Login
                    </Button>
                  </p>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

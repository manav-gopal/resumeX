import EditorLayout from "./editor/EditorLayout";
import Image from "next/image";
import NavBarLayout from "./nav-bar/NavBarLayout";
import ResumeHeader from "./resume/components/ResumeHeader";
import { ResumeLayout } from "./resume/ResumeLayout";
import Tooltip from "@mui/material/Tooltip";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import Head from "next/head";

const BuilderLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen((mobileOpen) => !mobileOpen);
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBarLayout />
      <main className="flex w-full flex-row max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 sm:w-[100%] lg:w-[75%] justify-center bg-white overflow-hidden print:bg-white">
          <header className="w-full mt-5 mb-3 mx-auto h-auto print:hidden">
            <ResumeHeader />
          </header>
          <div className="overflow-auto w-full no-scrollbar">
            <ResumeLayout />
          </div>
        </div>
        <div className="md:w-[25%] sm:w-[0] print:hidden" id="drawer-container">
          {/* <EditorLayout /> */}
          <div
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              transform: "translate(0%,0%)",
            }}
          >
            {/* <Tooltip title="Open Drawer" arrow>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiIconButton-root': { width: 'full' },
                }}
                >
                <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
                </IconButton>
              </Tooltip> */}
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              variant="permanent"
              sx={{
                position: "relative",
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "100%",
                  border: "none",
                }, // fixed width for larger screens
              }}
              anchor="right"
              open={true}
            >
              <EditorLayout />
            </Drawer>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                position: "relative",
                display: { xs: "block", sm: "none" },
                boxShadow: "4px 4px 20px 5px gray",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "full",
                  border: "none",
                }, // responsive width
              }}
              anchor="right"
              // close
            >
              <EditorLayout />
            </Drawer>
          </div>
        </div>
      </main>

      <footer className="print:hidden">
        {/* <Tooltip title="Share feedback">
          <a
            href="https://forms.gle/YmpXEZLk6LYdnqet7"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-4 left-4 flex justify-center items-center bg-resume-50 shadow-level-4dp"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip> */}
        <Tooltip title="Open Drawer">
          <div
            onClick={handleDrawerToggle}
            className="fixed w-14 h-14 z-9999 rounded-full bottom-4 right-4 flex justify-center items-center bg-resume-50 shadow-level-4dp"
          >
            <Image
              src="/icons/rate-review.svg"
              alt="Feedback button"
              width="24"
              height="24"
            />
          </div>
        </Tooltip>
      </footer>
    </div>
  );
};

export default BuilderLayout;

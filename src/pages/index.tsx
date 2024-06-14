import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';
import { connectDB } from 'src/helpers/utils/db';

const HomePage: NextPage = () => {
  return (
    <div
    style={{
        background: 'linear-gradient(to right, #ebf4f5, #b5c6e0)',
      }}
    >
      <Head>
        <title>ResumeX: Home</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <HomeLayout />
    </div>
  );
};
export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  // Connect to MongoDB before rendering the page
  try {
    await connectDB();
    console.log('MongoDB connected successfully!');
    // Other code that depends on the database connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  // Fetch necessary data using database operations
  // Perform any data retrieval here...
  

  return {
    props: {
      data: {}, // Pass fetched data as props to the page component
    },
  };
};

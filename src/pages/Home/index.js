import React from 'react';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import posts from '../../data/posts';

function Home() {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}

export default Home;

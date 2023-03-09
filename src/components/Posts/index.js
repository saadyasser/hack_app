import React, { useState } from 'react';
import './index.css';

function Posts({ posts }) {
  const [isShowAction, setIsShowAction] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <section className="posts">
      <div className="container">
        <div className="inline-flex">
          <h2>Latest Posts</h2>
          <img src="/add-icon.png" alt="ddd" />
        </div>

        {posts.map((post, key) => (
          <div className="post" key={post.key}>
            <img src={post.image} alt="i" />
            <p>{post.name}</p>

            <div className="actions">
              {isShowAction[key] ? (
                <span className="action-list">
                  <div className="action-card">
                    <div className="flex">
                      <img src="/edit.png" alt="dd" />
                      <span>Edit</span>
                    </div>
                    <div className="flex">
                      <img src="/delete.png" alt="dkdkdf" />
                      <span>Delete</span>
                    </div>
                  </div>
                </span>
              ) : null}
              <img
                onClick={() => {
                  isShowAction[key] = !isShowAction[key];
                  setIsShowAction(isShowAction);
                  console.log(isShowAction);
                }}
                className="action"
                src="/three-dots.png"
                alt="fkdfkfd"
              />
            </div>
          </div>
        ))}
        <div className="navigation">
          <div>
            <span>
              <label htmlFor="number">items per page</label>

              <select name="number">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>2</option>
              </select>
            </span>
            <span>1 - 10 of 16</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;

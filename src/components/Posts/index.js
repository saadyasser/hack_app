import React, { useState } from 'react'
import './index.css'

import Modal from '../../Modal'
import AddPost from '../AddPost'

function Posts({ posts }) {
  const [showAdd, setShowAdd] = useState(false)
  console.log('showAdd', showAdd)
  return (
    <section className="posts">
      <div className="container">
        <div className="inline-flex">
          <h2>Latest Posts</h2>
          <img
            src="/add-icon.png"
            alt="ddd"
            onClick={() => setShowAdd(!showAdd)}
          />
          <Modal isOpened={showAdd}>
            <AddPost onClose={() => setShowAdd(false)} />
          </Modal>
        </div>

        {posts.map((post, key) => (
          <div className="post" key={key}>
            <img src={post.image} alt="i" />
            <p>{post.name}</p>
            <div className="actions">
              <img className="action" src="/three-dots.png" alt="fkdfkfd" />
              <span className="action-list">
                <span>
                  <img src="/edit.png" />
                  <span>Edit</span>
                </span>
              </span>
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
  )
}

export default Posts

import React, { useState } from 'react'

import './style.css'
import Card from '../CardPopUp'

export const EditPost = ({ onClose }) => {
  const [textPost, setTextPost] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleInputFile = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleInput = (e) => {
    setTextPost(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      text: textPost,
      selectedFile: selectedFile,
    }
    console.log(formData)

    const response = await fetch(
      'https://hakathon2023.onrender.com/api/post/update/:id',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      },
    )
    await response.json()
  }
  return (
    <div>
      <Card className="container">
        <h2>Edit Post</h2>
        <form className="formEdit">
          <input
            type="text"
            className="textPost"
            name="text"
            value={textPost}
            // onChange={handleInput}
          />

          <button
            type="button"
            style={{
              width: '100%',
              height: '100px',
              background: 'transparent',
              border: '1px solid #BEC2C6',
              borderRadius: '7px',
            }}
          >
            <label
              htmlFor="contained-button-file"
              style={{
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                // flexDirection: 'column',
                gap: '0.8rem',
              }}
            >
              <input
                type="file"
                name="file"
                // value={selectedFile}
                id="contained-button-file"
                placeholder="TEST"
                style={{
                  display: 'none',
                }}
                // onChange={handleInputFile}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '90px',
                  height: '90px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '50%',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 56.196 45.229"
                >
                  <g id="cloud-upload-outline" transform="translate(1.5 1.5)">
                    <path
                      id="Path_34563"
                      data-name="Path 34563"
                      d="M34.816,38.176h8.423c6.1,0,11.082-3.237,11.082-9.265s-5.874-9.028-10.639-9.265C42.7,10.219,35.813,4.485,27.723,4.485A14.653,14.653,0,0,0,13.537,14.593c-6.65.632-12.412,4.862-12.412,11.791s5.985,11.791,13.3,11.791h6.207"
                      transform="translate(-1.125 -4.485)"
                      fill="none"
                      stroke="#2d65e4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_34564"
                      data-name="Path 34564"
                      d="M27.686,20.578l-7.093-7.093L13.5,20.578"
                      transform="translate(6.005 0.701)"
                      fill="none"
                      stroke="#2d65e4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.25"
                    />
                    <path
                      id="Path_34565"
                      data-name="Path 34565"
                      d="M18,41.255V14.61"
                      transform="translate(8.598 1.349)"
                      fill="none"
                      stroke="#2d65e4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.25"
                    />
                  </g>
                </svg>
              </div>

              <span>
                Upload your image
                {/* {selectedFile === null ? 'Upload a File' : selectedFile.name} */}
              </span>
              <span>OR</span>
              <span>Delete</span>
            </label>
          </button>
          <div className="buttons">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-edit">
              Edit
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default EditPost

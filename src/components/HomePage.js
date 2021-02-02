import React from 'react'

function HomePage (props) {
  return (
    <div className="container">
      <div className="home-page">
        <div className="row justify-content-center">
          <div className="col-7 text-center">
            <div className="cover-page">
              Cover your page.
            </div>
            <div className="home-page-text pr-4 pl-4">
              Cover is a one-page template for building simple
              and beautiful home pages. Download, edit the text,
              and add your own fullscreen background photo to make it your own.
            </div>
            <button className="learn-more-button ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
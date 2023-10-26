'use client'
import React from 'react'

const ContactBtn = () => {
  return (
    <div>
        <style jsx>
            {`
            .bn13 {
                display: inline-block;
                padding: 0.65em 1.6em;
                margin: 0 0.3em 0.3em 0;
                border-radius: 1em;
                box-sizing: border-box;
                text-decoration: none;
                font-family: "Roboto", sans-serif;
                font-weight: 300;
                text-align: center;
                transition: all 0.2s;
                animation: bn13bouncy 5s infinite linear;
                position: relative;
              }
              
              .bn13:hover {
                background-color: white;
                color: #000000;
              }
              
              @keyframes bn13bouncy {
                0% {
                  top: 0em;
                }
                40% {
                  top: 0em;
                }
                43% {
                  top: -0.9em;
                }
                46% {
                  top: 0em;
                }
                48% {
                  top: -0.4em;
                }
                50% {
                  top: 0em;
                }
                100% {
                  top: 0em;
                }
              }
            `}
        </style>
        <a href="/" className="bn13 border-zinc-600 border text-zinc-400">Contact Us</a>
    </div>
  )
}

export default ContactBtn
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa'
import './videobg.css'

export const Main = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="https://cdn.discordapp.com/attachments/815164735259017226/1185166026019717230/ssstik.io_1697017415876.mp4?ex=658e9edf&is=657c29df&hm=4be785814fa53dcb8f46dcdca9430573218c64faf51c5ec234faeed6a607bd0b&" />
        Your browser does not support the video tag.
      </video>
          <div id='main'>
          <div className='w-full h-screen absolute top-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
              <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                WELCOME TO HOMEPAGE
              </h1>
              <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                 
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Hello nama w Andy',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer and 2D game Developer',
                    1000,
                    'im play Genshin impact',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', paddingLeft:'5px' }}
                  repeat={Infinity}
                />
              </h2>
              <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className="cursor-pointer" size={20}/>
                <FaFacebook className="cursor-pointer" size={20}/>
                <FaInstagram className="cursor-pointer" size={20}/>
                <FaLinkedin className="cursor-pointer" size={20}/>
                <FaDiscord className="cursor-pointer" size={20}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

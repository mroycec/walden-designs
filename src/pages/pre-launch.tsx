"use client"
import { useState } from 'react'
import Button from '../components/button/button'
import Input from '../components/input/input'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <main>
      <Head>
        <title>Walden Designs 🐌</title>
        <meta name="description" content="Walden Design pre-launch site" />
      </Head>
      <div className="fixed w-screen h-screen bg-cover bg-bottom bg-fog">
        <div className="fixed z-50 inset-0 flex items-center justify-center space-y-4">
          <div className="bg-tint-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-main-bold text-tint-900 mb-4 text-center">
              🌱🎒🧵🌿🌞🏕️🐌 <br /> Walden Designs
            </h2>
            <form className="space-y-8 flex flex-col justify-center -mt-8" data-netlify="true" name="email-list" method="POST" action="/confirmation">
              <input type="hidden" name="form-name" value="email-list" />
              <p className="text-tint-900 text-md md:text-lg lg:text-xl text-wrap">
                Sign up for our list for word on launch.
              </p>
              <Input
                form="email-list"
                type="email"
                name="email"
                label="Email"
                placeholder='Email'
                value={email}
                setValue={setEmail} />
              <Button type="submit" id="sign up" disabled={!email}>Sign up</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
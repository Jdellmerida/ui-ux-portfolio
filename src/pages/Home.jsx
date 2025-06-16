import React from 'react'
import { ThemeToggle } from '../components/Themetoggle'
import { Starbackground } from '../components/Starbackground'
import { Navbar } from '../components/Navbar'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-w-hidden">
  {/* Theme Toggle */}
    <ThemeToggle />
   {/* Theme Toggle */}
    <Starbackground />
   {/* Navbar */}
    <Navbar />
   {/* Main Content */}

   {/* Footer */}
</div>
  )
  
}

export default Home
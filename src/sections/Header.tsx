"use client"

import { useState, useEffect } from "react"
import Image from 'next/image';
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { Button } from '@/components/Button';
import { X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#", label: "Developers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#", label: "Changelog" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
    <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
    <div className="container">
      <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative'>
        <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
        <div>
          <div className='border h-10 w-10 border-white/15 rounded-full inline-flex justify-center items-center'>
            <Image src={LogoIcon} className='h-8 w-8 bg-white rounded-full' alt='Logo'></Image>
          </div>
        </div>
        <div className='hidden md:block'>
          <nav className='flex gap-8 text-sm'>
            <a href="#features" className='text-white/70 hover:text-white transition'>Features</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
            <a href="#pricing" className='text-white/70 hover:text-white transition'>Pricing</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <Button>Join waitlist</Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            ) : (
              <Image src={MenuIcon} className="md:hidden" alt="Hamburger Menu" />
            )}
          </button>
        </div>
      </div>
    </div>
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMenuOpen(false)}
    />
    {/* Side Navbar - responsive width */}
    <div
      className={`fixed top-0 left-0 h-full w-[70vw] max-w-[280px] sm:w-64 bg-[#0a0a1a] border-r border-white/15 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header - responsive padding */}
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/15">
        <div className="border h-8 w-8 sm:h-10 sm:w-10 border-white/15 rounded-full inline-flex justify-center items-center">
          <Image
            src={LogoIcon}
            className="h-8 w-8 bg-white rounded-full"
            alt="Logo"
          />
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center justify-center p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Close menu"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
      </div>
      {/* Sidebar Navigation - responsive text and padding */}
      <nav className="flex flex-col p-3 sm:p-4">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm text-white/70 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
};

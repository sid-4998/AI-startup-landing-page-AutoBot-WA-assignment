import Image from "next/image"
import LogoIcon from "@/assets/logo.svg";
import Xsocial from '@/assets/social-x.svg';
import YTsocial from '@/assets/social-youtube.svg';
import Instasocial from '@/assets/social-instagram.svg';

export default function Footer() {
  return <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex gap-2 items-center lg:flex-1">
          <Image src={LogoIcon} className='h-6 w-6 bg-white rounded-full' alt="Logo"></Image>
          <div>Seo AI</div>
        </div>
        <div className="py-5">
          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="#features" className="text-white/70 hover:text-white text-xs md:text-sm transition">Features</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Developers</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Company</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Blog</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Changelog</a>
          </nav>
        </div>
        <div className="flex gap-5 lg:flex-1 lg:justify-end">    
          <Image src={Xsocial} className='h-8 w-8 bg-slate-300 border border-white/15 rounded-lg' alt="X Logo"></Image>
          <Image src={YTsocial} className='h-8 w-8 bg-slate-300 border border-white/15 rounded-lg' alt="Youtube Logo"></Image>
          <Image src={Instasocial} className='h-8 w-8 bg-slate-300 border border-white/15 rounded-lg' alt="Instagram Logo"></Image>
        </div>
      </div>
    </div>
  </footer>
};

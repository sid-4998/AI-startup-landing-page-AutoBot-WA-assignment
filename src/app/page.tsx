import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Pricing } from '@/sections/Pricing'

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Pricing/>
    </>
  );
}

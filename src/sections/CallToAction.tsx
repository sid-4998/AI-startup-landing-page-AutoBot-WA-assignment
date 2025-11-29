import { Button } from '@/components/Button';
import starsBG from '@/assets/stars.png';
import GridLines from '@/assets/grid-lines.png';

export default function CallToAction() {
  return <section className='py-20 md:py-24'>
    <div className='container'>
      <div className='border border-white/15 py-24 rounded-xl overflow-hidden relative' style={{
        backgroundImage: `url(${starsBG.src})`
      }}
      >
        <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]' style={{
          backgroundImage: `url(${GridLines.src})`
        }}>
        </div>
        <div className='relative'>
          <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>AI-driven SEO for everyone</h2>
          <p className='text-lg md:text-xl text-center tracking-tight text-white/70 px-4 mt-5 max-w-xs mx-auto md:max-w-sm'>Achieve clear and impactful results without any complexity</p>
          <div className='flex justify-center mt-8'>
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

import { HubLink } from './components/HubLink';
import { OTC_URLS } from './utils/constants';

export default function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center animated-gradient-bg noise-overlay">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <HubLink href={OTC_URLS.terraclassic} className="animate-fade-in-up stagger-1">
          CL8Y OTC TERRACLASSIC
        </HubLink>
        <HubLink href={OTC_URLS.bsc} className="animate-fade-in-up stagger-2">
          CL8Y OTC BSC
        </HubLink>
      </div>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { Box } from '@chakra-ui/react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#0d47a1',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 170,
          enable: true,
          opacity: 1.0,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
          limit: {
            value: 300,
          },
        },
        opacity: {
          value: 0.5,
          speed: 4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            speed: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div
        style={{
          maxHeight: '100vh',
          width: '100%',
          height: '500px',
          overflow: 'hidden',
        }}
      >
        <Particles
          id={'tsparticles'}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;

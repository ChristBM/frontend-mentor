import featuresection from './featuresection.module.css'

export interface Feature {
  color: string
  title: string
  text: string
  icon: string
  classe: any
}

export const featureData: Feature[] = [
  {
    color: 'hsl(180, 62%, 55%)',
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    icon: '/feature_section/icon-supervisor.svg',
    classe: featuresection.the_green
  },
  {
    color: 'hsl(0, 78%, 62%)',
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    icon: '/feature_section/icon-team-builder.svg',
    classe: featuresection.the_red
  },
  {
    color: 'hsl(34, 97%, 64%)',
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    icon: '/feature_section/icon-karma.svg',
    classe: featuresection.the_yellow
  },
  {
    color: 'hsl(212, 86%, 64%)',
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    icon: '/feature_section/icon-calculator.svg',
    classe: featuresection.the_blue
  }
]
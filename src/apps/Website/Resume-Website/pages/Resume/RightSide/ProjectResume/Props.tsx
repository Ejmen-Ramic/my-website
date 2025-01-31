import { Trans } from '@lingui/macro'
import ImageGallery from './ProjectGallery'
import { imagesV4 } from './ProjectGallery/Props'

export type Props = {
  name: string
  year: string
  location: string | JSX.Element
  description: string | JSX.Element
  link: string
  gallery?: JSX.Element
}

export const itemProps = [
  {
    name: <Trans>Crypto Charity</Trans>,
    year: '2022',
    location: <Trans>IIUM, Malaysia</Trans>,
    description: (
      <Trans>
        The "Blockchain Charity" project is a web application designed to ensure
        safe and transparent charitable donations via blockchain. It includes
        smart contract testing for donation and withdrawal transactions, and
        features for managing and monitoring donations and thresholds. The app
        uses tools like Truffle, Ganache, and MetaMask to securely handle and
        display transactions, helping to prevent fraud and money laundering
        while ensuring funds reach the intended recipients.
      </Trans>
    ),
    link: 'https://github.com/Ejmen-Ramic/Blockchain-Charity',
  },
  {
    name: <Trans>Final Year Project</Trans>,
    year: '2021 - 2022',
    location: <Trans>IIUM, Malaysia</Trans>,
    description: (
      <Trans>
        LifeLine, a Poverty Profiling System, aims to optimize donation
        distribution using data mining to predict and address needs efficiently.
        Developed by Ejmen Ramic, the project focuses on reducing unnecessary
        donations, providing detailed information on needs, and predicting
        future crises. It targets anyone wishing to combat poverty, leveraging
        JavaScript and RapidMiner for its web platform. The project’s
        significance lies in its potential to enhance the impact of donations
        and raise awareness about global poverty issues.
      </Trans>
    ),
    link: 'https://github.com/Ejmen-Ramic/Ejmen-Ramic-1723715--FYP-2/tree/main/Website%20FYP',
  },
  {
    name: <Trans>Project V4</Trans>,
    year: '2023',
    location: <Trans>FLUX, Malaysia</Trans>,
    description: (
      <Trans>
        I worked on a project called Project V4, where my role as a software
        engineer involved converting and rewriting old JavaScript code and
        outdated packages into the latest TypeScript, React, Chakra UI and
        improved server side rendering of Next.js. I managed this project
        alongside one colleague, and together we completed it within three
        months. The project was a success, requiring us to write thousands of
        lines of code to achieve our goals. Currently FLUX website is the
        fastest in Asia.
      </Trans>
    ),
    link: 'https://driveflux.com/?gad_source=1&gclid=Cj0KCQjwsaqzBhDdARIsAK2gqnf2PVMfSxxcXp7uwY_aOgNpoaY7jhjSYuKAhxG3hTbmgF3zfiPDOmYaAi8QEALw_wcB',
    gallery: <ImageGallery images={imagesV4} />,
  },
]

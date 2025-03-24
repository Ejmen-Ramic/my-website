import { Trans } from '@lingui/macro'
import ImageGallery from './ProjectGallery'
import { adminImages, imagesV4, imagesV6 } from './ProjectGallery/Props'

export type Props = {
  name: string
  year: string
  location: string | JSX.Element
  description: string | JSX.Element
  link?: string
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
        JavaScript and RapidMiner for its web platform. The project's
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
  {
    name: <Trans>Admin Dashboard</Trans>,
    year: '2023',
    location: <Trans>FLUX, Malaysia</Trans>,
    description: (
      <Trans>
        I worked on the Admin Dashboard for Car Subscription, a comprehensive
        platform designed to manage vehicle subscriptions efficiently. The
        dashboard serves as the central hub for administrators to oversee
        subscriptions, logistics, payments, and customer interactions and much
        more. We have optimized API interactions, implemented secure
        authentication, and enhanced data-fetching strategies, leading to
        improved performance and usability. The result was a more efficient,
        responsive, and user-friendly admin system, helping FLUX manage car
        subscriptions and hosts seamlessly and scale its operations effectively.
      </Trans>
    ),
  },
  {
    name: <Trans>Project V6</Trans>,
    year: '2024',
    location: <Trans>FLUX, Malaysia</Trans>,
    description: (
      <Trans>
        I worked on Project V6, where my role as a software engineer involved a
        complete restructuring of our library and repository. We rebuilt the
        entire component and function library from scratch using ShadCN and
        Tailwind CSS, creating a fully custom solution. Additionally, we
        restructured the operation of Next.js within our repository, improving
        its architecture and performance. We also enhanced our commit, push and
        type checking security processes, which significantly reduced errors and
        bugs. As a result of these efforts, we achieved a 2x increase in website
        speed and overall performance.
      </Trans>
    ),
    link: 'https://driveflux.com/?gad_source=1&gclid=Cj0KCQjwsaqzBhDdARIsAK2gqnf2PVMfSxxcXp7uwY_aOgNpoaY7jhjSYuKAhxG3hTbmgF3zfiPDOmYaAi8QEALw_wcB',
    gallery: <ImageGallery images={imagesV6} />,
  },
]

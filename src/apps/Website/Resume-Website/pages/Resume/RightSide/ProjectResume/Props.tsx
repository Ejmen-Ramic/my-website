import { t } from '@lingui/macro'

export type Props = {
  name: string
  year: string
  location: string
  description: string
  link: string
}

export const itemProps = [
  {
    name: t`Crypto Charity`,
    year: '2022',
    location: t`IIUM, Malaysia`,
    description: t`The "Blockchain Charity" project is a web application designed to ensure safe and transparent charitable donations via blockchain. It includes smart contract testing for donation and withdrawal transactions, and features for managing and monitoring donations and thresholds. The app uses tools like Truffle, Ganache, and MetaMask to securely handle and display transactions, helping to prevent fraud and money laundering while ensuring funds reach the intended recipients.`,
    link: 'https://github.com/Ejmen-Ramic/Blockchain-Charity',
  },
  {
    name: t`Final Year Project`,
    year: '2021 - 2022',
    location: t`IIUM, Malaysia`,
    description: t`LifeLine, a Poverty Profiling System, aims to optimize donation distribution using data mining to predict and address needs efficiently. Developed by Ejmen Ramic, the project focuses on reducing unnecessary donations, providing detailed information on needs, and predicting future crises. It targets anyone wishing to combat poverty, leveraging JavaScript and RapidMiner for its web platform. The project’s significance lies in its potential to enhance the impact of donations and raise awareness about global poverty issues.`,
    link: 'https://github.com/Ejmen-Ramic/Ejmen-Ramic-1723715--FYP-2/tree/main/Website%20FYP',
  },
  {
    name: t`Project V4`,
    year: '2023',
    location: t`FLUX Sdn. Bhd., Malaysia`,
    description: t`I worked on a project called Project V4, where my role as a software engineer involved converting and rewriting old JavaScript code and outdated packages into the latest TypeScript, React, Chakra UI and improved server side rendering of Next.js. I managed this project alongside one colleague, and together we completed it within three months. The project was a success, requiring us to write thousands of lines of code to achieve our goals. Currently FLUX website is the fastest in Asia.`,
    link: 'https://driveflux.com/?gad_source=1&gclid=Cj0KCQjwsaqzBhDdARIsAK2gqnf2PVMfSxxcXp7uwY_aOgNpoaY7jhjSYuKAhxG3hTbmgF3zfiPDOmYaAi8QEALw_wcB',
  },
]

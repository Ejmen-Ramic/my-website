import { chakra, SimpleGrid, VStack } from '@chakra-ui/react'
import FadeInView from '../../../../../../shared/components/Hooks/FadeInView'
import { BsPerson } from 'react-icons/bs'
import { FaAddressCard, FaCamera } from 'react-icons/fa6'
import { t, Trans } from '@lingui/macro'
import StatsCard from '.'
import { FC } from 'react'

const BasicStatistics: FC = () => {
  return (
    <VStack w={'full'} px={{ lg: 40 }} spacing={'50px'}>
      <FadeInView delay={0.1}>
        <chakra.h1 textAlign={'center'} fontSize={'36px'} fontWeight={'bold'}>
          <Trans>What are the website achievements?</Trans>
        </chakra.h1>
      </FadeInView>
      <SimpleGrid
        w={'full'}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard
          title={t`Visitors`}
          stat={'2450 website visitors'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={t`Registered`}
          stat={'900 registered users'}
          icon={<FaAddressCard size={'3em'} />}
        />
        <StatsCard
          title={t`Photographs`}
          stat={'400 high quality images'}
          icon={<FaCamera size={'3em'} />}
        />
      </SimpleGrid>
    </VStack>
  )
}

export default BasicStatistics

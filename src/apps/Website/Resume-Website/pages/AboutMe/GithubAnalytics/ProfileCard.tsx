import React from 'react';
import { Avatar, Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface ProfileCardProps {
  profile: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
  };
  MainBGColor: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, MainBGColor }) => {
  return (
    <VStack alignItems='start' bg={MainBGColor} rounded='lg' shadow='md' p={6}>
      <Flex gap='32px'>
        <Avatar src={profile.avatar_url} name={profile.name} size='xl' />
        <VStack alignItems='start' gap='8px'>
          <Heading as='h2' size='lg'>
            {profile.name}
          </Heading>
          <Text>@{profile.login}</Text>
          <Text fontSize='sm'>{profile.bio}</Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default ProfileCard;

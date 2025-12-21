import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Test = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const isLimitReached = skills.length > 1;
  const TOTAL_SKILLS = 4;
  const allSelected = skills.length === TOTAL_SKILLS;
  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }

    if (value !== 'Select All') {
      if (checked) setSkills([...skills, value]);
      else setSkills(skills.filter((s) => s !== value));
    }
    if (value === 'Select All') {
      setSkills(checked ? ['React', 'Typescript', 'Node.js', 'CSS'] : []);
    }
  };

  return (
    <Stack>
      <Checkbox
        isChecked={allSelected}
        value={'Select All'}
        onChange={handleSkills}
      >
        Select All
      </Checkbox>
      <Checkbox
        value={'React'}
        onChange={handleSkills}
        isChecked={skills.includes('React')}
        isDisabled={isLimitReached && !skills.includes('React')}
      >
        React
      </Checkbox>
      <Checkbox
        value={'Typescript'}
        onChange={handleSkills}
        isChecked={skills.includes('Typescript')}
        isDisabled={isLimitReached && !skills.includes('Typescript')}
      >
        Typescript
      </Checkbox>
      <Checkbox
        value={'Node.js'}
        onChange={handleSkills}
        isChecked={skills.includes('Node.js')}
        isDisabled={isLimitReached && !skills.includes('Node.js')}
      >
        Node.js
      </Checkbox>
      <Checkbox
        value={'CSS'}
        onChange={handleSkills}
        isChecked={skills.includes('CSS')}
        isDisabled={isLimitReached && !skills.includes('CSS')}
      >
        CSS
      </Checkbox>
      <Stack>
        <Text>
          Selected skills: {skills.length ? skills.join(', ') : 'None selected'}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Test;

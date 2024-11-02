import { View, Text, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0B3948',
    textTransform: 'capitalize',
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },
  skillName: {
    width: '40%',
    fontSize: 10,
    fontWeight: 'medium',
  },
  dotsContainer: {
    flexDirection: 'row',
    width: '60%',
    gap: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  filledDot: {
    backgroundColor: '#0b3948',
  },
  emptyDot: {
    backgroundColor: '#8d9da7',
  },
})

// Skill level type
const skillLevel = [
  'Novice',
  'Beginner',
  'Intermediate',
  'Proficient',
  'Advanced',
] as const
type SkillLevel = (typeof skillLevel)[number]

// Item type
type Item = {
  name: string
  level: SkillLevel[]
}

// Props type
type SkillsTablePDFProps = {
  title: string
  items: Item[]
}

// Component
const SkillsTablePDF: React.FC<SkillsTablePDFProps> = ({ title, items }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((item, index) => (
      <View key={index} style={styles.skillRow}>
        <Text style={styles.skillName}>{item.name}</Text>
        <View style={styles.dotsContainer}>
          {skillLevel.map((skill, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                item.level.includes(skill) ? styles.filledDot : styles.emptyDot,
              ]}
            />
          ))}
        </View>
      </View>
    ))}
  </View>
)

// Usage example with your existing data
const ProgrammingSkills = () => {
  const programmingItems: Item[] = [
    {
      name: 'React',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'Chakra UI',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'HTML/CSS',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    // ... rest of your programming items
  ]

  return <SkillsTablePDF title='Programming' items={programmingItems} />
}

const ToolsSkills = () => {
  const toolsItems: Item[] = [
    {
      name: 'GitHub',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'Wordpress',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    // ... rest of your tools items
  ]

  return <SkillsTablePDF title='Tools' items={toolsItems} />
}

const OSSkills = () => {
  const osItems: Item[] = [
    {
      name: 'Windows',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'Linux',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    // ... rest of your OS items
  ]

  return <SkillsTablePDF title='Operating Systems' items={osItems} />
}

const DesignSkills = () => {
  const designItems: Item[] = [
    {
      name: 'Adobe Lightroom',
      level: ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Advanced'],
    },
    {
      name: 'Adobe Photoshop',
      level: ['Novice', 'Beginner', 'Intermediate'],
    },
    // ... rest of your design items
  ]

  return <SkillsTablePDF title='Graphics Design' items={designItems} />
}

export {
  SkillsTablePDF,
  ProgrammingSkills,
  ToolsSkills,
  OSSkills,
  DesignSkills,
}

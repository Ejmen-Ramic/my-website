// PDFResume.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import { resumeItems } from '../LeftSide/items'
import { SkillsTablePDF } from '../LeftSide/PdfSkills'
import PDFEducation from '../RightSide/Education/PDFEducation'

// Register fonts if needed
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  leftSection: {
    width: '30%',
    padding: 20,
    backgroundColor: '#CDDFDA',
  },
  rightSection: {
    width: '70%',
    padding: 20,
  },
  header: {
    backgroundColor: '#0b3948',
    padding: 20,
    color: '#FFFFFF',
  },
  headerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: 'medium',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 5,
    fontSize: 10,
  },
  skillTable: {
    marginTop: 10,
  },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillName: {
    width: '50%',
    fontSize: 10,
  },
  skillLevel: {
    flexDirection: 'row',
    width: '50%',
  },
  skillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 2,
  },
})

// PDF Document Component
const PDFResume = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerName}>Ejmen Ramic</Text>
        <Text style={styles.headerTitle}>
          Programming Enthusiast. Software & Quality Assurance Engineer.
        </Text>
      </View>

      {/* Left Side */}
      <View style={styles.leftSection}>
        {/* Contact Section */}
        <Text style={styles.sectionTitle}>Contact</Text>
        {resumeItems.map((item, index) => (
          <View key={index} style={styles.contactItem}>
            <Text>{item.socialMedia}</Text>
          </View>
        ))}

        {/* Skills Section */}
        <SkillsTablePDF title={''} items={[]} />
        {/* Add your skills sections here */}
      </View>

      {/* Right Side */}
      <View style={styles.rightSection}>
        {/* Education Section */}
        <PDFEducation />
        {/* Professional Experience Section */}
        {/* Projects Section */}
        {/* Extra Curriculum Section */}
      </View>
    </Page>
  </Document>
)

export default PDFResume

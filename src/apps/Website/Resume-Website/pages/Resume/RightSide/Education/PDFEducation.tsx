// PDFEducation.tsx
import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { t } from '@lingui/macro'

// Create styles
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B3948',
    textTransform: 'uppercase',
  },
  divider: {
    height: 2,
    backgroundColor: '#000000',
    width: '100%',
    marginBottom: 15,
  },
  educationItem: {
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftColumn: {
    flexDirection: 'column',
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  smallText: {
    fontSize: 12,
    color: '#000000',
  },
  experience: {
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'right',
  },
  description: {
    fontSize: 12,
    paddingLeft: 20,
    color: '#000000',
  },
})

// Education item type
type EducationItem = {
  year: string
  location: string
  experience: string
  description: string
}

// Education data
const educationItems: EducationItem[] = [
  {
    year: t`2019 - 2023`,
    location: t`Sarajevo, Bosnia and Herzegovina`,
    experience: t`International University of Sarajevo`,
    description: t`Bachelor's degree in Software Engineering`,
  },
  {
    year: t`2015 - 2019`,
    location: t`Sarajevo, Bosnia and Herzegovina`,
    experience: t`High School of Electrical Engineering`,
    description: t`Computer Science and Informatics`,
  },
]

const PDFEducation = () => (
  <View style={styles.section}>
    {/* Section Header */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Education</Text>
    </View>

    {/* Divider */}
    <View style={styles.divider} />

    {/* Education Items */}
    {educationItems.map((item, index) => (
      <View key={index} style={styles.educationItem}>
        <View style={styles.itemHeader}>
          {/* Left Column - Year and Location */}
          <View style={styles.leftColumn}>
            <View style={styles.infoRow}>
              {/* Calendar Icon would be here */}
              <Text style={styles.smallText}>{item.year}</Text>
            </View>
            <View style={styles.infoRow}>
              {/* Location Icon would be here */}
              <Text style={styles.smallText}>{item.location}</Text>
            </View>
          </View>

          {/* Right Column - Experience */}
          <View style={styles.rightColumn}>
            <Text style={styles.experience}>{item.experience}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{item.description}</Text>
      </View>
    ))}
  </View>
)

export default PDFEducation

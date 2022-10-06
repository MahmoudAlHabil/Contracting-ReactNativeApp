import { View, Text } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../utils'
import styles from './styles'


const AboutUs = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={Icons.aboutUsIcon} />
      <Text style={styles.mainText}>من نحن</Text>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من
          اعمال الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب
          الكهرباء والسباكة والنجارة واعمال السيراميك والرخام والواجهات
          والدهانات.
        </Text>
        <Text style={styles.text}>نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب
          العقارات والوحدات السكنية والشركات والهيئات والمؤسسات
          الحكومية وغيرها من الوحدات وتركيب كافة الخدمات واعمال
          التشطيبات الكاملة.
        </Text>
        <Text style={styles.text}>نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب
          المتطورة والاشكال العصرية.</Text>
      </View>
    </View>
  )
}

export default AboutUs
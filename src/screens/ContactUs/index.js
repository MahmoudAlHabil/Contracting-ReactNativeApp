import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Header } from '../../components'

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Header title='تواصل معنا' />
      <Image source={require('../../../assets/scan.png')} style={styles.image} />
      <View>
        <Text style={styles.boldText}>تواصل معنا على:</Text>
        <Text style={styles.text}>infa@afaa8.com</Text>
        <Text style={styles.text}>0096652709005</Text>
        <Text style={styles.text}>العنوان: المملكة العربية السعودية</Text>
      </View>
    </View>
  )
}

export default ContactUs
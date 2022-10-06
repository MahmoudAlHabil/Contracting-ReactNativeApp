import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = ({ title }) => {
    return (
        <View>
            <View style={styles.headerShape} />
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
}

export default Header
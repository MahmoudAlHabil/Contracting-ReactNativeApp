import { View, Text, ScrollView, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../utils'
import styles from './styles'
import { Button } from '../../components'

const Onboarding = ({ navigation }) => {
    const { width } = useWindowDimensions()
    const [page, setPage] = useState(0)

    const handleOnScroll = (event) => {
        parseInt(event.nativeEvent.contentOffset.x) >= parseInt(width) / 2 ? setPage(1) : setPage(0)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                disableIntervalMomentum
                onScroll={(e) => handleOnScroll(e)}
                showsHorizontalScrollIndicator={false}>
                <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}><SvgXml xml={Icons.logo1} /></View>
                <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}><SvgXml xml={Icons.logo2} /></View>
            </ScrollView>

            {page == 1 ? <View style={styles.bullets}>
                <Text style={styles.primaryBullet}>{'\u25CF'}</Text>
                <Text style={styles.grayBullet}>{'\u25CF'}</Text>
            </View> : <View style={styles.bullets}>
                <Text style={styles.grayBullet}>{'\u25CF'}</Text>
                <Text style={styles.primaryBullet}>{'\u25CF'}</Text>
            </View>}
            <Button title="تخطي" buttonStyle={styles.button} titleStyle={styles.title}
                onPress={() => navigation.navigate('HomeTab')} />
        </View>
    )
}

export default Onboarding
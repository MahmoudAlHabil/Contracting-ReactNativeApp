import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetails = (props) => {
    const data = props.route.params;
  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
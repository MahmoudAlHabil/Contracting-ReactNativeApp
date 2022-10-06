import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../utils'
import styles from './styles'
import { Header } from '../../components'

const DATA = [
    { id: 1, title1: 'التعريف', title2: 'بقطاع المقاولات', icon: Icons.homeIcons.one },
    { id: 2, title1: 'متطلبات تأسيس', title2: 'منشاة مقاولات', icon: Icons.homeIcons.two },
    { id: 3, title1: 'تراخيص مزاولة', title2: 'نشاط المقاولات', icon: Icons.homeIcons.three },
    { id: 4, title1: 'قواعد وإجراءات', title2: 'أساسية بشأن التعاقد', icon: Icons.homeIcons.four },
    { id: 5, title1: 'الجهات', title2: 'ذات العلاقة', icon: Icons.homeIcons.five },
    { id: 6, title1: 'منصات الكترونية', title2: 'في خدمة المقاول', icon: Icons.homeIcons.six },
    { id: 7, title1: 'خطة عمل المشروعات', title2: 'وتدفقاتها المالية', icon: Icons.homeIcons.seven },
    { id: 8, title1: 'آليات تسليم', title2: 'مشاريع المقاولات', icon: Icons.homeIcons.eight },
    { id: 9, title1: 'أنظمة', title2: 'عقود المقاولات', icon: Icons.homeIcons.nine },
    { id: 10, title1: 'علاقة المقاول مع', title2: 'مكاتب إجراءات السلامة', icon: Icons.homeIcons.ten },
    { id: 11, title1: 'الجانب', title2: 'الاجتماعي والوطني', icon: Icons.homeIcons.eleven },
    { id: 12, title1: 'لجنة المقاولات: رسالتها', title2: '-أهدافها–إنجازاتها', icon: Icons.homeIcons.twelve },
]

const Item = ({ title1, title2, icon }) => (
    <TouchableOpacity style={styles.item}>
        <View style={styles.icon}>
            <SvgXml xml={icon} />
        </View>
        <View>
            <Text style={styles.title}>{title1}</Text>
            <Text style={styles.title}>{title2}</Text>
        </View>
    </TouchableOpacity>
);

const HeaderList = <View><Header title='المقاولات' /><Text style={styles.indexText}>الفهرس</Text></View>
const renderItem = ({ item }) => <Item title1={item.title1} title2={item.title2}  icon={item.icon} />

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns='2'
                ListHeaderComponent={HeaderList}
                contentContainerStyle={styles.containerFlatList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home
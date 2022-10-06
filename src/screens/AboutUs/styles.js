import { ScaledSheet } from 'react-native-size-matters'
import { Colors, Fonts } from '../../utils';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: 100,
  },
  mainText: {
    fontSize: 29,
    lineHeight: 35,
    fontFamily: Fonts.SemiBold,
    color: Colors.gray,
    marginTop: 56,
    marginBottom: 51,
  },
  wrapperText: {
    paddingHorizontal: 15,

  },
  text: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: Fonts.Regular,
    color: Colors.darkGray,
    marginTop: 24,
  }
})

export default styles;
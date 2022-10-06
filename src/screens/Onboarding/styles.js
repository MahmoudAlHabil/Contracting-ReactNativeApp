import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters'
import { Colors, Fonts } from '../../utils';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bullets: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 185,
  },
  primaryBullet: {
    color: Colors.primary,
    marginHorizontal: 2,
    fontSize: 24,
  },
  grayBullet: {
    color: Colors.gray,
    marginHorizontal: 2,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    width: 80,
    height: 40,
    borderRadius: 8,
    alignSelf: 'flex-end',
    bottom: 20,
    right: 20,
  },
  title: {
    color: Colors.primary,
    fontFamily: Fonts.SemiBold,
  }
})

export default styles;
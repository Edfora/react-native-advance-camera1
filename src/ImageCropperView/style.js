import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },
  middleTileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  imageCropper: {
    alignSelf: 'center',
    // marginTop: 12,
  },
  tileMargin: {
    marginVertical: 10,
  },

  titleTextStyle: {
    color: 'rgb(0, 0, 0)',
    textAlign: 'left',
    fontSize: 16,
  },
  wrapperPadding: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  iconSize: {
    height: '100%',
    width: '100%',
  },
  iconWrapper: {
    height: 20,
    width: 20,
  },
  blurIconWrapper: {
    height: 20,
    width: 23,
  },
  iconMarginLeft: {
    marginLeft: 5,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomViewWrapper: {
    height: '100%',
    backgroundColor: '#000',
  },
  buttonsStyle: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  footerBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonMarginTop: {
    marginTop: -10,
  },
  bottomTopTextStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18
  },
  bottomTextStyle: {
    color: 'rgb(255, 255, 255)'
  },
})
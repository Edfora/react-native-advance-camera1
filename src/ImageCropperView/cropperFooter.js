import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Styles from './style'
import { TOUCHABLE_ACTIVE_OPACITY } from '../utils'

export default class CropperFooter extends Component {
  renderTopTile = () => {
    const { bottomTopTextStyle, tileMargin, wrapperPadding } = Styles
    return (
      <View style={[tileMargin, wrapperPadding]}>
        <Text style={bottomTopTextStyle}>Is this photo clear?</Text>
      </View>
    )
  }

  renderButtons = () => {
    const { goBackFrom, onDone } = this.props
    const { buttonMarginTop, footerBtnContainer, bottomTextStyle } = Styles
    return (
      <View style={footerBtnContainer}>
        <View style={buttonMarginTop}>
          <TouchableOpacity
            activeOpacity={TOUCHABLE_ACTIVE_OPACITY}
            onPress={onDone}
          >
            <Text style={bottomTextStyle}>YES, LOOKS GOOD</Text>
          </TouchableOpacity>
        </View>
        <View style={buttonMarginTop}>
          <TouchableOpacity
            activeOpacity={TOUCHABLE_ACTIVE_OPACITY}
            onPress={() => goBackFrom('CROP_VIEW')}
          >
            <Text style={bottomTextStyle}>TAKE ANOTHER PHOTO</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderBottomView = () => {
    const { bottomViewWrapper, buttonsStyle } = Styles

    return (
      <View style={bottomViewWrapper}>
        <View>
          {this.renderTopTile()}
        </View>
        <View style={buttonsStyle}>
          {this.renderButtons()}
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.renderBottomView()}
      </View>
    )
  }
}

CropperFooter.propTypes = {
  goBackFrom: PropTypes.func.isRequired,
  onDone: PropTypes.func,
}

CropperFooter.defaultProps = {
  onDone: () => {},
}

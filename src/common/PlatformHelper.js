/**
 * @flow
 */

import { StyleSheey, Platform } from 'react-native';

export const PlateformStyleSheet = (styles: Object): Object => {
	const platformStyles = {};
	Object.keys(styles).forEach((name) => {
		let { ios, android, ...style } = { ...styles[name] };
	  	if (ios && Platform.OS === 'ios') {
			style = { ...style, ...ios };
	  	}
	  	if (android && Platform.OS === 'android') {
			style = { ...style, ...android };
	  	}
	  	platformStyles[name] = style;
	});
	return StyleSheet.create(platformStyles);
};
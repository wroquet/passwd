import I18n from 'react-native-i18n';
import en from './en';
import fr from './fr';

I18n.fallbacks = true;

I18n.translations = {
	en,
	fr
};

const AppString = {
	passwd_test: I18n.t('passwd_test')
};

export default AppString;
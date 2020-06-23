import { NativeModules } from 'react-native';

const { ChangeIcon } = NativeModules;

const changeIcon = enableIcon => ChangeIcon.changeIcon(enableIcon);
const getCurrentIcon = () => ChangeIcon.getCurrentIcon();

export { changeIcon,getCurrentIcon };

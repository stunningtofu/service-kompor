import * as FaIcons from 'react-icons/fa'

export default function IconRenderer({ iconName, className, ...props }) {
  const IconComponent = FaIcons[iconName];
  if (!IconComponent) {
    // Fallback icon jika tidak ditemukan
    return <FaIcons.FaQuestionCircle className={className} {...props} />;
  }
  return <IconComponent className={className} {...props} />;
}

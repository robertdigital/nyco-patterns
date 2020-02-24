/**
 * Dependencies
 */

const package = require('../package.json');
const colors = require('./colors');

/**
 * Config
 */

const variables = {
  animate: {
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'animate-scss-speed': '0.75s',
    'animate-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'
  },
  borderRadius: {
    'none': '0',
    'default': '1px'
  },
  borderWidth: {
    '0': '0',
    'default': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  },
  boxShadow: {
    'none': 'none',
    'up-transparent': '8px 8px 0px 0px rgba(47, 51, 79, 0)',
    'up': '8px 8px 0px 0px',
    'up-2-transparent': '16px 16px 0px 0px rgba(47, 51, 79, 0)',
    'up-2': '16px 16px 0px 0px'
  },
  colors: colors.colors,
  colorCombinations: colors.colorCombinations,
  cdn: '"https://cdn.jsdelivr.net/gh/CityOfNewYork/nyco-patterns@v' + package.version + '/dist"',
  fontFamily: {
    'system': [
      '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
      'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'
    ],
    'code': [
      'monospace'
    ],
    'nycgov': [
      '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'
    ],
    'default-sans': [
      '"Noto Sans"', 'sans-serif'
    ],
    'default-serif': [
      '"Noto Serif"', 'serif'
    ]
  },
  fontWeight: {
    'normal': 'normal',
    'bold': 'bold',
    'jumbo': 'normal',
    'h1': 'bold',
    'h2': 'normal',
    'h3': 'normal',
    'h4': 'bold',
    'h5': 'bold',
    'h6': 'bold',
    'html': 'normal',
    'code': 'normal',
    'small': 'normal',
    'blockquote': 'bold'
  },
  fontSize: {
    'jumbo': '3em',
    'h1': '2.488em',
    'h2': '2.074em',
    'h3': '1.728em',
    'h4': '1.44em',
    'h5': '1.2em',
    'h6': '1em',
    'html': '16px',
    'code': '1em',
    'small': '0.833em',
    'blockquote': '2.074em'
  },
  grid: '8px',
  icons: {
    'icon-logo-nyc': '350px 117px',
    'icon-logo-nyco-secondary': '694px 76px',
    'icon-logo-nyco': '692px 358px',
    'icon-logo-primary': '693px 313px',
    'icon-logo-secondary': '692px 121px',
    'icon-ui-activity': '24px 24px',
    'icon-ui-airplay': '24px 24px',
    'icon-ui-alert-circle': '24px 24px',
    'icon-ui-alert-octagon': '24px 24px',
    'icon-ui-alert-triangle': '24px 24px',
    'icon-ui-align-center': '24px 24px',
    'icon-ui-align-justify': '24px 24px',
    'icon-ui-align-left': '24px 24px',
    'icon-ui-align-right': '24px 24px',
    'icon-ui-anchor': '24px 24px',
    'icon-ui-aperture': '24px 24px',
    'icon-ui-archive': '24px 24px',
    'icon-ui-arrow-down-circle': '24px 24px',
    'icon-ui-arrow-down-left': '24px 24px',
    'icon-ui-arrow-down-right': '24px 24px',
    'icon-ui-arrow-down': '24px 24px',
    'icon-ui-arrow-left-circle': '24px 24px',
    'icon-ui-arrow-left': '24px 24px',
    'icon-ui-arrow-right-circle': '24px 24px',
    'icon-ui-arrow-right': '24px 24px',
    'icon-ui-arrow-up-circle': '24px 24px',
    'icon-ui-arrow-up-left': '24px 24px',
    'icon-ui-arrow-up-right': '24px 24px',
    'icon-ui-arrow-up': '24px 24px',
    'icon-ui-at-sign': '24px 24px',
    'icon-ui-award': '24px 24px',
    'icon-ui-bar-chart-2': '24px 24px',
    'icon-ui-bar-chart': '24px 24px',
    'icon-ui-battery-charging': '24px 24px',
    'icon-ui-battery': '24px 24px',
    'icon-ui-bell-off': '24px 24px',
    'icon-ui-bell': '24px 24px',
    'icon-ui-bluetooth': '24px 24px',
    'icon-ui-bold': '24px 24px',
    'icon-ui-book-open': '24px 24px',
    'icon-ui-book': '24px 24px',
    'icon-ui-bookmark': '24px 24px',
    'icon-ui-box': '24px 24px',
    'icon-ui-briefcase': '24px 24px',
    'icon-ui-calendar': '24px 24px',
    'icon-ui-camera-off': '24px 24px',
    'icon-ui-camera': '24px 24px',
    'icon-ui-cast': '24px 24px',
    'icon-ui-check-circle': '24px 24px',
    'icon-ui-check-navy': '24px 24px',
    'icon-ui-check-red': '24px 24px',
    'icon-ui-check-square': '24px 24px',
    'icon-ui-check-white': '24px 24px',
    'icon-ui-check': '24px 24px',
    'icon-ui-chevron-down-navy': '24px 24px',
    'icon-ui-chevron-down-red': '24px 24px',
    'icon-ui-chevron-down-white': '24px 24px',
    'icon-ui-chevron-down': '24px 24px',
    'icon-ui-chevron-left': '24px 24px',
    'icon-ui-chevron-right': '24px 24px',
    'icon-ui-chevron-up': '24px 24px',
    'icon-ui-chevrons-down': '24px 24px',
    'icon-ui-chevrons-left': '24px 24px',
    'icon-ui-chevrons-right': '24px 24px',
    'icon-ui-chevrons-up': '24px 24px',
    'icon-ui-chrome': '24px 24px',
    'icon-ui-circle': '24px 24px',
    'icon-ui-clipboard': '24px 24px',
    'icon-ui-clock': '24px 24px',
    'icon-ui-cloud-drizzle': '24px 24px',
    'icon-ui-cloud-lightning': '24px 24px',
    'icon-ui-cloud-off': '24px 24px',
    'icon-ui-cloud-rain': '24px 24px',
    'icon-ui-cloud-snow': '24px 24px',
    'icon-ui-cloud': '24px 24px',
    'icon-ui-code': '24px 24px',
    'icon-ui-codepen': '24px 24px',
    'icon-ui-codesandbox': '24px 24px',
    'icon-ui-coffee': '24px 24px',
    'icon-ui-columns': '24px 24px',
    'icon-ui-command': '24px 24px',
    'icon-ui-compass': '24px 24px',
    'icon-ui-copy': '24px 24px',
    'icon-ui-corner-down-left': '24px 24px',
    'icon-ui-corner-down-right': '24px 24px',
    'icon-ui-corner-left-down': '24px 24px',
    'icon-ui-corner-left-up': '24px 24px',
    'icon-ui-corner-right-down': '24px 24px',
    'icon-ui-corner-right-up': '24px 24px',
    'icon-ui-corner-up-left': '24px 24px',
    'icon-ui-corner-up-right': '24px 24px',
    'icon-ui-cpu': '24px 24px',
    'icon-ui-credit-card': '24px 24px',
    'icon-ui-crop': '24px 24px',
    'icon-ui-crosshair': '24px 24px',
    'icon-ui-database': '24px 24px',
    'icon-ui-delete': '24px 24px',
    'icon-ui-disc': '24px 24px',
    'icon-ui-dollar-sign': '24px 24px',
    'icon-ui-download-cloud': '24px 24px',
    'icon-ui-download': '24px 24px',
    'icon-ui-droplet': '24px 24px',
    'icon-ui-edit-2': '24px 24px',
    'icon-ui-edit-3': '24px 24px',
    'icon-ui-edit': '24px 24px',
    'icon-ui-external-link': '24px 24px',
    'icon-ui-eye-off': '24px 24px',
    'icon-ui-eye': '24px 24px',
    'icon-ui-facebook': '24px 24px',
    'icon-ui-fast-forward': '24px 24px',
    'icon-ui-feather': '24px 24px',
    'icon-ui-figma': '24px 24px',
    'icon-ui-file-minus': '24px 24px',
    'icon-ui-file-plus': '24px 24px',
    'icon-ui-file-text': '24px 24px',
    'icon-ui-file': '24px 24px',
    'icon-ui-film': '24px 24px',
    'icon-ui-filter': '24px 24px',
    'icon-ui-flag': '24px 24px',
    'icon-ui-folder-minus': '24px 24px',
    'icon-ui-folder-plus': '24px 24px',
    'icon-ui-folder': '24px 24px',
    'icon-ui-framer': '24px 24px',
    'icon-ui-frown': '24px 24px',
    'icon-ui-gift': '24px 24px',
    'icon-ui-git-branch': '24px 24px',
    'icon-ui-git-commit': '24px 24px',
    'icon-ui-git-merge': '24px 24px',
    'icon-ui-git-pull-request': '24px 24px',
    'icon-ui-github': '24px 24px',
    'icon-ui-gitlab': '24px 24px',
    'icon-ui-globe': '24px 24px',
    'icon-ui-grid': '24px 24px',
    'icon-ui-hard-drive': '24px 24px',
    'icon-ui-hash': '24px 24px',
    'icon-ui-headphones': '24px 24px',
    'icon-ui-heart': '24px 24px',
    'icon-ui-help-circle': '24px 24px',
    'icon-ui-hexagon': '24px 24px',
    'icon-ui-home': '24px 24px',
    'icon-ui-image': '24px 24px',
    'icon-ui-inbox': '24px 24px',
    'icon-ui-info': '24px 24px',
    'icon-ui-instagram': '24px 24px',
    'icon-ui-italic': '24px 24px',
    'icon-ui-key': '24px 24px',
    'icon-ui-layers': '24px 24px',
    'icon-ui-layout': '24px 24px',
    'icon-ui-life-buoy': '24px 24px',
    'icon-ui-link-2': '24px 24px',
    'icon-ui-link': '24px 24px',
    'icon-ui-linkedin': '24px 24px',
    'icon-ui-list': '24px 24px',
    'icon-ui-loader': '24px 24px',
    'icon-ui-lock': '24px 24px',
    'icon-ui-log-in': '24px 24px',
    'icon-ui-log-out': '24px 24px',
    'icon-ui-mail': '24px 24px',
    'icon-ui-map-pin': '24px 24px',
    'icon-ui-map': '24px 24px',
    'icon-ui-maximize-2': '24px 24px',
    'icon-ui-maximize': '24px 24px',
    'icon-ui-meh': '24px 24px',
    'icon-ui-menu': '24px 24px',
    'icon-ui-message-circle': '24px 24px',
    'icon-ui-message-square': '24px 24px',
    'icon-ui-mic-off': '24px 24px',
    'icon-ui-mic': '24px 24px',
    'icon-ui-minimize-2': '24px 24px',
    'icon-ui-minimize': '24px 24px',
    'icon-ui-minus-circle': '24px 24px',
    'icon-ui-minus-square': '24px 24px',
    'icon-ui-minus': '24px 24px',
    'icon-ui-monitor': '24px 24px',
    'icon-ui-moon': '24px 24px',
    'icon-ui-more-horizontal': '24px 24px',
    'icon-ui-more-vertical': '24px 24px',
    'icon-ui-mouse-pointer': '24px 24px',
    'icon-ui-move': '24px 24px',
    'icon-ui-music': '24px 24px',
    'icon-ui-navigation-2': '24px 24px',
    'icon-ui-navigation': '24px 24px',
    'icon-ui-octagon': '24px 24px',
    'icon-ui-package': '24px 24px',
    'icon-ui-paperclip': '24px 24px',
    'icon-ui-pause-circle': '24px 24px',
    'icon-ui-pause': '24px 24px',
    'icon-ui-pen-tool': '24px 24px',
    'icon-ui-percent': '24px 24px',
    'icon-ui-phone-call': '24px 24px',
    'icon-ui-phone-forwarded': '24px 24px',
    'icon-ui-phone-incoming': '24px 24px',
    'icon-ui-phone-missed': '24px 24px',
    'icon-ui-phone-off': '24px 24px',
    'icon-ui-phone-outgoing': '24px 24px',
    'icon-ui-phone': '24px 24px',
    'icon-ui-pie-chart': '24px 24px',
    'icon-ui-play-circle': '24px 24px',
    'icon-ui-play': '24px 24px',
    'icon-ui-plus-circle': '24px 24px',
    'icon-ui-plus-square': '24px 24px',
    'icon-ui-plus': '24px 24px',
    'icon-ui-pocket': '24px 24px',
    'icon-ui-power': '24px 24px',
    'icon-ui-printer': '24px 24px',
    'icon-ui-radio': '24px 24px',
    'icon-ui-refresh-ccw': '24px 24px',
    'icon-ui-refresh-cw': '24px 24px',
    'icon-ui-repeat': '24px 24px',
    'icon-ui-rewind': '24px 24px',
    'icon-ui-rotate-ccw': '24px 24px',
    'icon-ui-rotate-cw': '24px 24px',
    'icon-ui-rss': '24px 24px',
    'icon-ui-save': '24px 24px',
    'icon-ui-scissors': '24px 24px',
    'icon-ui-search': '24px 24px',
    'icon-ui-send': '24px 24px',
    'icon-ui-server': '24px 24px',
    'icon-ui-settings': '24px 24px',
    'icon-ui-share-2': '24px 24px',
    'icon-ui-share': '24px 24px',
    'icon-ui-shield-off': '24px 24px',
    'icon-ui-shield': '24px 24px',
    'icon-ui-shopping-bag': '24px 24px',
    'icon-ui-shopping-cart': '24px 24px',
    'icon-ui-shuffle': '24px 24px',
    'icon-ui-sidebar': '24px 24px',
    'icon-ui-skip-back': '24px 24px',
    'icon-ui-skip-forward': '24px 24px',
    'icon-ui-slack': '24px 24px',
    'icon-ui-slash': '24px 24px',
    'icon-ui-sliders': '24px 24px',
    'icon-ui-smartphone': '24px 24px',
    'icon-ui-smile': '24px 24px',
    'icon-ui-speaker': '24px 24px',
    'icon-ui-square': '24px 24px',
    'icon-ui-star': '24px 24px',
    'icon-ui-stop-circle': '24px 24px',
    'icon-ui-sun': '24px 24px',
    'icon-ui-sunrise': '24px 24px',
    'icon-ui-sunset': '24px 24px',
    'icon-ui-tablet': '24px 24px',
    'icon-ui-tag': '24px 24px',
    'icon-ui-target': '24px 24px',
    'icon-ui-terminal': '24px 24px',
    'icon-ui-thermometer': '24px 24px',
    'icon-ui-thumbs-down': '24px 24px',
    'icon-ui-thumbs-up': '24px 24px',
    'icon-ui-toggle-left': '24px 24px',
    'icon-ui-toggle-right': '24px 24px',
    'icon-ui-tool': '24px 24px',
    'icon-ui-trash-2': '24px 24px',
    'icon-ui-trash': '24px 24px',
    'icon-ui-trello': '24px 24px',
    'icon-ui-trending-down': '24px 24px',
    'icon-ui-trending-up': '24px 24px',
    'icon-ui-triangle': '24px 24px',
    'icon-ui-truck': '24px 24px',
    'icon-ui-tv': '24px 24px',
    'icon-ui-twitch': '24px 24px',
    'icon-ui-twitter': '24px 24px',
    'icon-ui-type': '24px 24px',
    'icon-ui-umbrella': '24px 24px',
    'icon-ui-underline': '24px 24px',
    'icon-ui-unlock': '24px 24px',
    'icon-ui-upload-cloud': '24px 24px',
    'icon-ui-upload': '24px 24px',
    'icon-ui-user-check': '24px 24px',
    'icon-ui-user-minus': '24px 24px',
    'icon-ui-user-plus': '24px 24px',
    'icon-ui-user-x': '24px 24px',
    'icon-ui-user': '24px 24px',
    'icon-ui-users': '24px 24px',
    'icon-ui-video-off': '24px 24px',
    'icon-ui-video': '24px 24px',
    'icon-ui-voicemail': '24px 24px',
    'icon-ui-volume-1': '24px 24px',
    'icon-ui-volume-2': '24px 24px',
    'icon-ui-volume-x': '24px 24px',
    'icon-ui-volume': '24px 24px',
    'icon-ui-watch': '24px 24px',
    'icon-ui-wifi-off': '24px 24px',
    'icon-ui-wifi': '24px 24px',
    'icon-ui-wind': '24px 24px',
    'icon-ui-x-circle': '24px 24px',
    'icon-ui-x-octagon': '24px 24px',
    'icon-ui-x-square': '24px 24px',
    'icon-ui-x': '24px 24px',
    'icon-ui-youtube': '24px 24px',
    'icon-ui-zap-off': '24px 24px',
    'icon-ui-zap': '24px 24px',
    'icon-ui-zoom-in': '24px 24px',
    'icon-ui-zoom-out': '24px 24px'
  },
  iconSizes: {
    '1': '8px 8px',
    '2': '16px 16px',
    '3': '24px 24px',
    '4': '32px 32px',
    '5': '40px 40px',
    '6': '48px 48px',
    '7': '56px 56px',
    '8': '64px 64px',
    '9': '72px 72px',
    '10': '80px 80px',
    '11': '88px 88px',
    '12': '96px 96px',
    'large': '136px 136px',
    'xlarge': '256px 256px'
  },
  inputs: {
    'checkbox-size': '24px',
    'radio-size': '24px',
    'border-radius': '1px',
    'button-radius': '1px'
  },
  lineHeight: {
    'jumbo': '1.2',
    'h1': '1.2',
    'h2': '1.2',
    'h3': '1.2',
    'h4': '1.2',
    'h5': '1.2',
    'h6': '1.2',
    'html': '1.5',
    'code': '1.6',
    'small': 'normal',
    'blockquote': 'normal'
  },
  margin: {
    '-2': '-16px',
    '-1': '-8px',
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
    'auto': 'auto'
  },
  maxWidth: {
    '1/2': '50%',
    'full': '100%',
    '600': '600px',
    '900': '896px'
  },
  padding: {
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px'
  },
  screens: {
    'screen-desktop': 960,
    'screen-mobile': 480,
    'screen-tablet': 768,
    'screen-sm-mobile': 400
  },
  width: {
    '1/2': '50%',
    'full': '100%',
    '600': '600px',
    '900': '896px'
  }
};

module.exports = variables;

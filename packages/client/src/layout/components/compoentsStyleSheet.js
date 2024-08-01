//  leftNav Style

const leftNavItemSelect = {
  '.itemgradient': {
    background: 'linear-gradient(to right, #FFFFFF, #DCEBFD, #DFECFF)',
    backgroundSize: '150% 120%',
    animation: 'backgroundGradient 0.3s forwards',
    position: 'relative', // Ensure the container is positioned
    '&::after': {
      content: '""',
      clear: 'both',
      display: 'block',
      position: 'absolute',
      right: '-1px',
      top: '0',
      width: '3px',
      height: '48px',
      backgroundColor: 'rgba(var(--ab-primary-600))'
    }
  },
  '.navItemTitle': {
    fontSize: '14px' /* text-sm */,
    fontWeight: '400' /* font-normal */,
    fontFamily: 'monospace'
  },

  '.navItemTitleActive': {
    color: 'rgba(var(--ab-primary-600)) !important'
  },
  '@keyframes backgroundGradient': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '70% 100%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
  '@keyframes sideHeight': {
    '0%': {
      paddingBottom: '0px'
    },
    '100%': {
      paddingBottom: '48px'
    }
  },
  '.sider': {
    transition: 'width 0.3s linear'
  },

  '.open': {
    animation: 'sideOpenWidth 1s forwards'
  },
  '.close': {
    animation: 'sideCloseWidth 1s forwards'
  },

  '@keyframes sideCloseWidth': {
    '0%': {
      width: '240px',
      opacity: '0'
    },
    '50%': {
      width: '120px'
    },
    '100%': {
      width: '60px',
      opacity: '1'
    }
  },

  '@keyframe sideOpenWidth': {
    '0%': {
      width: '60px',
      opacity: '0'
    },
    '50%': {
      width: '120px'
    },
    '100%': {
      width: '240px',
      opacity: '1'
    }
  }
}

export default leftNavItemSelect

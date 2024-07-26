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
      backgroundColor: 'rgba(var(--ab-primary-600))',
      animation: 'sideHeight 0.5s forwards'
    }
  },
  '.navItemTitle': {
    fontSize: '14px' /* text-sm */,
    fontWeight: '400' /* font-normal */
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
  }
}

export default leftNavItemSelect

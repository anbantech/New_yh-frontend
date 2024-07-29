const newFlexLayout = {
  // row  上下左右居中
  '.ab-flex-row-center': {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'center'
  },
  // cloumn 上下左右居中
  '.ab-flex-cloumn-center': {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  },

  // row 上下居中
  '.ab-flex-row-cloumn-center': {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center'
  },

  '.ab-flex-start': {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'flex-start'
  },
  '.ab-flex-start-start': {
    display: 'flex',
    'align-items': 'flex-start',
    'justify-content': 'flex-start'
  },
  '.ab-flex-between': {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between'
  },
  '.ab-flex-start-stretch': {
    display: 'flex',
    'align-items': 'stretch',
    'justify-content': 'flex-start'
  }
}

export default newFlexLayout

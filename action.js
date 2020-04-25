export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    /* hello文字列を変更する */
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} );
    },
    
    updateHello2: (text) => {
      dispatch( {type: 'HELLO_WORLD2', hello2: text} );
    }
  }
}
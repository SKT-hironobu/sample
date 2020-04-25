export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    /* hello文字列を変更する */
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} );
    }
  }
}
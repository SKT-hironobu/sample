const initialState = {
  hello: "Hello World",
  hello2: "Hello World2",
  content: "firstcontent"
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* hello文字列を変更する */
    case 'HELLO_WORLD':
      return {
        ...state,
        hello: action.hello
      };

    case 'HELLO_WORLD2':
      return {
        ...state,
        hello2: action.hello2
      };
      
    case 'CONTENT_CHANGE':
      return {
        ...state,
        content: action.content
      };

    default:
      return state
  }
}
export default function(state=null,action){
switch(action.type){
  case 'Guitar_Selected':
  return action.payload;
}
  return state; //state will be return when there will be no action
}

// TODO
let GroceryList = (props) => (
  <ul>
    <li>{props.list[0]}</li>
    <li>{props.list[1]}</li>
  </ul>
);

let GroceryListItem = <GroceryList list={['rice', 'beef chuck']}/>;

ReactDOM.render(GroceryListItem, document.getElementById('app'));


// let Rice = () => (
//     <div>rice</div>
// );

// let BeefChuck = () => (
//   <div>beef chuck</div>
// );
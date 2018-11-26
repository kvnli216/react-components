let inputList = {
  list: ['rice', 'beef chuck']
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }; 
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

let GroceryList = (props) => (
  <ul>
    {props.list.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);




ReactDOM.render(
  <GroceryList list={inputList.list}></GroceryList>,
  document.getElementById('app')
);


// let Rice = () => (
//     <div>rice</div>
// );

// let BeefChuck = () => (
//   <div>beef chuck</div>
// );
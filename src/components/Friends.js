import React, {Component} from 'react';

class Friends extends Component {

  constructor(props) {
    super(props);

    this.friends = ["Joe", "Rodrigo","Isaac", "Luis", "Erick"];
    this.favorites = ["Luis", "Erick"];
    this.toFavorites = false;

    this.state = {
      friend: '',
      friends: this.friends,
      favorites: this.favorites,
      toFavorites: this.favorites
    };

    this.addFriend = this.addFriend.bind(this);
    this.addToFav = this.addToFav.bind(this);
    this.removeFromFav = this.removeFromFav.bind(this);
    this.updateFriendName = this.updateFriendName.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.updateToFavorites = this.updateToFavorites.bind(this);
  }

  addFriend() {
    if (this.state.friend !== '') {
      if (this.state.toFavorites) {
        this.setState({favorites: this.state.favorites.concat(this.state.friend)});
      }
      this.setState({
        friends: this.state.friends.concat(this.state.friend),
        friend: ''
      });
    }
  }

  addToFav(event) {
    this.setState({favorites: this.state.favorites.concat(event.target.value)});
  }

  removeFromFav(event) {
    var newFavorites = this.state.favorites.slice();
    newFavorites.splice(this.state.favorites.indexOf(event.target.value), 1);

    this.setState({favorites: newFavorites});
  }

  updateFriendName(event) {
    this.setState({friend: event.target.value});
  }

  removeFriend(event) {
    var newFriends = this.state.friends.slice();
    newFriends.splice(this.state.friends.indexOf(event.target.value), 1);
    var newFavorites = this.state.favorites.slice();

    if (this.state.favorites.indexOf(event.target.value) !== -1) {
      newFavorites.splice(this.state.favorites.indexOf(event.target.value), 1);
    }

    this.setState({
      friends: newFriends,
      favorites: newFavorites
    });
  }

  updateToFavorites(event) {
    this.setState({toFavorites: event.target.checked});
  }

  render() {

    return (
      <div>
        <p>Add a friend:
          <input
            placeholder="Enter a friend's name"
            type="text"
            onChange={this.updateFriendName}
            value={this.state.friend}/>
          {
            (this.state.friends.indexOf(this.state.friend) === -1) ?
              <button onClick={this.addFriend}>Add</button> :
              null
          }
          <input
            id="to-favorites"
            type="checkbox"
            onChange={this.updateToFavorites}
            checked={this.state.toFavorites}/>
          <label
            htmlFor="to-favorites">To favorites</label>
        </p>
        <h3>Friends</h3>
        <ul className="friends-list">
          {
            this.state.friends.map((friend, index) => {
              return (
                  <li key={index}>
                    {friend}
                    {
                      (this.state.favorites.indexOf(friend) === -1) ?
                        <button onClick={this.addToFav} value={friend}>Add</button> :
                        <button onClick={this.removeFromFav} value={friend}>Remove</button>
                    }
                    <button onClick={this.removeFriend} value={friend} className="remove-friend"></button>
                  </li>
              );
            })
          }
        </ul>
        <h3>Favorites</h3>
        <ul className="favorites-list">
          {
            this.state.favorites.map((favorite, index) => {
              return <li key={index}>{favorite}</li>
            })
          }
        </ul>
      </div>
    );
  }

}

export default Friends;

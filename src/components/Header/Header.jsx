// /* eslint-disable no-useless-constructor */
import React from 'react';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // state = {
  //   nama: 'Avi',
  // };
  // }

  render() {
    return (
      <div>
        <div>Nama Saya {this.props.title}</div>
        <input
          type="text"
          name="title"
          value={this.props.title}
          onChange={(e) => this.props.changeTitle(e.target.value)}
        />
      </div>
    );
  }
}

// import React from 'react';

// function Header(props) {
//   const { name, ubahNama } = props;

//   return (
//     <div>
//       <div>Nama Saya {name}</div>
//       <button type="button" onClick={ubahNama}>
//         Change Name
//       </button>
//     </div>
//   );
// }

export default Header;

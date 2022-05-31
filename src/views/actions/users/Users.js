import React from 'react'

import axios from 'axios';


class Users extends React.Component{

  state = {
    listUsers: []
  }
  async componentDidMount(){
    // axios.get('https://tranquil-shore-96391.herokuapp.com/user')
    // .then(res => {
    //   console.log('>check res: ',res.data.data)
    // })

    let res = await axios.get('https://tranquil-shore-96391.herokuapp.com/user')
    this.setState({
      listUsers: res && res.data && res.data.data ?res.data.data : []
    })
    console.log(res.data.data)
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">
          USER
        </div>
        <div className="list-user-content">
          {listUsers && listUsers.length > 0 && 
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {index  + 1} - {item.firstName} - {item.lastName}
                </div>
              )
          })
          }
        </div>
      </div>

    )
  }
}

  

export default Users

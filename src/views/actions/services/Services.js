import React from 'react'

import axios from 'axios';


class Services extends React.Component{
  state = {
    listServices: []
  }
  async componentDidMount(){
    axios.get('https://tranquil-shore-96391.herokuapp.com/user')
    .then(res => {
      this.setState({
          listServices:'hello'
        })
    })

    // let res = await axios.get('https://tranquil-shore-96391.herokuapp.com/service')
    // this.setState({
    //   listServices: res && res.data && res.data.data ?res.data.data : []
    // })
    // console.log(res.data.data)
  }
  render() {
    let { listServices } = this.state;
      return (
        <div className="list-user-container">
          <div className="title">
            Service
            { listServices }
          </div>
          <div className="list-user-content">
            {listServices && listServices.length > 0 && 
              listServices.map((item, index) => {
                return (
                  <div className="child" key={item.id}>
                    {index + 1} - {item.name} - {item.price}
                  </div>
                )
              })
            }
          </div>
        </div>
      )
  }
}

export default Services

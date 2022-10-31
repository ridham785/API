
import React, { Component } from "react";

import './index.css';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      isLoaded:false,
      add: false,
      del: false,
    }
    this.homeload = this.homeload.bind(this);
    this.Addition = this.Addition.bind(this);
    this.remove = this.remove.bind(this);
    
  }
  homeload() 
  {
    fetch('http://universities.hipolabs.com/search?country=Australia')
      .then(res => res.json())
      
    
      .then(json => {
        console.log(json);
        this.setState({
          
          items : json,
          isLoaded:true,
          del:false
        
        })

      });

  }
  Addition()
  {
    this.setState({
      add : true,
      del:false,
      items: [...this.state.items, ...[this.state.items[0]] ]

    })
  }


  remove()
  {
    
  
    this.setState({
      del: true,
      items : this.state.items.slice(0,-1)
      
      
      
    })
    
  }
  

  render()
  {
    var { isLoaded, items,add, del} = this.state;
    
    
    
  
      
    if(del)
    {
      
      alert("Deleted");
  
     
        
        return(
  
      
          
              <><h2>Australian Schools</h2>
              <button className="button" onClick={this.Addition}>add</button>
              <button className="button" onClick={this.remove}>delete</button>
              <table className="styled-table">
            <thead>
              <tr className="active-row">
                <th>Name</th>
                <th>country</th>
                <th>Domain</th>
                <th>Web page</th>
              </tr>
  
  
  
              {items.map((item, index) => (
                <tr className="active-row">
                  <th key={index}>
                    {item.name}
                  </th>
                  <th>
                    {item.country}
                  </th>
                  <th>
                    {item.domains}
                  </th>
                  <th>
                    {item.web_pages}
                  </th>
  
  
  
                </tr>
  
  
              ))}
              
            </thead>
  
  
          </table></>
                                
        )
  
                    
    }






  if(add )
  {
    
    alert("Added");
    
      
      return(

          
            <><h2>Australian Schools</h2>
            <button className="button" onClick={this.Addition}>add</button>
            <button className="button" onClick={this.remove}>delete</button>
            <table className="styled-table">
          <thead>
            <tr className="active-row">
              <th>Name</th>
              <th>country</th>
              <th>Domain</th>
              <th>Web page</th>
            </tr>



            {items.map((item, index) => (
              <tr className="active-row">
                <th key={index}>
                  {item.name}
                </th>
                <th>
                  {item.country}
                </th>
                <th>
                  {item.domains}
                </th>
                <th>
                  {item.web_pages}
                </th>



              </tr>


            ))}
            
          </thead>


        </table></>
          
          
      
      )
      
                    
  }



  if(isLoaded)
    

  {
    

    
    return(

      
    
      <div className="App">
        
          <h2>Australian Schools</h2>
          
          <button className="button" onClick={this.Addition} >add</button>
          <button className="button" onClick={this.remove} >delete</button>
              <table className="styled-table">
                <thead>
                  <tr className="active-row">
                    <th>Name</th>
                    <th>country</th>
                    <th>Domain</th>
                    <th>Web page</th>
                  </tr>
        
        
          
                  {items.map((item, index) => (
                  <tr className="active-row">
                    <th key={index}>
                      {item.name}
                    </th>
                    <th>
                      {item.country}
                    </th>
                    <th>
                      {item.domains}
                    </th>
                    <th>
                      {item.web_pages}
                    </th>
                
                
                
                  </tr>
              

            ))}
            
                
            </thead>

          
          </table>
        
        
      </div>
    )
  }


    

  else{
    return (
        
      <div>
        
        <h2>Australian Schools</h2>
      <table className="styled-table">
        <thead>
          <tr className="active-row">
            <th>Name</th>
            <th>country</th>
            <th>Domain</th>
            <th>Web page</th>
          </tr>
        </thead>
      </table>
      <button className="button" onClick={this.homeload} >load</button>
      
      
      </div>
       
    )
  }
  
}
}

export default App;

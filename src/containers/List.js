import React, {Fragment} from "react";
import { Card } from "../components/card/Card";

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=55aa4907'
export class List extends React.Component {
    constructor(){
        super()
        this.state = {
            data: [], 
            searchterm: '',
            error: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        //const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`)
       const resJSON = await res.json()
       console.log(resJSON)
       this.setState({data: resJSON.Search})
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searchterm) {
            return this.setState({error: 'Please write a valid text'});
        }
      const res = await fetch(`${API}&s=${this.state.searchterm}`)
      const data = await res.json()

      if(!data.Search){
        return this.setState({error: 'There are no results'})
      }
      this.setState({data: data.Search, error: '', searchterm: ''})
    }
    
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4"> 
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                             className="form-control"
                              placeholder="Search"
                              onChange={e => this.setState({searchterm: e.target.value})}
                              autoFocus
                              value={this.state.searchterm}
                              />
                        </form>
                        <p>{this.state.error ? this.state.error: ''}</p>   
                                             
                    </div>
                    
                </div>
                <div className="row">
                    {this.state.data.map((movie, i) => {
                        return <Card movie={movie} key={i}/>;
                    })}
                </div>
            </Fragment>
        );
    }
    
}

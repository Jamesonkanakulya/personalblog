import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaAlignJustify,FaSearch,} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'

export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             search:'',
             showSearch:false,
             showMenu:false,
            
        }
    }

    handleinput = event =>{
        this.setState({
            search:event.target.value
        })
    }
    handleSearch = ()=>{
        console.log(this.state.search);
        
    }

    mysearch = ()=>{
        this.setState({
           
            showSearch:!this.state.showSearch
        })
    }
    handleNav =()=>{
        this.setState({
            showMenu:!this.state.showMenu
        })
    }



    render() {
        const {search,showSearch,showMenu}= this.state
        return (
            <div className= "nav-bar">
                <h2> <Link to="/">jameson kanakulya</Link></h2>
                <div className ={showMenu?"navBar-center":"navBar-center  hide-menu"}>
                    <ul >
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <li>  <Link to='/projects'>Projects</Link></li>
                        <li><Link to='/blog'>Blog</Link>
                            <div className="blog-options">
                                <div className="list-group" >
                                    <Link className="list-group-item" style={{color:'black',width:'100%',left:'-1.5rem',}}> peronal</Link>
                                    <Link className="list-group-item" style={{ color:'black',width:'100%',left:'-1.5rem'}}> work </Link>
                                </div>
                            </div>
                                        
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                </div>
               
                <span className="menu-icon" onClick={this.handleNav} >
                    <span className={showMenu?"hide-icon":"show-icon"} ><FaAlignJustify /></span>
                    <span className={!showMenu?"hide-icon":"close-icon"} ><IoMdClose /></span>
                </span>
                
                <div className = "search-container">
                    <form onSubmit={this.handleSearch}>
                        <input  className ={showSearch?"show-search":"hide-search"} type= 'text'
                         name= " serach" value={search} onChange={this.handleinput}/>
                    </form>
                    <span><FaSearch  onClick={this.mysearch} /></span>
                    
                </div>
                
            </div>
        )
    }
}

export default Navbar

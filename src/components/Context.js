import React, { Component } from 'react'
import Myclient from './Contentful'

const PostContext = React.createContext()

export class PostProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            post: [],
            newitems: [],
            newPost: []
        }
    }
    getData = async () => {
        try {

            let response = await Myclient
                .getEntries({
                    content_type: 'post'
                })
                .then(response => this.setState({ items: response.items }));
            this.setState({
                post: this.formatData(this.state.items)
            })

        } catch (error) {
            console.log(error);

        }
    }
    getProject = async () => {
        try {

            let response = await Myclient
                .getEntries({
                    content_type: 'blogPost'
                })
                .then(response => this.setState({ newitems: response.items }));
            this.setState({
                newPost: this.formatData(this.state.newitems)
            })

        } catch (error) {
            console.log(error);

        }
    }


    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let post = { ...item.fields, images, id }
            return post
        })
        return tempItems
    }
    componentDidMount() {
        this.getData()
        this.getProject()
     
    }



    render() {
        return (
            <PostContext.Provider value={{ post: this.state.post, project:this.state.newPost }}>
                {this.props.children}

            </PostContext.Provider>
        )
    }
}
const PostConsumer = PostContext.Consumer

export { PostContext, PostConsumer }

import { useState, useEffect } from "react";
import axios from "axios";


const PostAPIHooks = () => {
    const [data, setData] = useState(null);

    const signup = async(email, password, displayName) => {

        const url = ''
        const params = {
            email : 'abc@gmail.com',
            password: '12345',
            display_name : 'abc'
        }

        const headers = {
            'Content-Type' : 'application/json'
        }

        axios.post(url, params, {
            headers: headers
        }).then(res => {
            console.log("I am success = ", res.data)
        }).catch(err => {
            console.log("This is the Error ==", err)
        })

    }


    return{data, signup}
}

export default PostAPIHooks;
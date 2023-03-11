import React from 'react'
import { useEffect } from 'react'
import Axios from "axios"

const IDdotMe = () => {

    useEffect(() => {

        try {
            const response = Axios.post(
                'https://api.id.me/oauth/token',
                'code=c913e8d8258e4b80998691e5b50f7cc3&client_id=0fbee70f9d7ea26aa48967ea2f4fa1bb&client_secret=96eccd70cbae210875b4c250fd10621f&redirect_uri=https://Allveteransoutside.com/idme/callback&grant_type=authorization_code',
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

                    }
                }
            );


            console.log(response)
        } catch (error) {
            console.log(error)
        }


    }, [])


    return (
        <div id="idme-verification">
            <p>Verify with ID.me as the primary action</p>
            <a href="https://groups.id.me/?client_id=0fbee70f9d7ea26aa48967ea2f4fa1bb&redirect_uri=https://Allveteransoutside.com/idme/callback&response_type=code&scopes=military,student">
                <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" height="50" />
            </a>
            <p>
                <img src="https://developers.id.me/assets/buttons/lock-icon-a5b18fbb34d393a80967c08399786f95955ee818b693b97d3f37698e2bc113f2.svg" height="10" />
                Verification by ID.me •
                <a href="https://www.id.me/about">What is ID.me?</a>
            </p>
        </div>
    )
}

export default IDdotMe


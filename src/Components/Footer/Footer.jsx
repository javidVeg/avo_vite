import React from 'react'
import "./Footer.css"
import AVO_footer from "../../Media/AVO_footer.png"
import IG_logo from "../../Media/Instagram-Icon.png"
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';







const Footer = () => {
    // const x = () => {
    //     for (let i = 1; i <= 5; i++) {
    //         setTimeout(() => {
    //             console.log(i)
    //         }, i * 1000)
    //     }

      

    // }
    // x();

    return (
        <div>
            <footer>
                <div className="footer-main">
                    <img src={AVO_footer} alt="AVO-footer" />
                    <div className="contact">
                        <h2>Are you a Veteran and want to get involved?</h2>
                        <h3>Email Us: <a href="mailto: info@allveteransoutside.com">info@allveteransoutside.com</a></h3>
                    </div>
                    <div className="socials">
                        <div className='IG-tag'>
                            <a href='https://instagram.com/allveteransoutside?igshid=YmMyMTA2M2Y='>
                                <AiFillInstagram color='black' size={50} />
                                <h3>@allveteransoutside</h3>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="footer-copy">
                    <p> ALL VETERANS OUTSIDE &reg; {new Date().getFullYear()}</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
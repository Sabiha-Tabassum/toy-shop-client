import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../images/limousine.png'

const Footer = () => {
    return (
        <div className='bg-slate-500 text-white mb-2'>
            <footer className="footer p-10 ">
                <div>
                    <img className='h-16' src={logo} alt="" />
                    <p>Toy Shop Industries Ltd.<br />Providing reliable toys since 2023</p>



                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

                <div>
                    <span className="footer-title">Address</span>
                    <p>Level-5,Khilgaon,Dhaka,Bangladesh</p>
                    <p>Helpline: <a className="link link-hover">0123456789</a></p>
                    <p>(Available : Sat - Thu, 8:00 AM to 7:00 PM)</p>
                </div>

            </footer>
            <div className='flex justify-center mb-2'>

                <FaFacebookSquare className='h-5 w-14'></FaFacebookSquare>
                <FaTwitter className='h-5 w-14'></FaTwitter>
                <FaYoutube className='h-5 w-14'></FaYoutube>
            </div>
            <div className='text-center'>
                <p>
                    Copyright © 2023 - All right reserved by Toy Shop Ltd

                </p>
            </div>
        </div>
    );
};

export default Footer;
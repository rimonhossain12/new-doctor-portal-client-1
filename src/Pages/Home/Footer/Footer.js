import React from 'react';
import bgImg from '../../../assets/images/footer.png';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className="p-10"
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/home' className="link link-hover">Branding</a>
                    <a href='/home' className="link link-hover">Design</a>
                    <a href='/home' className="link link-hover">Marketing</a>
                    <a href='/home' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/home' className="link link-hover">About us</a>
                    <a href='/home' className="link link-hover">Contact</a>
                    <a href='/home' className="link link-hover">Jobs</a>
                    <a href='/home' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/home' className="link link-hover">Terms of use</a>
                    <a href='/home' className="link link-hover">Privacy policy</a>
                    <a href='/home' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center py-5'>
                <p className='font-thin'>Copyright © {date} - All right reserved by <span className='font-bold text-red-500'>PatientAndHardWorking</span> Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
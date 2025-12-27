import React from 'react';
import Banner1 from '../../assets/images/banner/banner-1.png';
import Banner2 from '../../assets/images/banner/banner-2.png';
import Banner3 from '../../assets/images/banner/banner-3.png';
import './Index.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Banners = () =>{
    return(
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row px-2'>
                    <div className='col'>
                        <div className='box'>
                            <h5>Premium quality, globally<br/> certified ingredients</h5>
                            <img src={Banner1} alt='banner1' className='w-100 transition'/>
                            <div className='shopnowbutton'><Link to="/listing"><Button variant='contained'>Shop Now</Button></Link></div>
                        </div>          
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <h5>Products crafted with care<br/> and tested for safety</h5>
                            <img src={Banner2} alt='banner1' className='w-100 transition'/>
                            <div className='shopnowbutton'><Link to="/listing"><Button variant='contained'>Shop Now</Button></Link></div>
                        </div>          
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <h5>Competitive pricing and<br/>reliable global logistics</h5>
                            <img src={Banner3} alt='banner1' className='w-100 transition'/>
                            <div className='shopnowbutton'><Link to="/listing"><Button variant='contained'>Shop Now</Button></Link></div>
                        </div>          
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Banners;
import './index.scss'
// import { useRef } from 'react'
import BgPic from '../../assets/images/laptop-and-bookshelf.jpeg'

const Pic =()=> {

    // const bgRef = useRef();

    return(
        <div className='pic-container'>
            <img className="bg-pic" src={BgPic} alt="Laptop" />
            {/* <svg 
                width="559pt"
                hieght="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >

            </svg> */}

        </div>
    )
}

export default Pic
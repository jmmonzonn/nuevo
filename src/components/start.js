import './start.css'
import { ReactComponent as Logo } from '../falso_back_end/logobank2.svg'

const Start = () => {

    return (

        <>

            <div className=''>
                <div className=" w-screen bg-black  grid h-screen place-items-center items-center" >
                    <div className='cardLogo'>
                        <div className='svgLogo'>
                            <Logo className=" " height={200} width={200} fill={"white"} />
                        </div>
                        <div className='svgLabel'>
                            <div className=' content text-white'>
                                <p className="">tubanco</p>
                                <p className="">tubanco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Start
import FFIWordArt from './../assets/ffi_wordart.png'
import { Fade } from 'react-reveal'

export default function Hero() {
    return (
        <>
            <div className="mt-10 w-full grid grid-cols-1 xl:grid-cols-2" id='hero'>
                {/* content block  */}
                <div className="">
                    <Fade top>
                        <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#374063" }}>Changing lives.</h2>
                    </Fade>
                    <p className="ml-6 text-lg" style={{ color: "#374063" }}>Fast Forward India (FFI) is a unique effort and an initiative undertaken by the students of IIT(ISM) Dhanbad. This is an organization completely managed and administered by the young and enthusiastic students of the institution.</p>
                    <button className="ml-6 mt-5 rounded-full px-8 py-2 text-white" style={{ background: "#374063" }}>Donate</button>
                </div>
                {/* illustration block  */}
                <div className="flex justify-center items-center mt-20">
                    <img src={FFIWordArt} alt="" style={{ width: "1100px" }} />
                </div>
            </div>

        </>
    )
}
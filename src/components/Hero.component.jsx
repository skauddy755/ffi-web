import HeroImage from './../assets/illustrations/heroImage.jpg'

export default function Hero() {
    return (
        <>
            <div className="mt-10 w-full grid grid-cols-1 xl:grid-cols-2" id='hero'>
                {/* content block  */}
                <div className="">
                    <h2 className="mt-5 md:mt-10 pt-10 mb-3 mx-4 text-7xl md:text-8xl font-bold tracking-tighter" style={{ color: "#7F94E8" }}>Changing lives.</h2>
                    <p className="ml-6 text-lg" style={{ color: "#374063" }}>Fast Forward India (FFI) is a unique effort and an initiative undertaken by the students of IIT(ISM) Dhanbad. This is an organization completely managed and administered by the young and enthusiastic students of the institution.</p>
                    <button className="ml-6 mt-5 rounded-full px-8 py-2 text-white" style={{ background: "#374063" }}>Donate</button>
                </div>
                {/* illustration block  */}
                <div className="w-25 hidden xl:block ml-24">
                    <img src={HeroImage} alt="" style={{ width: "500px" }} />
                </div>
            </div>

        </>
    )
}
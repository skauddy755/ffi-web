import { Fade } from "react-reveal"
export default function AboutUs() {
    return (
        <div style={{ background: "#c1c8e4" }} id="about-us">
            <div className="pb-10">
                <h2 className="pt-24 xl:pt-10 mb-3 mx-4 text-5xl md:text-7xl font-bold tracking-tighter text-indigo-700" style={{ color: "#374063" }}>About us</h2>


                <p className="ml-6 text-lg" style={{ color: "#374063" }}>Fast Forward India (FFI) IIT (ISM) Dhanbad, is a unique effort and an initiative undertaken by the students of IIT (ISM) Dhanbad. This organization is completely led and administered by the young and enthusiastic students of IIT (ISM) Dhanbad. Creative and powerful ways are implemented to enhance Blood Donation awareness and to tackle the problems of many of the underprivileged students.</p>

                <Fade top>
                    <h3 className="text-left mx-2 lg:mx-4 text-5xl md:text-7xl font-bold tracking-tighter mt-10 pt-10 text-indigo-700 mb-3" style={{ color: "#374063" }}>Our Achievements :</h3>
                </Fade>
                <Fade bottom>
                    <ul className="mx-5 bg-white rounded-lg border border-gray-200 w-100 text-gray-900 ">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">More than 370 blood cases were handled by FFI Volunteer in 2019-20.</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">Sachin, a student of FFI classroom program, has got a Job of Computer Operator at the Diamond Hostel, IIT (ISM) Dhanbad.</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">637 units of blood was donated throughout the session 2019-20.</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">Umeed 2020 witnessed a record- breaking participation of over 1000+ students from 43 schools all over the region of Dhanbad and 6 NGOs.</li>
                        <li className="px-6 py-2 w-full border-b ">Award for most number of blood donations (540+) to PMCH under a felicitation program organised by Jharkhand Aids Control Society at Patliputra Medical College and Hospital (PMCH).</li>
                        <li className="px-6 py-2 w-full rounded-b-lg">Karma-Jyoti and Fast Forward India, under Centre for Societal Mission (CSM) of Indian Institute of Technology ISM Dhanbad were awarded with 'Yuva-Gaurav- Samman' by 'Jharia Coalfield Samiti', Dhanbad on 12-January-2020 to mark Birth Anniversary of Swami Vivekananda.</li>
                    </ul>
                </Fade>
            </div>

        </div >

    )
}
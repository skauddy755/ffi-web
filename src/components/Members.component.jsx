import { Fade } from "react-reveal"
import { members } from "../data/members"

export default function Members() {
    return (
        <div style={{ background: "#c1c8e4" }} id="members">
            <div className="p-5" style={{ background: "#c1c8e4" }}>
                <Fade top>
                    <h2 className="text-center xl:text-left xl:mb-0 pt-24 xl:pt-10 pb-10 mx-4 text-5xl md:text-8xl font-bold tracking-tighter text-white" style={{ color: "#374063" }}>Members</h2>
                </Fade>
                <div className="flex justify-center">
                    <div className="flex flex-row justify-around gap-2 flex-wrap">
                        {members.map(member =>
                            <Fade key={member.name} bottom>
                                <div key={member.name} className="mx-5 my-5 neomorphic flex flex-col" style={{ width: "250px", color: "#374063" }}>
                                    <div>
                                        <img className="rounded-t-3xl object-cover" src={member.image} alt="name"></img>
                                    </div>
                                    <hr />
                                    <div className="text-center p-2">
                                        <p className="text-xl uppercase tracking-tight font-semibold">{member.name}</p>
                                        <p className="text-muted text-sm uppercase tracking-tighter" style={{ color: "#37406373" }}>{member.position}</p>
                                    </div>
                                </div>
                            </Fade>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-center p-5 py-10" style={{ color: "#374063" }}>and 50+ other volunteers...</p>
        </div>
    )
}
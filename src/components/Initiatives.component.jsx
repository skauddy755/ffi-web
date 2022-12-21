import { useState, useEffect } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

const items = [
    {
        id: "0",
        title: "Bloodline",
        description: "Bloodline aims to spread awareness among the people about blood donation and conducts blood donation camps regularly. Bloodline focuses on organising Blood Donation Camp, spreading Blood Donation Awareness, voluntary Blood Donation on daily basis and conducting Mega Blood Donation Camp on Republic day.",

    },
    {
        id: "1",
        title: "Jagriti",
        description: "Jagriti aims to provide Tuition and Navodaya Entrance preparation to the underprivileged children's of the slums surrounding ISM. We provide them basic education and conduct various practice test at our FFI Centre. Jagriti focuses on providing education for preparation for IX, X Board Examination, providing a platform to reconnect them with the society, providing education for preparation for JNVST(Navodaya Exam)."
    },
    {
        id: "2",
        title: "Escape",
        description: "Escape aims to improve English speaking, Basic Computer Education and writing ability of the students from the underprivileged section of the society. Escape focus on providing English Speaking Course and Personality Enhancement, conducting English classes and special personality development session and providing Basic Computer Education to Centre Students."
    },
    {
        id: "3",
        title: "Disha",
        description: "The Prior Purpose of Disha is to provide Counselling to students of different schools of Dhanbad, so that they can get the right decision which will help them to make their future bright. Disha focuses on conducting career counselling sessions at various schools of Dhanbad, introducing future scopes in different fields at Dhanbad."
    },
]

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default function Initiatives() {
    const [[activeTabIndex, direction], setActiveTabIndex] = useState([0, 0]);

    const paginate = (newDirection) => {
        setActiveTabIndex([activeTabIndex + newDirection, newDirection]);
    };

    return (
        <div id='initiatives'>
            <AnimateSharedLayout>
                <div className='flex flex-col xl:flex-row justify-between items-center'>
                    <div>
                        <h2 className="text-center xl:text-left mb-8 xl:mb-0 pt-24 xl:pt-10 mb-3 mx-4 text-7xl md:text-8xl font-bold tracking-tighter" style={{ color: "#7F94E8" }}>Initiatives</h2>
                    </div>
                    <div className='mx-32'>
                        <div className='flex justify-center'>
                            <button className='rounded-xl p-10 text-white text-center py-20' style={{ background: "#7F94E8", width: "200px" }} onClick={() => setActiveTabIndex([0, 0 - activeTabIndex])}>Bloodline</button>
                            <button className='m-4 rounded-xl p-10 text-white text-center' style={{ background: "#7F94E8", width: "200px" }} onClick={() => setActiveTabIndex([1, 1 - activeTabIndex])}>Jagriti</button>
                        </div>
                        <div className='flex justify-center'>
                            <button className=' m-2 rounded-xl p-10 text-white text-center' style={{ background: "#7F94E8", width: "300px" }} onClick={() => setActiveTabIndex([2, 2 - activeTabIndex])}>Escape</button>
                            <button className='rounded-xl p-10 text-white text-center' style={{ background: "#7F94E8", width: "300px" }} onClick={() => setActiveTabIndex([3, 3 - activeTabIndex])}>Disha</button>
                        </div>
                    </div>
                </div>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.section
                        key={activeTabIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30, duration: 2 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <div className='m-2 p-2 py-10 text-center rounded-lg' style={{ background: "#c1c8e4" }}>
                            <div className='container'>
                                <h2 className='text-5xl text-white pt-10 font-semibold'><motion.span>{items[activeTabIndex].title}</motion.span></h2>
                                <p className='m-4'>{items[activeTabIndex].description}</p>
                            </div>
                        </div>
                    </motion.section>
                </AnimatePresence>
            </AnimateSharedLayout >
        </div >

    )
}
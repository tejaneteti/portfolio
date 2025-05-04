import React from 'react';

function AboutMe() {
    return (
        <section id="about" className="!w-full !container !mx-auto bg-white !px-6 md:px-20 !py-10 ">
            <div className=" mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center !mb-5 md:!mb-10 text-gray-800">
                    Everything about me!
                </h2>

                {/* Content Container */}
                <div className="  !space-y-6 text-gray-700  ">
                    <p className="text-gray-600 text-justify">
                        Hello! I'm <span className="font-semibold text-gray-900">Teja Neteti</span>, a UAV System Engineer at CloudOne AI Robotics Pvt Ltd. My work focuses on developing advanced drone systems, including GPS-denied navigation, swarm technology, and autonomous flight control systems.
                    </p>
                    <p className="text-gray-600 text-justify">
                        Currently, I'm working on the Mars Copter project with ISRO's VSSC, developing autonomous flight capabilities for GPS-denied environments. My recent work includes developing centralized swarm drone systems and designing custom bicopter architectures.
                    </p>
                    <p className="text-gray-600 text-justify">
                        I have extensive experience in drone development, including work with Ardupilot, Unreal Engine simulations, and various UAV configurations. My expertise spans across hardware design, software development, and system integration for unmanned aerial vehicles.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

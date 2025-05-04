"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'GPS-Denied Drone using Bicopter Configuration for Mars Copter',
        image: '/images/projects/mars-copter.jpg',
        description: 'Designed a drone capable of stable flight in GPS-denied environments using a custom bicopter architecture.',
        details: [
            'Custom bicopter design for Mars-like conditions',
            'Advanced navigation algorithms',
            'Autonomous flight capabilities',
        ],
    },
    {
        id: 2,
        title: 'Drone Swarm System for ISRO',
        image: '/images/projects/drone-swarm.jpg',
        description: 'Developed and tested centralised swarm drone system to enable synchronized operations of multiple UAVs.',
        details: [
            'Swarm coordination algorithms',
            'Real-time communication protocols',
            'Collision avoidance systems',
        ],
    },
    {
        id: 3,
        title: 'Hand Gesture Controlled Ardupilot Drone',
        image: '/images/projects/hand-gesture-drone.jpg',
        description: 'Created a gesture-recognition interface using sensors to control an Ardupilot-based drone.',
        details: [
            'Gesture recognition technology',
            'Sensor integration',
            'Ardupilot control',
        ],
    },
    {
        id: 4,
        title: 'AI & ML-Based Autonomous Drone for Dam Inspection',
        image: '/images/projects/ai-ml-drone.jpg',
        description: 'Built a drone integrated with YOLO-based detection for structural inspections of dams.',
        details: [
            'YOLO-based object detection',
            'AI integration',
            'Structural inspection capabilities',
        ],
    },
    {
        id: 5,
        title: 'FPV Development for Kamikaze Drones',
        image: '/images/projects/fpv-drone.jpg',
        description: 'Engineered a high-speed fpv drones with autonomous navigation to drop payloads at a target or to hit targets.',
        details: [
            'Low-latency video transmission',
            'GPS-independent navigation',
            'High-speed drone capabilities',
        ],
    },
    {
        id: 6,
        title: 'Drone Simulator Design in Unreal Engine',
        image: '/images/projects/drone-simulator.jpg',
        description: 'Simulated realistic drone dynamics in virtual environments for testing autonomous flight behavior.',
        details: [
            'Unreal Engine simulation',
            'Drone dynamics modeling',
            'Autonomous flight testing',
        ],
    },
    {
        id: 7,
        title: 'Drone Light Show Architecture',
        image: '/images/projects/drone-light-show.jpg',
        description: 'Created a deployable platform to control multiple drones for light animations in synchronized performances.',
        details: [
            'Multi-drone control',
            'Synchronized light animations',
            'Deployable platform',
        ],
    },
    {
        id: 8,
        title: 'Structural Inspection Using Photogrammetry Technique',
        image: '/images/projects/structural-inspection.jpg',
        description: 'Captured and processed aerial imagery to reconstruct 3D structures for analysis.',
        details: [
            'Photogrammetry technique',
            'Aerial imagery analysis',
            '3D structure reconstruction',
        ],
    },
    {
        id: 9,
        title: 'Delivery Drone for Medical Purposes',
        image: '/images/projects/delivery-drone.jpg',
        description: 'Designed a lightweight, long-range UAV capable of transporting medical kits to remote areas.',
        details: [
            'Lightweight design',
            'Long-range capability',
            'Medical kit transportation',
        ],
    },
    {
        id: 10,
        title: 'VTOL Design and Configuration',
        image: '/images/projects/vtol-drone.jpg',
        description: 'Worked on aerodynamic design and control logic of hybrid drones that combine vertical and horizontal flight.',
        details: [
            'Aerodynamic design',
            'Control logic',
            'Hybrid drone capabilities',
        ],
    },
    {
        id: 11,
        title: 'UI Design for Mobile using Figma',
        image: '/images/projects/ui-design.jpg',
        description: 'Developed interactive prototypes for drone control applications.',
        details: [
            'Figma prototyping',
            'Mobile application design',
            'Interactive user interface',
        ],
    },
    {
        id: 12,
        title: 'Drone Mapping Software',
        image: '/images/projects/drone-mapping.jpg',
        description: 'Built software for path planning and geospatial mapping using onboard sensors.',
        details: [
            'Path planning',
            'Geospatial mapping',
            'Onboard sensor integration',
        ],
    },
    {
        id: 13,
        title: 'Prototype Web-Based GCS for MAVLink Drones',
        image: '/images/projects/prototype-gcs.jpg',
        description: 'Created a web-based ground control station to monitor and send commands to drones.',
        details: [
            'Web-based GCS',
            'MAVLink communication',
            'Drone monitoring',
        ],
    },
];


function MyProjects() {
    return (
        <section id="projects" className="  container !mx-auto !px-6 md:px-20 !py-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center !mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="!p-4 flex-1 flex flex-col">
                                <span className="text-sm text-gray-500 font-mono mb-2">{String(project.id).padStart(2, '0')}</span>
                                <h3 className="text-lg font-semibold mb-2 leading-snug">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                <ul className="list-disc list-inside text-gray-500 text-sm mb-4">
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                                {/* <button className=" hover:cursor-pointer !mt-2 self-start  bg-black hover:bg-gray-900  text-white !px-4 !py-1 rounded-md transition-colors duration-300">
                                    Read More
                                </button> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MyProjects;
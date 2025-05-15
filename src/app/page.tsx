
import Footer from "./footer";
import ContactSection from "./_contact/ContactSection";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ProfileHero from "./ProfileHero";
import Navbar from "./Navbar";
export default function Home() {
  return (

    <>
      <Navbar />

      <ProfileHero />
      <AboutMe />

      <section className="experience !py-5" id="experience">
        <h2 className="text-3xl md:text-4xl font-bold text-center !mb-5 md:!mb-10 text-gray-800">
          Experience
        </h2>
        <div className="container !mx-auto !pr-6 md:pr-20">


          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>CloudOne AI Robotics Pvt Ltd</h3>
                <p className="timeline-date">Nov 2023 - Present</p>
                <p className="position">UAV System Engineer</p>
                <ul className="experience-list">
                  <li>Worked on Mars Copter project with ISRO's VSSC for autonomous flight in GPS-denied environments</li>
                  <li>Engineered centralized swarm drone systems for coordinated ISRO missions</li>
                  <li>Designed a bicopter-based GPS-denied navigation system for IIST</li>
                  <li>Developed 2kg, 5kg, and 10kg class payload drones</li>
                  <li>Built drone simulators in Unreal Engine and AIRSIM</li>
                  <li>Designed a GUI for centralized swarm drone control</li>
                  <li>Developed deployable architecture for drone light shows</li>
                </ul>
              </div>
            </div>
            {/* <div className="timeline-item">
              <div className="timeline-content">
                <h3>Autosky Aerospace</h3>
                <p className="timeline-date">May 2024 - June 2024</p>
                <p className="position">Freelancer</p>
                <ul className="experience-list">
                  <li>Developed drones for Mehar Baba competition (IAF) with a 10kg class drone</li>
                  <li>Developed navigation algorithms using Dijkstra's method</li>
                  <li>Trained YOLOv5 models for drone-based object detection</li>
                </ul>
              </div>
            </div> */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Saif Seas Automation</h3>
                <p className="timeline-date">May 2023 - June 2023</p>
                <p className="position">Intern</p>
                <ul className="experience-list">
                  <li>Designed an autonomous Remote Operated Lifebuoy system</li>
                  <li>Built a worm-wheel gripper for payload handling</li>
                  <li>Implemented safety features and performed system testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyProjects />

      <ContactSection />
      <Footer />
    </>
  );
}

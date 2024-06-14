import React from 'react';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects-title">Projects</div>
            <div className="projects-content">
                <div className="projects-text">
                    <p className="tabbed-paragraph">
                        I am passionate for creating AI/ML models to improve effiency in daily life and make education more accessible. 
                        I will be doing research over summer on modeling plume dynamics given environmental data for a given area as well as creating software to interface this to the public, hopefully helping prevent new or stunt existing wildfires. 
                        I have a newfound passion for game development and will be continuing a project over summer with the goal of publishing on Steam, more updates will be given throughout progress. 
                        I will additionally be pursuing launching Guppy, a "non-profit" Regulation Crowdfunding Intermediary with all profits channeled directly toward improving higher-education in Oregon!
                        Aside from these, I have extensive curricular projects showing my versatile background below.
                    </p>
                </div>
                <div className="projects-list">
                    <a className="project" href="https://github.com/ereinha3/Watch-Profits-Soar-to-the-Ether">
                        <div className="project-title">
                            <p>
                                Watch Profits Soar to the Ether
                            </p>
                        </div>

                        <div className="project-description">
                            The volatility of cryptocurrency prices make them difficult to predict compared to stable fiat currencies. 
                            We analyze the market trends of Ether, one of the most widely used cryptocurrencies, and attempt to train various RNNs to predict future Ether prices. 
                            Setting a constant of a 10-day future prediction, our results indicate that the GRU model had the highest comparative accuracy. 
                            We look to improve this model in the future with more data.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Machine Learning
                            </div>
                            <div className="project-skill">
                                Python
                            </div>
                            <div className="project-skill">
                                TensorFlow
                            </div>
                            <div className="project-skill">
                                Data Processing
                            </div>
                            <div className="project-skill">
                                Model Optimization
                            </div>
                            <div className="project-skill">
                                Scientific Writing
                            </div>
                        </div>
                    </a>
                    <a href="https://play.unity.com/mg/other/webgl-b6o" className="project">
                        <div className="project-title">
                            <p>
                                ChromaCollapse
                            </p>
                        </div>
                        <div className="project-description">
                            This was a project started in CS410: Game Programming, with plans to continue development this summer.
                            More updates will be provided as development occurs. 
                            Click to go play!
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Unity
                            </div>
                            <div className="project-skill">
                                C#
                            </div>
                            <div className="project-skill">
                                Blender
                            </div>
                            <div className="project-skill">
                                Linear Algebra
                            </div>
                            <div className="project-skill">
                                Collaborative Development
                            </div>
                            <div className="project-skill">
                                Physics
                            </div>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/ereinha3/Neural-Style-Transfer-Network?tab=readme-ov-file">
                        <div className="project-title">
                            <p>
                                Neural Style Transfer
                            </p>
                        </div>
                        <div className="project-description">
                            This project sought to create abstract art by using a CycleGAN network trained on two datasets: people and lymph-node sections. 
                            The project was inspired by combining my passion for art and Machine Learning. 
                            Further description regarding the project and use of various functions and network architecture can be found linked in the GitHub description.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Python
                            </div>
                            <div className="project-skill">
                                Generative AI
                            </div>
                            <div className="project-skill">
                                Machine Learning
                            </div>
                            <div className="project-skill">
                                TensorFlow
                            </div>
                            <div className="project-skill">
                                Model Optimization
                            </div>
                            <div className="project-skill">
                                Scientific Writing
                            </div>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/ereinha3/Whats-Up-Dawg">
                        <div className="project-title">
                            <p>
                                What's Up Dawg?
                            </p>
                        </div>
                        <div className="project-description">
                            6.3 million dogs are surrendered to shelters every year. 
                            What's the solution to this? Better educated owners.
                            We've created a simulation game about the life of a dog and its human, detailing the costs and work required in being a responsible dog owner.
                            This game is designed to educate prospective dog owners.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Python
                            </div>
                            <div className="project-skill">
                                Tkinter
                            </div>
                            <div className="project-skill">
                                Data Processing
                            </div>
                            <div className="project-skill">
                                Model View Controller
                            </div>
                            <div className="project-skill">
                                GUI Design
                            </div>
                            <div className="project-skill">
                                Database Management
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/ereinha3/ereinha3.github.io" className="project">
                        <div className="project-title">
                            <p>
                                Personal Portfolio
                            </p>
                        </div>
                        <div className="project-description">
                            6.3 million dogs are surrendered to shelters every year. 
                            What's the solution to this? Better educated owners.
                            We've created a simulation game about the life of a dog and its human, detailing the costs and work required in being a responsible dog owner.
                            This game is designed to educate prospective dog owners.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                React
                            </div>
                            <div className="project-skill">
                                HTML
                            </div>
                            <div className="project-skill">
                                CSS
                            </div>
                            <div className="project-skill">
                                JavaScript
                            </div>
                            <div className="project-skill">
                                Web Design
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/ereinha3/Operating-Systems/tree/main/Project3" className="project">
                        <div className="project-title">
                            <p>
                                Duck Bank
                            </p>
                        </div>
                        <div className="project-description">
                            This project was designed to simulate parallelized bank transaction processing. 
                            I delegated 120,000 commands to 10 different threads accounting for possibilities of deadlock or infinite wait. 
                            This was implemented in C using Posix Threads. 
                            Further, I expanded the banking system and shared memory using memory mapping across both the transaction as well as the savings bank threads. 
                            This project was part of the curricular work in CS415: Operating Systems.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                C
                            </div>
                            <div className="project-skill">
                                Multi-Threading
                            </div>
                            <div className="project-skill">
                                File IO
                            </div>
                            <div className="project-skill">
                                Debugging
                            </div>
                            <div className="project-skill">
                                Web Design
                            </div>
                            <div className="project-skill">
                                Resource Management
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/ereinha3/Easy-A" className="project">
                        <div className="project-title">
                            <p>
                                EasyA
                            </p>
                        </div>
                        <div className="project-description">
                            This application's purpose is to create a GUI environment to help students determine which className is easiest. 
                            The interface is designed for students with an admin mode for instructors.
                            This tool is beneficial for students deciding between which teachers or classNamees to take. 
                            It allows them to get a relative prediction for how likely they are to do well in one className compared to another.
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Python
                            </div>
                            <div className="project-skill">
                                BeautifulSoup
                            </div>
                            <div className="project-skill">
                                Tkinter
                            </div>
                            <div className="project-skill">
                                GUI Design
                            </div>
                            <div className="project-skill">
                                File Processing
                            </div>
                            <div className="project-skill">
                                Database Management
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/ereinha3/Characteristic-Analysis-of-Randomly-Generate-Polynomials" className="project">
                        <div className="project-title">
                            <p>
                                Characteristic Analysis of Randomly Generated Polynomials
                            </p>
                        </div>
                        <div className="project-description">
                            This grant-funded research project was carried out over a 10-week period in Summer 2023. 
                            The goal of the research was to find explicit likelihoods of real roots in arbitrary dimensions. 
                            We also looked into likelihood of shapes for conic sections and quadric surfaces.
                            Much of this work had already been done prior but we succesfully validated this and made a conjecture of our own. 
                        </div>
                        <div className="project-skills">
                            <div className="project-skill">
                                Python
                            </div>
                            <div className="project-skill">
                                Applied Mathematics
                            </div>
                            <div className="project-skill">
                                Collaborative Research
                            </div>
                            <div className="project-skill">
                                Jupyter
                            </div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;
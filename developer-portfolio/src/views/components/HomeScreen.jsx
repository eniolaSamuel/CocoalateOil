import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/components/HomeScreen.css"
import Eniola from "../../assets/svg/Eniola.svg"
import Background from '../../assets/svg/binary-background.svg';

const HomeScreen = () => {
    return (
        <>
            <div className="Home-main-frame">
                <div className="text-centre-home">
                    <h1>
                        HI, I'M{' '}
                        <br/>
                        <span> ENIOLA SAMUEL</span>
                    </h1>
                    <p>
                        Welcome to my portfolio!
                        I specialize in both React.js frontend and Java backend development.
                        With expertise in crafting seamless user experiences and building robust server-side solutions,
                        I aim to deliver high-quality software solutions that meet user needs and business objectives.
                        Explore my work to see examples of my skills in action.

                        Let's build something amazing together!

                    </p>
                </div>

                <div className="Eniola-frame">
                    <img
                        src={Eniola}
                        alt="eniola"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
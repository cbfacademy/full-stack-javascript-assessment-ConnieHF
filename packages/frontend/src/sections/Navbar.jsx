import { motion } from "framer-motion"
import styles from "../styles/styles"
import { navVariants } from "../utils/motion"


const Navbar = () => (
    <nav
        // variants={navVariants}
        // initial="hidden"
        // whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        {/* <div className="absolute x-[50%] inset-0 gradient-01" /> */}
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <h1 className="font-extrabold text-[24px] leading-[30px] text-white">
            Navbar
        </h1>

        </div>
    </nav>
)

export default Navbar;
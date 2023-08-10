import { motion } from "framer-motion";

function CardBack({ isFlipped }) {
  return (
    <motion.div
      initial={{ rotateY: 180 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="back w-full h-full items-center flex flex-col"
    >
      <div className="font-bold">
        <h1>TECH STACK</h1>
      </div>
    </motion.div>
  );
}

export default CardBack;

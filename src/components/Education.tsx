// import React from 'react';
// import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Education: React.FC = () => {
//   const educationData = [
//     {
//       icon: <FaSchool className="w-8 h-8 text-blue-500" />,
//       school: "Saraswati Vidya Mandir, Shujalpur",
//       degree: "10th Class",
//       year: "2019",
//       result: "70%",
//     },
//     {
//       icon: <FaGraduationCap className="w-8 h-8 text-blue-500" />,
//       school: "Saraswati Vidya Mandir, Shujalpur",
//       degree: "12th Class",
//       year: "2021",
//       result: "73%",
//     },
//     {
//       icon: <FaUniversity className="w-8 h-8 text-blue-500" />,
//       school: "Shri G.S. Institute of Technology, Indore",
//       degree: "B.Tech in Biomedical Engineering",
//       year: "2021 - 2025",
//       result: "6.0 CGPA",
//     },
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="container px-4 mx-auto md:px-8 lg:px-12">
//         <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-4xl">Educational Journey</h2>
//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {educationData.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, rotateY: -90 }}
//               animate={{ opacity: 1, rotateY: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="flex flex-col justify-between items-center p-6 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl transition-all duration-300 transform md:p-8 hover:scale-105"
//               style={{
//                 perspective: '1000px',
//                 transformStyle: 'preserve-3d',
//               }}
//             >
//               <div
//                 className="p-4 mb-6 bg-blue-100 rounded-full shadow-inner"
//                 style={{
//                   transform: 'translateZ(20px)',
//                 }}
//               >
//                 {edu.icon}
//               </div>
//               <h3
//                 className="mb-3 text-xl font-bold text-center text-gray-800 md:text-2xl"
//                 style={{
//                   transform: 'translateZ(15px)',
//                 }}
//               >
//                 {edu.degree}
//               </h3>
//               <p
//                 className="mb-2 text-center text-gray-600 text-md md:text-lg"
//                 style={{
//                   transform: 'translateZ(10px)',
//                 }}
//               >
//                 {edu.school}
//               </p>
//               <p
//                 className="mb-2 text-sm text-center text-gray-500 md:text-md"
//                 style={{
//                   transform: 'translateZ(5px)',
//                 }}
//               >
//                 {edu.year}
//               </p>
//               <p
//                 className="text-lg font-semibold text-center text-blue-600"
//                 style={{
//                   transform: 'translateZ(10px)',
//                 }}
//               >
//                 {edu.result}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;
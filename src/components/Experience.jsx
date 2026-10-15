// import { experience as fallback } from '../data/content';
// import { getExperience } from '../services/api';
// import useResource from '../hooks/useResource';
// import SectionHead from './SectionHead';

// export default function Experience() {
//   const { status, data } = useResource(getExperience, fallback);

//   return (
//     <section id="experience" className="section" aria-labelledby="experience-title">
//       <div className="container">
//         <SectionHead id="experience" kicker="My journey" title="Experience" />

//         {status === 'loading' ? (
//           <div className="card skeleton" style={{ minHeight: 220 }} />
//         ) : (
//           <ol className="timeline">
//             {data.map((e) => (
//               <li key={`${e.role}-${e.period}`} className="timeline__item">
//                 <div className="card">
//                   <p className="timeline__period">{e.period}</p>
//                   <h3 className="card__title">{e.role}</h3>
//                   <p className="timeline__company">{e.company}</p>
//                   {e.points.length > 0 && (
//                     <ul className="timeline__points">
//                       {e.points.map((pt) => <li key={pt}>{pt}</li>)}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ol>
//         )}
//       </div>
//     </section>
//   );
// }

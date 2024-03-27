import { Tooltip } from 'react-tooltip';

// CSS
import '../css/competences.css';
import 'react-tooltip/dist/react-tooltip.css'


const Competences = ({ t }) => {
    // let techs = [react, symf, node, mysql, js, htmlcss, git, debian, blender, angular, php, tailwind];
    let techs = ["react.svg", "symf.svg", "node.svg", "mysql.svg", "js.svg", "htmlcss.svg", "git.svg", "debian.svg", "blender.svg", "angular.svg", "php.svg", "tailwind.svg"];

    let sliderTechs = techs.map((tech, index) => {
        // Extraire le nom de la technologie sans l'extension .svg
        let techName = tech.slice(0, -4); // Enlève les 4 derniers caractères (.svg)

        return (
            <img
                key={index}
                className='techImage'
                src={`techs/${tech}`}
                data-tooltip-id="tech-tooltip"
                data-tooltip-content={techName}
                alt={tech}
            />
        );
    });


    return (
        <section className='section__competence'>
            <Tooltip id="tech-tooltip" />
            <h2 className='effect competences__title'>{t("skills.title")}</h2>

            <article className='logos competences__container'>
                <div className="logo_items">
                    {sliderTechs}
                </div>
                <div className="logo_items">
                    {sliderTechs}
                </div>
            </article>
        </section>
    );
}

export default Competences;

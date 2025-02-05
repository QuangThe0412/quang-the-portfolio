import './skill.css'
import java from './image/logo/java.jpg'
import js from './image/logo/js.jpg'
import csharp from './image/logo/csharp.jpg'
import react from './image/logo/reactjs.jpg'
import spring from './image/logo/springboot.jpg'
import mvc from './image/logo/mvc.jpg'
import webpack from './image/logo/webpack.jpg'
import yarn from './image/logo/yarn.png'
import npm from './image/logo/npm.png'
import intellij from './image/logo/IntelliJ IDEA.jpg'
import vs from './image/logo/Visual Studio.jpg'
import vscode from './image/logo/vs code.jpg'
import { useHeaderStore } from './store-header'

function SkillComponent() {
    const lang = useHeaderStore((state) => state.lang);
    const text1 = lang === 'en' ? 'Programming Languages' : 'Ngôn Ngữ Lập Trình';
    const text2 = lang === 'en' ? 'Frameworks & Libraries' : 'Frameworks & Thư Viện';
    const text3 = lang === 'en' ? 'Tools & Platforms' : 'Công Cụ & Nền Tảng';

    return (
        <div className="skill-container">
            <div className="skill-list">
                <div className="skill-item">
                    <h3>{text1}</h3>
                    <ul>
                        <li>
                            <img src={java} alt="Java" />
                        </li>
                        <li>
                            <img src={js} alt="JavaScript" />
                        </li>
                        <li>
                            <img src={csharp} alt="C#" />
                        </li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h3>{text2}</h3>
                    <ul>
                        <li>
                            <img src={react} alt="ReactJS" />
                        </li>
                        <li>
                            <img src={mvc} alt=".NET MVC" />
                        </li>
                        <li>
                            <img src={spring} alt="Spring Boot" />
                        </li>
                    </ul>
                </div>
                <div className="skill-item">
                    <h3>{text3}</h3>
                    <ul>
                        <li>
                            <img src={webpack} alt="Webpack" />
                        </li>
                        <li>
                            <img src={yarn} alt="Yarn" />
                        </li>
                        <li>
                            <img src={npm} alt="NPM" />
                        </li>
                        <li>
                            <img src={intellij} alt="IntelliJ IDEA" />
                        </li>
                        <li>
                            <img src={vs} alt="Visual Studio" />
                        </li>
                        <li>
                            <img src={vscode} alt="VS Code" />
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default SkillComponent
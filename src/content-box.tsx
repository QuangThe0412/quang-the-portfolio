import useMenuStore from './store';
import { MenuItems } from './portfolio';

function ContentBox() {
    const chooseId = useMenuStore((state) => state.chooseId);
    console.log({ chooseId })

    return (
        <>
            {MenuItems.map((item) => (
                <div key={item.id} className={`content-box ${chooseId === item.id ? 'active' : ''}`}>
                    {item.container}
                </div>
            ))}
        </>
    )
}

export default ContentBox
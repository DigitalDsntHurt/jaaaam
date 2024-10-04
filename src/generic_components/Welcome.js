import './Welcome.css';

function Welcome({ text, title, theme }) {
    return (
        <div className={`banner-sect ${theme}-theme`} >
            <div className='wrapper'>
                <div className='title-cell'>
                    <h1>{title}</h1>
                </div>
                <div className='text-cell'>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Welcome;

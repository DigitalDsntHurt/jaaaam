import './Welcome.css';

function Welcome({ theme }) {
    return (
        <div className={`banner-sect ${theme}-theme`} >
            <div className='wrapper'>
                <div className='title-cell'>
                    <h1>Welcome</h1>
                </div>
                <div className='text-cell'>
                    <p>Bring movement and awareness into your body.</p>
                    <p>Discover the delight that follows.</p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

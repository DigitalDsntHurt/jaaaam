const Offerings = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <h1>Let's move together</h1>
            <div className="sexy-cell-container">
                <div className="sexy-cell"><text>Private Sessions</text></div>
                <div className="sexy-cell"><text>Community Classes</text></div>
                <div className="sexy-cell"><text>Programs for Seniors</text></div>
                <div className="sexy-cell"><text>Ski Instruction</text></div>
            </div>
        </div>
    );
}

export default Offerings;

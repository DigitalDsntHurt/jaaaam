const Offerings = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <h1>Let's move together</h1>
            <div className="sexy-cell-container">
                <div className="sexy-cell">Private Sessions</div>
                <div className="sexy-cell">Community Classes</div>
                <div className="sexy-cell">Programs for Seniors</div>
                <div className="sexy-cell">Ski Instruction</div>
            </div>
        </div>
    );
}

export default Offerings;

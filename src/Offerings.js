const Offerings = ({ theme }) => {
    return (
        <div className={`landing-sect ${theme}-theme`}>
            <h1>Let's move together</h1>
            <div className="offering-container">
                <div className="offering-item">Private Sessions</div>
                <div className="offering-item">Community Classes</div>
                <div className="offering-item">Programs for Seniors</div>
                <div className="offering-item">Ski Instruction</div>
            </div>
        </div>
    );
}

export default Offerings;

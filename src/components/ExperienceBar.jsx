export function ExperienceBar() {
    return(
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}}/>
                <span className="current-experience" style={{ left: '50%'}}>
                    350 xp
                </span>
            </div>
            <span>700 xp</span>
        </header>
    );
}
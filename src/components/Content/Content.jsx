const Content = ({ children }) => {
    return (
        <main className="content-container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    {children}
                </div>
                <div className="col-2"></div>
            </div>
        </main>
    );
}

export default Content;
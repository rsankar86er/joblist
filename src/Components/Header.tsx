const Header = ()=>{
    const handleClick = ()=>{
        window.location.href = "/createjob";
    }
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="text-xl font-bold">Job List</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="btn-primary text-white text-sm font-medium py-2 px-4 rounded" onClick={handleClick}>Create Job</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
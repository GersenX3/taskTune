function ITunesLogo(props) {
    return (
        <svg
            width={40}
            height={40}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <linearGradient id="itunes-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f952c8" />
                    <stop offset="100%" stopColor="#fc3c44" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#itunes-grad)" />
            <ellipse cx="38" cy="69" rx="13" ry="9" transform="rotate(-20 38 69)" fill="white" />
            <rect x="49" y="24" width="5" height="48" rx="2" fill="white" />
            <path d="M 54 24 Q 82 30 76 52 Q 68 40 54 40 Z" fill="white" />
        </svg>
    );
}

export { ITunesLogo };

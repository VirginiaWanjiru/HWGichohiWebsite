export default function Logo() {
    return (
        <svg width="60" height="55" viewBox="0 0 60 55" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="logo-pattern" patternUnits="userSpaceOnUse" width="120" height="110">
                    <image href="/images/logo.png"  width="60" height="55"  />
                </pattern>
            </defs>
            <rect width="60" height="55" fill="url(#logo-pattern)" />
        </svg>
    );
}

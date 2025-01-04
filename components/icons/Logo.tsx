export default function Logo() {
    return (
        <svg width="80" height="70" viewBox="0 3 60 55" >
            <defs>
                <pattern id="logo-pattern" patternUnits="userSpaceOnUse" width="120" height="110">
                    <image href="/images/logo.png"  width="80" height="78"  />
                </pattern>
            </defs>
            <rect width="60" height="55" fill="url(#logo-pattern)" />
        </svg>
    );
}

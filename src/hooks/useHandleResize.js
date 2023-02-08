import React from "react";

function useHandleResize() {
    const [devices, setDevices] = React.useState({
        isMobile: window.innerWidth < 600 ? true: false,
        isTablet: window.innerWidth >= 600 ? true: false,
        isDesktop: window.innerWidth >= 994 ? true: false,
        isLargeDesktop: window.innerWidth >= 1400 ? true: false
    })

    React.useEffect(() => {
        var rtime;
        var timeout = false;
        var delta = 200;

        function handleResize() {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(handleTimeout, delta);
            }
        }

        function handleTimeout() {
            if (new Date() - rtime < delta) {
                setTimeout(handleTimeout, delta);
            } else {
                timeout = false;
                setDevices({
                    isMobile: window.innerWidth < 600 ? true: false,
                    isTablet: window.innerWidth >= 600 ? true: false,
                    isDesktop: window.innerWidth >= 994 ? true: false,
                    isLargeDesktop: window.innerWidth >= 1400 ? true: false
                });
            }
        }

        window.addEventListener('resize', handleResize)
    })

    return devices;
}

export { useHandleResize };

"use strict";
{
    globalThis.C3.Plugins.MassiveCube_CordovaScreenLock.Acts = {
        Unlockscreen()
        {
            window.screen.orientation.unlock();
        },

        Lockscreen(orientation)
        {
            if (orientation == 0)
            {
                window.screen.orientation.lock('landscape');
            }
            else
            {
                window.screen.orientation.lock('portrait');
            }
        }
    };
}
import React, { useEffect } from 'react';

export default function EventbriteCheckout() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.eventbrite.co.uk/static/widgets/eb_widgets.js';
        script.async = true;

        script.onload = () => {
            if (!window.EBWidgets) return;

            window.EBWidgets.createWidget({
                widgetType: 'checkout',
                eventId: '1991542799123',
                iframeContainerId: 'eventbrite-widget-container-1991542799123',
                iframeContainerHeight: 700,
                onOrderComplete: () => {
                    console.log('Order complete!');
                },
            });
        };

        document.body.appendChild(script);
    }, []);

    return (
        <div id="eventbrite-widget-container-1991542799123" />
    );
}
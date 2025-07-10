"use client";

import React, { useEffect, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import PinBlack from "../../../../public/pin_black.png";
import styles from "./map.module.css";

const Pin = new L.Icon({
    iconUrl: PinBlack.src,
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

interface MapPin {
    coordinates: [number, number];
    popupHtml: string;
}

interface MapProps {
    center: {
        lng: number;
        lat: number;
    };
    pins: MapPin[];
}

const Map: React.FC<MapProps> = ({ center, pins }) => {
    const mapContainer = useRef(null);
    const map = useRef<L.Map | null>(null);

    // Offset to account for right two panels blocking some of view
    const offset = { lng: 0.0025, lat: 0.0 };

    // Where to start the map (offset + start pos)
    const adjustedCenter = {
        lng: center.lng + offset.lng,
        lat: center.lat + offset.lat,
    };

    const [zoom] = useState(17);

    useEffect(() => {
        if (!map.current) {
            //@ts-expect-error trust me bro
            map.current = new L.Map(mapContainer.current, {
                center: L.latLng(adjustedCenter.lat, adjustedCenter.lng),
                zoom: zoom,
                dragging: true,
                scrollWheelZoom: false,
                doubleClickZoom: true,
                touchZoom: true,
                boxZoom: true,
                keyboard: false,
            });

            // Create OpenStreetMap tile layer with better contrast for emergency use
            const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
                className: 'map-tiles'
            });

            // Alternative: Use CartoDB Positron for cleaner emergency dispatch view
            // const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            //     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
            //     maxZoom: 19,
            //     subdomains: 'abcd'
            // });

            osmLayer.addTo(map.current);
        }

        // Update map center when center prop changes
        map.current.flyTo(
            [adjustedCenter.lat, adjustedCenter.lng],
            map.current.getZoom(),
            {
                animate: true,
                duration: 1,
            },
        );

        // Clear existing markers
        map.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.current!.removeLayer(layer);
            }
        });

        // Add pins to the map
        pins.forEach((pin) => {
            L.marker(pin.coordinates, { icon: Pin })
                .addTo(map.current!)
                .bindPopup(pin.popupHtml);
        });
    }, [adjustedCenter.lng, adjustedCenter.lat, zoom, pins]);

    return (
        <div className={styles.mapWrap}>
            <div ref={mapContainer} className={styles.map} />
        </div>
    );
};

export default Map;

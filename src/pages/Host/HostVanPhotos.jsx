import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} alt={`${currentVan.name}'s image` }className="host-van-detail-image" />
    )
}
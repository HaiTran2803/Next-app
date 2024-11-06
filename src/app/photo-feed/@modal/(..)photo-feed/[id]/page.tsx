import Image from "next/image";
import wondersImages,{WonderImage} from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default function PhotoModal({params: {id}}:{params: {id: string}}) {
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!
    return(
        <Modal>
            <div className="hover:rounded-t-2xl duration-500">
                <Image alt={photo.name} src={photo.src} className="w-full object-cover aspect-square rounded-t-2xl duration-500"/>
                <div className="bg-white p-4 rounded-b-2xl hover: duration-500">
                    <h2 className="text-xl font-semibold">{photo.name}</h2>
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
                    <h1>This is intercepting route</h1>
                </div>
            </div>
        </Modal>
    )
};
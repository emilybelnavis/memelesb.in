import { getStrapiMedia } from "@/lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
    const { alternativeText, width, height } = image.data.attributes;
    return (
        <NextImage
            fill="responsive"
            width={width}
            height={height}
            style="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    )
}

export default Image;
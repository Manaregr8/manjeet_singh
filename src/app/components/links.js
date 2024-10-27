import Image from "next/image";

export default function Links({mainSrc, src1, alt1, src2, alt2, name}){
    return (
        <a className="links" href={mainSrc}>
        <Image
        className="linksImage"
          src={src1}
          alt={alt1}
          width={30}
          height={30}
          priority
        />
        <p>-</p>
        <Image
        className="linksImage"
          src={src2}
          alt={alt2}
          width={30}
          height={30}
          priority
        />
        <p className="linksName">{name}</p>
        </a>
    );
}
import { fetchGalleries } from "@/lib/data.service";
import Link from "next/link";

const NavigationLinks = async () => {

const galleries = await fetchGalleries();

return (
  <>
    {galleries.map((gallery, index) => {
      {
       
      }
      return <Link href={gallery.name} key={index} gallery={gallery}>{gallery.name}</Link>;
    })}
  </>
);

};

export default NavigationLinks;
import Link from "next/link";

const NavigationLinks = ({gallery}) => {

let url = "/galleries/" + gallery.name;

return (
  <>
    <Link href={url}>{gallery.name}</Link>
  </>
);

};

export default NavigationLinks;
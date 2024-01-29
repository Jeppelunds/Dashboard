import styles from "./page.module.css";
import Dashboard from "@/components/dashboard/dashboard";
import { fetchAuthorsByGalleryName, fetchImagesForAuthor } from "@/lib/data.service";
import { fetchAuthorByNicUrl } from "@/lib/data.service";

export default async function Page({ params }) {
    
  const author = await fetchAuthorsByGalleryName(params.gallery);
  let authorUrl = await fetchAuthorByNicUrl(params.author);
  let authorImages = await fetchImagesForAuthor(authorUrl.author)
  


  return (
    <main className={styles.page}>
      <Dashboard author={author} authorUrl={authorUrl} authorImages={authorImages}></Dashboard>;
    </main>
  );
}

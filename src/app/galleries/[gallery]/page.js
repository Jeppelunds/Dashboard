import styles from "./page.module.css";
import Dashboard from "@/components/dashboard/dashboard";
import {
  fetchAuthorsByGalleryName,
} from "@/lib/data.service";

export default async function Page({ params }) {
  const author = await fetchAuthorsByGalleryName(params.gallery);

  return (
    <main className={styles.page}>
      <Dashboard author={author}></Dashboard>;
    </main>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between p-2 bg-sky-900 text-white">
      <p>&copy;{currentYear}</p>
      <p>All rights reserved</p>
    </footer>
  );
}

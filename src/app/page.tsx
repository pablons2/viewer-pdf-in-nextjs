import PdfViewer from "./components/pdf/PDFViewer";



export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
              
              <PdfViewer url={"/pdf-file.pdf"} />
    </main>
  );
}

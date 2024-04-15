export default function Resume() {
   const resume = '../../public/garret-hil-2024.pdf'; 
  
  return (
      <div>
      <h2>Download the PDF</h2>
      <a href={resume} download="garret-hildebrandt.pdf">
        Click here to download resume
      </a>
    </div>
    );
  }
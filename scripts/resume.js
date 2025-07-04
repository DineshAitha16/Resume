
function downloadDoc() {
  const content = document.getElementById('resume').innerHTML;
  const blob = new Blob(['<html><body>' + content + '</body></html>'], {
    type: 'application/msword'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.doc';
  link.click();
}

function downloadText() {
  const content = document.getElementById('resume').innerText;
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.txt';
  link.click();
}

function downloadPDF() {
  const doc = new jsPDF();
  doc.text(document.getElementById('resume').innerText, 10, 10);
  doc.save('resume.pdf');
}

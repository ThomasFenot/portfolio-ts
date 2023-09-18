import {
    Button
} from "@chakra-ui/react"

const downloadFile = () => {
    fetch('Thomas-Fenot-Resume-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Thomas-Fenot-Resume-ENG.pdf';
          alink.click();
      })
  })
}

export const DownloadButton  = () => {
  return (
    <Button variant='solid' colorScheme='blue' onClick={downloadFile}>
        Get my resume here ! [TODO]
    </Button>
  )
}

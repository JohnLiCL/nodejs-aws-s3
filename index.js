import express from 'express';
import fileUpload from 'express-fileupload';

import { downloadFile, getFile, getFiles, getFileUrl, uploadFile } from './s3.js'

const app = express();

app.use(express.static('images'));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'

}));

app.listen(3000);

console.log("Server listening on port 3000");

app.post('/files', async (req, res) => {
  const result = await uploadFile(req.files.file);
  res.json({ result });
});

app.get('/files', async (req, res) => {
  const result = await getFiles();
  res.json(result.Contents);
});

app.get('/files/:fileName?', async (req, res) => {
  const fileName = req.params.fileName;
  const result = await getFileUrl(fileName);
  res.json({url: result});
});

app.get('/downloadfile/:fileName?', async (req, res) => {
  const fileName = req.params.fileName;
  await downloadFile(fileName);
  res.json({ message: 'Archivo descargado!!!' });
});



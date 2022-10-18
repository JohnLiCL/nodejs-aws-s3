# nodejs-aws-s3
Api - Subir archivos al Servicio AWS S3

npm i express express-fileupload

//Solo para desarrollo
npm i nodemon

Crear cuenta AWS

crear BUCKET
IAM --> Crear Politica - getObject - putObject - list
crear Usuario --> Seleccionar Politica

npm i dotenv

crear archivo .env y agregar los valores a las variables obtenidas desde la cuenta AWS

AWS_BUCKET_NAME=
AWS_BUCKET_REGION=
AWS_PUBLIC_KEY=
AWS_SECRET_KEY=


*Instalar SDK AWS
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html

npm install @aws-sdk/client-s3

*Instalar @aws-sdk/s3-request-presigner para obtener URL

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_s3_request_presigner.html

npm i @aws-sdk/s3-request-presigner

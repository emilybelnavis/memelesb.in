module.exports =({ env }) => ({
  upload : {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("S3_ACCESS_KEY_ID"),
        secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
        endpoint: env("S3_ENDPOINT"),
        params: {
          ACL: "private",
          Bucket: env("S3_BUCKET_NAME"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

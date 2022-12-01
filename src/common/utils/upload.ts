import AWS from 'aws-sdk'

export const guid = () => {
  function _s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4()
}

export const uploadFile = async (file: any) => {
  if (!file) return
  const region = 'ap-northeast-2'
  const bucket = 'gram-img/upload-img'

  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  })
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: `${guid()}.jpeg`,
      Body: file,
    },
  })
  const promise = await upload.promise()
  try {
    console.log('success')
  } catch (err) {
    console.log('err')
  }
  return promise.Location
}

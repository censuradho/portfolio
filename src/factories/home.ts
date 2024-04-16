function imageFactory (data: any) {
  const { fields } = data || {}

  return {
    title: fields?.title || '',
    description: fields?.description || '',
    file: {
      url: fields?.file?.url || '',
      filename: fields?.file?.filename || '',
      contentType: fields?.file?.contentType || '',
      details: {
        size: fields?.file?.details?.size || '',
        image: {
          width: fields?.file?.details?.image?.width || 0,
          height: fields?.file?.details?.image?.height || 0,
        },
      }
    }
  }
}

function richTextFactory (data: any): Document {
  return data
}


function metadataFactory (data: any) {
  const { fields } = data || {}

  return {
    title: fields?.title || '',
    description: fields?.description || '',
  }
}
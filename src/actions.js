let nextImageId = 0

export const addImages = (image) => {
  return {
    type: 'ADD_IMAGES',
    data : image
  }
}

export const getImages = () => {
  return {
    type: 'GET_IMAGES',
  }
}

// export  default addImages;

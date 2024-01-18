const getQueryParams = (queryParams?: { [key: string | number]: any }): string => {
  if (queryParams) {
    let params = '?'
    const keys = Object.keys(queryParams)
    keys.forEach((key, index) => {
      if (queryParams[key] != null) {
        params += `${key}=${queryParams[key]}`
        if (keys.length - 1 !== index) params += '&'
      }
    })
    return params
  }
  return ''
}

export default getQueryParams
